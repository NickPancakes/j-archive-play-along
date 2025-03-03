

import { ClueDisplayStates, type ClueData, type ClueDisplay } from "$lib/types.ts";


export type SelectedClueState = {
  show: boolean;
  displayState: number;
  dailyDouble: boolean;
  stumper: boolean;
  finalJeopardy: boolean;
  clueHTML: string;
  correctResponseHTML: string;
  correctResponseExtraHTML: string;
  incorrectResponders: string[];
  correctResponder: string;
  finalResponsesHTML: string;
}

export const selectedClueState: SelectedClueState = $state({
  show: false,
  displayState: ClueDisplayStates.Clue,
  dailyDouble: false,
  stumper: false,
  finalJeopardy: false,
  clueHTML: "",
  correctResponseHTML: "",
  correctResponseExtraHTML: "",
  incorrectResponders: [],
  correctResponder: "",
  finalResponsesHTML: ""
});

export const updateSelectedClueState = (newState: Partial<SelectedClueState>) => {
  selectedClueState.show = newState.show ?? false;
  selectedClueState.displayState = newState.displayState ?? ClueDisplayStates.Clue;
  selectedClueState.dailyDouble = newState.dailyDouble ?? false;
  selectedClueState.stumper = newState.stumper ?? false;
  selectedClueState.finalJeopardy = newState.finalJeopardy ?? false;
  selectedClueState.clueHTML = newState.clueHTML ?? "";
  selectedClueState.correctResponseHTML = newState.correctResponseHTML ?? "";
  selectedClueState.correctResponseExtraHTML = newState.correctResponseExtraHTML ?? "";
  selectedClueState.incorrectResponders = newState.incorrectResponders ?? [];
  selectedClueState.correctResponder = newState.correctResponder ?? "";
  selectedClueState.finalResponsesHTML = newState.finalResponsesHTML ?? "";
}

export const clueDisplay: ClueDisplay = $state({
  show: false,
  state: ClueDisplayStates.Clue,
  clue: {
    roundNum: 0,
    categoryNum: 0,
    clueNum: 0,
    value: 0,
    playOrder: 0,
    dailyDouble: false,
    finalJeopardy: false,
    clueHTML: "",
    response: {
      correctResponse: "",
      comments: [],
      incorrectResponders: [],
      correctResponder: null,

    },
    dailyDoubleWager: null,
    finalJeopardyResponses: [],
  }
});

export function showModal(clue: ClueData) {
  clueDisplay.show = true;
  clueDisplay.state = ClueDisplayStates.Clue;
  clueDisplay.clue = clue;
}
