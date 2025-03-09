import {
    type CategoryData,
    type ClueResponse,
    type ContestantData,
    type GameData,
    type OptionalClueData,
    type Responder,
    type RoundData,
    type ScoreBlockData,
    type ScoreBlockPlayer,
    RoundName,
} from "$lib/types.ts";

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


function parseNormalResponsesTable(rowElm: Element): Responder[] | null {
    let responders: Responder[] = [];

    const rightElm = rowElm.querySelector("td.right");
    if (rightElm && rightElm.textContent) {
        responders.push({
            player: rightElm.textContent,
            wager: 0,
            response: "",
            correct: true,
        })
    }

    for (var wrongElm of rowElm.querySelectorAll("td.wrong")) {
        if (wrongElm.textContent && wrongElm.textContent != "Triple Stumper") {
            responders.push({
                player: wrongElm.textContent,
                wager: 0,
                response: "",
                correct: false,
            })
        }
    }

    return responders.length > 0 ? responders : null;
}

function parseFinalResponsesRows(rowElms: Element[]): Responder[] | null {
    let responders: Responder[] = [
        { player: "", wager: 0, response: "", correct: false },
        { player: "", wager: 0, response: "", correct: false },
        { player: "", wager: 0, response: "", correct: false },
    ];

    for (let rowIdx = 0; rowIdx < rowElms.length; rowIdx++) {
        const rowElm = rowElms[rowIdx];
        const playerNum = (rowIdx / 2) | 0;

        const tdElms = rowElm.querySelectorAll("td");
        if (!tdElms) {
            continue;
        }

        if (rowIdx % 2 == 0 && tdElms.length >= 2) {
            responders[playerNum].correct = tdElms[0].className == "right";
            responders[playerNum].player = tdElms[0].textContent || "";
            responders[playerNum].response = tdElms[1].textContent || "";
        } else {
            const wager = (tdElms[0].textContent || "$0").replaceAll("$", "").replaceAll(",", "");
            responders[playerNum].wager = parseInt(wager);
        }
    }

    return responders;
}


function parseResponsesTable(childElm: Element): Responder[] | null {
    const rowElms = childElm.querySelectorAll("tr");
    if (rowElms == null) {
        return null;
    } else if (rowElms.length == 6) {
        return parseFinalResponsesRows(Array.from(rowElms));
    }
    return parseNormalResponsesTable(childElm);
}

function parseClueResponse(responseElm: Element): ClueResponse {
    let correctResponse: string = "";
    let responders: Responder[] = [];
    let comments: string[] = [];

    let comment = "";
    for (let childNode of responseElm.childNodes) {
        if (childNode.nodeType === Node.TEXT_NODE) {
            if (childNode.textContent) {
                comment += childNode.textContent;
            }
        } else {
            const childElm = childNode as Element;
            switch (childElm.tagName) {
                case "BR":
                    if (comment) {
                        comments.push(comment);
                        console.log(comment);
                        comment = "";
                    }
                    break;
                case "EM":
                    correctResponse = childElm.textContent || "";
                    break;
                case "TABLE":
                    const parsedResponses = parseResponsesTable(childElm);
                    if (parsedResponses) {
                        responders = parsedResponses;
                    }
                    break;
                default:
                    comment += childNode.textContent;
                    break;
            }
        }
    }

    return {
        correctResponse: correctResponse,
        comments: comments,
        responders: responders,
    };
}


function parseFinalClue(roundNum: number, categoryNum: number, clueNum: number, clueElm: Element): OptionalClueData {
    const clueTextElms = clueElm.querySelectorAll("td.clue_text");
    const clueHTML = clueTextElms[0].innerHTML ?? "";
    const responseElm = clueTextElms[1];
    const clueResponse = parseClueResponse(responseElm);

    return {
        roundNum: roundNum,
        categoryNum: categoryNum,
        clueNum: clueNum,
        value: 0,
        playOrder: 0,
        clueHTML: clueHTML,
        response: clueResponse,
        dailyDouble: false,
        dailyDoubleWager: null,
        finalJeopardy: true,
    };
}
function parseClue(roundNum: number, totalRounds: number, categoryNum: number, clueNum: number, clueElm: Element): OptionalClueData {

    let playOrder = "0";
    let dailyDouble = false;
    let dailyDoubleWager: number | null = null;

    // Primetime Celebrity Jeopardy's first round starts at $100 rather than $200.
    const baseValue = totalRounds > 3 ? 100 : 200;
    const value = baseValue * (roundNum + 1) * (clueNum + 1)

    const headerElm = clueElm.querySelector("table.clue_header");
    if (headerElm) {
        playOrder = headerElm?.querySelector("td.clue_order_number")?.textContent ?? "0";

        const valueElm = headerElm.querySelector('[class^="clue_value"]');
        const valueText = valueElm?.textContent || "";
        dailyDouble = valueText.startsWith("DD:");
        if (dailyDouble) {
            dailyDoubleWager = parseInt((valueText.split(":").pop() || "0").replaceAll("$", "").replaceAll(",", ""));
        }
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
        value: value,
        playOrder: parseInt(playOrder),
        clueHTML: clueHTML,
        response: clueResponse,
        dailyDouble: dailyDouble,
        dailyDoubleWager: dailyDoubleWager,
        finalJeopardy: false,
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


function parseFinalRoundTable(roundNum: number, tableElm: Element): CategoryData[] {
    const tbodyElm = tableElm.querySelector("tbody");
    if (!tbodyElm) {
        throw new Error("Could not find  in round element");
    }

    const rowElms = Array.from(tbodyElm.children);
    if (rowElms.length < 2) {
        throw new Error("Not enough rows in table.round");
    }

    const categoryRowElm = rowElms[0];
    const clueRowElm = rowElms[1];

    const clueElm = clueRowElm.querySelector("td.clue");
    if (!clueElm) {
        throw new Error("Could not find td.clue in final round clue row");
    }

    const categoryElm = categoryRowElm.querySelector("td.category");
    if (!categoryElm) {
        throw new Error("Could not find td.category in final round category row");
    }

    const clue = parseFinalClue(roundNum, 1, 0, clueElm);
    const category = parseCategory(roundNum, 1, [clue], categoryElm);

    return [category];
}

function parseNormalRoundTable(roundNum: number, totalRounds: number, tableElm: Element): CategoryData[] {
    const tbodyElm = tableElm.querySelector("tbody");
    if (!tbodyElm) {
        throw new Error("Could not find tbody in round element");
    }

    const rowElms = Array.from(tbodyElm.children);
    if (rowElms.length < 2) {
        throw new Error("Not enough rows in table.round");
    }

    const categoryRowElm = rowElms[0];
    const clueRowElms = rowElms.slice(1);

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
            const clue = parseClue(roundNum, totalRounds, categoryNum, clueNum, clueElm);
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

    return categories;
}

function parseScoreBlock(title: string, scoreTableElm: Element): ScoreBlockData {
    let players: ScoreBlockPlayer[] = [
        { name: "", score: 0, remarks: "" },
        { name: "", score: 0, remarks: "" },
        { name: "", score: 0, remarks: "" },
    ];

    const rowElms = Array.from(scoreTableElm.querySelectorAll("tr"));
    if (rowElms.length < 2) {
        throw new Error("Not enough rows in table.score_block");
    }

    const namesRowElm = rowElms[0];
    const scoresRowElm = rowElms[1];
    const remarksRowElm = rowElms[2];

    for (let playerNum = 0; playerNum < 3; playerNum++) {
        const nameElm = namesRowElm.children[playerNum];
        const scoreElm = scoresRowElm.children[playerNum];
        const remarksElm = remarksRowElm?.children[playerNum];

        const scoreText = (scoreElm?.textContent || "$0").replaceAll("$", "").replaceAll(",", "");

        players[playerNum] = {
            name: nameElm.textContent || "",
            score: parseInt(scoreText),
            remarks: remarksElm?.textContent || "",
        };
    }

    return {
        title: title,
        players: players,
    }
}

function parseRound(roundNum: number, totalRounds: number, roundElm: Element): RoundData {
    const roundName = roundIDToName(roundElm.id);

    let categories: CategoryData[] = [];
    let scoreBlocks: ScoreBlockData[] = [];

    let currentScoreBlockTitle: string = "";

    for (let childElm of roundElm.children) {
        switch (childElm.tagName) {
            case "H3":
                currentScoreBlockTitle = childElm.textContent || "";
                break;
            case "TABLE":
                if (childElm.className == "round") {
                    categories = parseNormalRoundTable(roundNum, totalRounds, childElm);
                } else if (childElm.className == "final_round") {
                    categories = parseFinalRoundTable(roundNum, childElm);
                } else {
                    scoreBlocks.push(parseScoreBlock(currentScoreBlockTitle, childElm));
                }
                break;
        }
    }


    return {
        roundNum: roundNum,
        name: roundName,
        categories: categories,
        scoreBlocks: scoreBlocks,
    }
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
        rounds: roundElms.map((roundElm, roundNum) => parseRound(roundNum, roundElms.length, roundElm)),
    };
} 