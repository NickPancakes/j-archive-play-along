


export type FinalJeopardyResponse = {
    player: string;
    wager: number;
    response: string;
    correct: boolean;
}

export type Clue = {
    roundNum: number;
    categoryNum: number;
    clueNum: number;
    playOrder: number;
    value: number;
    clueText: string;
    correctResponse: string;
    comments: string[];
    incorrectResponders: string[];
    correctResponder: string | null;
    dailyDouble: boolean;
    dailyDoubleWager: number | null;
    finalJeopardy: boolean;
    finalJeopardyResponses: FinalJeopardyResponse[];
}


export type OptionalClue = Clue | null;

export type Category = {
    roundNum: number;
    categoryNum: number;
    title: string;
    comments: string;
    clues: OptionalClue[];
}

export const RoundName = {
    Jeopardy: "Jeopardy!",
    DoubleJeopardy: "Double Jeopardy!",
    TripleJeopardy: "Triple Jeopardy!",
    FinalJeopardy: "Final Jeopardy!"
};

export type ScoreBlockPlayer = {
    name: string;
    score: number;
}

export type ScoreBlock = {
    title: string;
    players: ScoreBlockPlayer[];
}


export type Round = {
    roundNum: number;
    name: string;
    categories: Category[];
    scoreBlocks: ScoreBlock[];
}

export type Contestant = {
    name: string;
    link: string;
    comments: string;
}

export type Game = {
    title: string;
    comments: string;
    contestants: Contestant[];
    rounds: Round[];
}

export const ClueDisplayStates = {
    Clue: 0,
    CorrectResponse: 1,
    FinalResponses: 2,
    DailyDouble: 3
};

export type ClueDisplay = {
    show: boolean;
    state: number;
    clue: Clue;
}