

import { ClueDisplayStates, type ClueData, type ClueDisplay } from "$lib/types.ts";

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
