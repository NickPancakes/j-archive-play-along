import type { CategoryData, ClueResponse, ContestantData, GameData, OptionalClueData, RoundData, ScoreBlockData, } from "$lib/types.ts";
import { RoundName } from "$lib/types.ts";

function roundIDToName(roundID: string): string {
    switch (roundID) {
        case "jeopardy_round":
            return RoundName.Jeopardy;
        case "double_jeopardy_round":
            return RoundName.DoubleJeopardy;
        case "triple_jeopardy_round":
            return RoundName.TripleJeopardy;
        case "final_jeopardy_round":
            return RoundName.FinalJeopardy;
        default:
            throw new Error("Unrecognized round ID: " + roundID);
    }
}

function clueIDToGridPosition(clueID: string): [number, number, number] {
    const splitID = clueID.split("_");
    const row = parseInt(splitID[3]) + 1;
    const col = parseInt(splitID[2]);
    switch (splitID[1].toUpperCase()) {
        case "J":
            return [1, row, col];
        case "DJ":
            return [2, row, col];
        case "TJ":
            return [3, row, col];
        case "FJ":
            return [4, 1, 1];
    }
    return [1, row, col];
}

function parseClueResponse(responseElm: Element): ClueResponse {
    let correctResponse: string = "";
    let correctResponder: string | null = null;
    let incorrectResponders: string[] = [];
    let comments: string[] = [];

    let sameLine = false;
    for (let childNode of responseElm.childNodes) {
        if (childNode.nodeType === Node.TEXT_NODE) {
            if (childNode.textContent) {
                if (sameLine) {
                    comments[comments.length - 1] += childNode.textContent;
                    sameLine = false;
                } else {
                    comments.push(childNode.textContent);
                }
            }
        } else {
            const childElm = childNode as Element;
            if (childElm.tagName == "SPAN") {
                comments[comments.length - 1] += childElm.textContent || "";
                sameLine = true;
            } else if (childElm.tagName == "EM") {
                correctResponse = childElm.textContent || "";
            } else if (childElm.tagName == "TABLE") {
                const rightElm = childElm.querySelector("td.right");
                if (rightElm && rightElm.textContent) {
                    correctResponder = rightElm.textContent;
                }
                for (var incorrectResponderElm of childElm.querySelectorAll("td.wrong")) {
                    if (incorrectResponderElm.textContent && incorrectResponderElm.textContent != "Triple Stumper") {
                        incorrectResponders.push(incorrectResponderElm.textContent);
                    }
                }
            }
        }
    }

    return {
        correctResponse: correctResponse,
        comments: comments,
        incorrectResponders: incorrectResponders,
        correctResponder: correctResponder,
    };
}

function parseClue(roundNum: number, categoryNum: number, clueNum: number, clueElm: Element): OptionalClueData {

    let playOrder = "0";
    let dailyDouble = false;

    const headerElm = clueElm.querySelector("table.clue_header");
    if (headerElm) {
        playOrder = headerElm?.querySelector("td.clue_order_number")?.textContent ?? "0";

        const valueElm = headerElm.querySelector('[class^="clue_value"]');
        dailyDouble = valueElm?.textContent?.startsWith("DD:") ?? false;
    }

    const clueTextElms = clueElm.querySelectorAll("td.clue_text");
    if (clueTextElms.length == 0) {
        return {
            roundNum: roundNum,
            categoryNum: categoryNum,
            clueNum: clueNum,
        };
    }

    const clueHTML = clueTextElms[0].innerHTML ?? "";
    const responseElm = clueTextElms[1];
    const clueResponse = parseClueResponse(responseElm);

    return {
        roundNum: roundNum,
        categoryNum: categoryNum,
        clueNum: clueNum,
        value: 100 * (roundNum + 1) * (clueNum + 1),
        playOrder: parseInt(playOrder),
        clueHTML: clueHTML,
        response: clueResponse,
        dailyDouble: dailyDouble,
        dailyDoubleWager: null,
        finalJeopardy: false,
        finalJeopardyResponses: []
    };
}

function parseCategory(roundNum: number, categoryNum: number, clues: OptionalClueData[], categoryElm: Element): CategoryData {
    const titleElm = categoryElm.querySelector(".category_name");
    const commentsElm = categoryElm.querySelector(".category_comments");

    return {
        roundNum: roundNum,
        categoryNum: categoryNum,
        clues: clues,
        title: titleElm?.textContent || "",
        comments: commentsElm?.textContent || "",
    };
}

function parseScoreBlock(scoreBlockElm: Element): ScoreBlockData {
    return {
        title: "",
        players: [],
    }
}

function parseFinalRound(roundNum: number, roundName: string, categoryRowElm: Element, clueRowElm: Element): RoundData {
    const clueElm = clueRowElm.querySelector("td.clue");
    if (!clueElm) {
        throw new Error("Could not find td.clue in final round clue row");
    }

    const categoryElm = categoryRowElm.querySelector("td.category");
    if (!categoryElm) {
        throw new Error("Could not find td.category in final round category row");
    }

    const clue = parseClue(roundNum, 1, 0, clueElm);
    const category = parseCategory(roundNum, 1, [clue], categoryElm);

    return {
        roundNum: roundNum,
        name: roundName,
        categories: [category],
        scoreBlocks: [],
    };
}

function parseNormalRound(roundNum: number, roundName: string, categoryRowElm: Element, clueRowElms: Element[]): RoundData {
    let cluesPerCategory: OptionalClueData[][] = [
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    for (let clueNum = 0; clueNum < clueRowElms.length; clueNum++) {
        const clueElms = Array.from(clueRowElms[clueNum].querySelectorAll("td.clue"));
        for (let categoryNum = 0; categoryNum < clueElms.length; categoryNum++) {
            const clueElm = clueElms[categoryNum];
            const clue = parseClue(roundNum, categoryNum, clueNum, clueElm);
            cluesPerCategory[categoryNum][clueNum] = clue;
        }
    }

    let categories: CategoryData[] = [];
    const categoryElms = Array.from(categoryRowElm.querySelectorAll("td.category"));
    for (let categoryNum = 0; categoryNum < categoryElms.length; categoryNum++) {
        const categoryElm = categoryElms[categoryNum];
        const category = parseCategory(roundNum, categoryNum, cluesPerCategory[categoryNum], categoryElm);
        categories.push(category);
    }

    return {
        roundNum: roundNum,
        name: roundName,
        categories: categories,
        scoreBlocks: [],
    };
}

function parseRound(roundNum: number, roundElm: Element): RoundData {
    const roundName = roundIDToName(roundElm.id);

    const tbodyElm = roundElm.querySelector("table > tbody");
    if (!tbodyElm) {
        throw new Error("Could not find table > tbody in round element");
    }

    const rowElms = Array.from(tbodyElm.children);
    if (rowElms.length < 2) {
        throw new Error("Not enough rows in table.round");
    }

    const categoryRowElm = rowElms[0];
    const clueRowElms = rowElms.slice(1);

    if (roundName == RoundName.FinalJeopardy) {
        return parseFinalRound(roundNum, roundName, categoryRowElm, clueRowElms[0]);
    }

    return parseNormalRound(roundNum, roundName, categoryRowElm, clueRowElms);

}

function parseContestant(contestantsPElm: Element): ContestantData {
    let id = 0;
    let name = "";
    let comments = "";
    for (let childNode of contestantsPElm.childNodes) {
        if (childNode.nodeType === Node.TEXT_NODE) {
            if (childNode.textContent) {
                comments = childNode.textContent;
            }
        } else {
            const childElm = childNode as Element;
            if (childElm.tagName == "A") {
                id = parseInt((childElm as HTMLAnchorElement).href.split("player_id=").pop() || "0");
                name = childElm.textContent || "";
            }
        }
    }

    if (comments.startsWith(", ")) {
        comments = comments.substring(2);
    }

    return {
        id: id,
        name: name,
        comments: comments,
    };
}

function parseContestants(contestantsTableElm: Element): ContestantData[] {
    const contestantsElms = Array.from(contestantsTableElm.querySelectorAll("p.contestants"));
    return contestantsElms.map((contestantPElm) => parseContestant(contestantPElm))
}


export function parseGame(contentElm: Element): GameData {
    const gameID = parseInt(window.location.href.split('game_id=').pop() || "0");
    const gameTitleElm = contentElm.querySelector("#game_title");
    const gameCommentsElm = contentElm.querySelector("#game_comments");
    const contestantsTableElm = contentElm.querySelector("#contestants");
    const roundElms = Array.from(contentElm.querySelectorAll('[id$="_round"]'));

    return {
        id: gameID,
        title: gameTitleElm?.textContent || "",
        comments: gameCommentsElm?.textContent || "",
        contestants: contestantsTableElm ? parseContestants(contestantsTableElm) : [],
        rounds: roundElms.map((roundElm, roundNum) => parseRound(roundNum, roundElm)),
    };
} 