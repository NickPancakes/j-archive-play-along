
export const ClueDisplayStates = {
  Clue: 0,
  CorrectResponse: 1,
  FinalResponses: 2,
  DailyDouble: 3
};

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
