import type { Category, Game, OptionalClue, Round, ScoreBlock } from "$lib/types.ts";
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
            return "Unknown";
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

function parseClue(roundNum: number, categoryNum: number, clueNum: number, clueElm: Element): OptionalClue {
    const headerElm = clueElm.querySelector("table.clue_header");
    if (!headerElm) {
        return null;
    }

    const valueElm = headerElm.querySelector('[class^="clue_value"]');
    const dailyDouble = valueElm?.textContent?.startsWith("DD:") ?? false;
    const value = 100 * roundNum * (clueNum - 1);


    const playOrder = headerElm?.querySelector("td.clue_order_number")?.textContent ?? "0";
    const clueTextElms = clueElm.querySelectorAll("td.clue_text");
    if (clueTextElms.length < 2) {
        return null;
    }

    const clueText = clueTextElms[0].innerHTML ?? "";
    const responseElm = clueTextElms[1];


    let extra: string[] = [];
    let sameLine = false;
    for (let childNode of clueTextElms[1].childNodes) {
        if (childNode.nodeType === Node.TEXT_NODE) {
            if (childNode.textContent) {
                if (sameLine) {
                    extra[extra.length - 1] += childNode.textContent;
                    sameLine = false;
                } else {
                    extra.push(childNode.textContent);
                }
            }
        } else {
            const childElm = childNode as Element;
            if (childElm.tagName == "SPAN") {
                extra[extra.length - 1] += childElm.textContent || "";
                sameLine = true;
            }
        }
    }

    const correctResponse = responseElm.querySelector("em.correct_response")?.textContent ?? "";

    const responderTableElms = responseElm.querySelectorAll("table");
    let correctResponder: string | null = null;
    let incorrectResponders: string[] = [];
    for (var responderTableElm of responderTableElms) {
        correctResponder = responderTableElm.querySelector("td.right")?.textContent ?? "";
        for (var incorrectResponderElm of responderTableElm.querySelectorAll("td.wrong")) {
            if (incorrectResponderElm.textContent && incorrectResponderElm.textContent != "Triple Stumper") {
                incorrectResponders.push(incorrectResponderElm.textContent);
            }
        }
    }

    return {
        roundNum: roundNum,
        categoryNum: categoryNum,
        clueNum: clueNum,
        value: value,
        playOrder: parseInt(playOrder),
        clueText: clueText,
        correctResponse: correctResponse,
        comments: extra,
        incorrectResponders: incorrectResponders,
        correctResponder: correctResponder,
        dailyDouble: dailyDouble,
        dailyDoubleWager: null,
        finalJeopardy: false,
        finalJeopardyResponses: []
    };
}

function parseCategory(roundNum: number, categoryNum: number, clues: OptionalClue[], categoryElm: Element): Category {
    const titleElm = categoryElm.querySelector("h2.category_name");
    const commentsElm = categoryElm.querySelector("p.category_comments");
    return {
        roundNum: roundNum,
        categoryNum: categoryNum,
        clues: clues,
        title: titleElm?.textContent || "",
        comments: commentsElm?.textContent || "",
    };
}

function parseScoreBlock(scoreBlockElm: Element): ScoreBlock {
    return {
        title: "",
        players: [],
    }
}

function parseRound(roundNum: number, roundElm: Element): Round {
    if (roundElm.id == "final_jeopardy_round") {
        return {
            roundNum: roundNum,
            name: roundIDToName(roundElm.id),
            categories: [],
            scoreBlocks: [],
        };
    }

    const tbodyElm = roundElm.querySelector("table.round > tbody");
    if (!tbodyElm) {
        throw new Error("Could not find table.round > tbody in round element");
    }

    const rowElms = Array.from(tbodyElm.children);
    if (rowElms.length < 2) {
        throw new Error("Not enough rows in table.round");
    }

    let cluesPerCategory: OptionalClue[][] = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
    ];

    const clueRows = rowElms.slice(1);
    for (let clueNum = 0; clueNum < clueRows.length; clueNum++) {
        const clueElms = Array.from(clueRows[clueNum].querySelectorAll("td.clue"));
        for (let categoryNum = 0; categoryNum < clueElms.length; categoryNum++) {
            const clueElm = clueElms[categoryNum];
            const clue = parseClue(roundNum, categoryNum, clueNum, clueElm);
            cluesPerCategory[categoryNum][clueNum] = clue;
        }
    }

    let categories: Category[] = [];
    const categoryElms = Array.from(rowElms[0].querySelectorAll("td.category"));
    for (let categoryNum = 0; categoryNum < categoryElms.length; categoryNum++) {
        const categoryElm = categoryElms[categoryNum];
        const category = parseCategory(roundNum, categoryNum, cluesPerCategory[categoryNum], categoryElm);
        categories.push(category);
    }

    return {
        roundNum: roundNum,
        name: roundIDToName(roundElm.id),
        categories: categories,
        scoreBlocks: [],
    };
}


export function parseGame(contentElm: Element): Game {
    const gameTitleElm = contentElm.querySelector("#game_title");
    const gameCommentsElm = contentElm.querySelector("#game_comments");
    const contestantsElm = contentElm.querySelector("#contestants");
    const roundElms = Array.from(contentElm.querySelectorAll('[id$="_round"]'));

    return {
        title: gameTitleElm?.textContent || "",
        comments: gameCommentsElm?.textContent || "",
        contestants: [],
        rounds: roundElms.map((roundElm, roundNum) => parseRound(roundNum, roundElm)),
    };
} 