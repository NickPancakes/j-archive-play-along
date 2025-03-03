
export const RoundName = {
    Jeopardy: "Jeopardy!",
    DoubleJeopardy: "Double Jeopardy!",
    TripleJeopardy: "Triple Jeopardy!",
    FinalJeopardy: "Final Jeopardy!"
} as const;


export type FinalJeopardyResponse = {
    player: string;
    wager: number;
    response: string;
    correct: boolean;
}

export type ClueResponse = {
    correctResponse: string;
    comments: string[];
    incorrectResponders: string[];
    correctResponder: string | null;
}

export type UnselectedClueData = {
    roundNum: number;
    categoryNum: number;
    clueNum: number;
}

export type ClueData = {
    roundNum: number;
    categoryNum: number;
    clueNum: number;
    value: number;
    playOrder: number;
    dailyDouble: boolean;
    finalJeopardy: boolean;
    clueHTML: string;
    response: ClueResponse;
    dailyDoubleWager: number | null;
    finalJeopardyResponses: FinalJeopardyResponse[];
}


export type OptionalClueData = ClueData | UnselectedClueData;

export type CategoryData = {
    roundNum: number;
    categoryNum: number;
    title: string;
    comments: string;
    clues: OptionalClueData[];
}


export type ScoreBlockPlayer = {
    name: string;
    score: number;
}

export type ScoreBlockData = {
    title: string;
    players: ScoreBlockPlayer[];
}


export type RoundData = {
    roundNum: number;
    name: string;
    categories: CategoryData[];
    scoreBlocks: ScoreBlockData[];
}

export type ContestantData = {
    id: number;
    name: string;
    comments: string;
}

export type GameData = {
    title: string;
    comments: string;
    contestants: ContestantData[];
    rounds: RoundData[];
}

export const ClueDisplayStates = {
    Clue: 0,
    CorrectResponse: 1,
    FinalResponses: 2,
    DailyDouble: 3
} as const;

export type ClueDisplay = {
    show: boolean;
    state: number;
    clue: ClueData;
}