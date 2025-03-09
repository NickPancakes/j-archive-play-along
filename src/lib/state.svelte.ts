

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
      responders: [],
    },
    dailyDoubleWager: null,
    finalJeopardyResponses: [],
  }
});

export function showModal(clue: ClueData) {
  clueDisplay.show = true;
  if (clue.dailyDouble) {
    clueDisplay.state = ClueDisplayStates.DailyDouble;
  } else {
    clueDisplay.state = ClueDisplayStates.Clue;
  }
  clueDisplay.clue = clue;
}
