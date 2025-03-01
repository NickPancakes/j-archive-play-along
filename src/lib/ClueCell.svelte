<script lang="ts">
  import { updateSelectedClueState, ClueDisplayStates } from "$lib/state.svelte.ts";
  import type { SelectedClueState } from "$lib/state.svelte.ts";

  let { clueCellElm }: { clueCellElm: Element } = $props();

  const headerElm = clueCellElm.querySelector("table.clue_header");
  const valueElm = headerElm?.querySelector('[class^="clue_value"]')!;

  const orderNumber = headerElm?.querySelector("td.clue_order_number")?.textContent ?? "0";
  const clueTextElms = clueCellElm.querySelectorAll("td.clue_text");
  const clueTextElm = clueTextElms[0];
  const responseElm = clueTextElms[1];
  const clueText = clueTextElm.innerHTML ?? "";

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
  const [round, row, col] = clueIDToGridPosition(clueTextElm.id);

  const dailyDouble = valueElm?.textContent?.startsWith("DD:") ?? false;

  const value = "$" + (100 * round * (row - 1)).toString();

  function showModal() {
    let respCloneElm = responseElm.cloneNode(true) as Element;
    let newClueState: Partial<SelectedClueState> = {
      show: true,
      displayState: dailyDouble ? ClueDisplayStates.DailyDouble : ClueDisplayStates.Clue,
      clueHTML: clueText,
      dailyDouble: dailyDouble
    };

    const correctResponseElm = respCloneElm.querySelector("em.correct_response");
    if (correctResponseElm) {
      newClueState.correctResponseHTML = correctResponseElm.innerHTML ?? "";
      respCloneElm.removeChild(correctResponseElm);
    }

    const responderTableElms = respCloneElm.querySelectorAll("table");
    for (var responderTableElm of responderTableElms) {
      newClueState.correctResponder = responderTableElm.querySelector("td.right")?.textContent ?? "";
      const incorrectResponderElms = responderTableElm.querySelectorAll("td.wrong");
      for (var incorrectResponderElm of incorrectResponderElms) {
        if (incorrectResponderElm.textContent && incorrectResponderElm.textContent != "Triple Stumper") {
          if (newClueState.incorrectResponders === undefined) {
            newClueState.incorrectResponders = [];
          }
          newClueState.incorrectResponders.push(incorrectResponderElm.textContent);
        }
      }
      respCloneElm.removeChild(responderTableElm);
    }
    if (respCloneElm.innerHTML != "<br><br>") {
      newClueState.correctResponseExtraHTML = respCloneElm.innerHTML;
    }

    updateSelectedClueState(newClueState);
  }
</script>

<div class="clue_cell" style:grid-row={row} style:grid-column={col}>
  <div class="order_text">
    {orderNumber}
  </div>
  <button class="value_text" onclick={showModal}>
    {value}
  </button>
</div>

<style lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  .clue_cell {
    border-width: 0.2rem;
    border-style: outset;
    display: grid;
    place-content: center;
    place-items: center;
    text-align: center;

    background-color: var(--clue-screen-blue);
    border-bottom-color: var(--clue-depth-bottom);
    border-left-color: var(--clue-depth-left);
    border-right-color: var(--clue-depth-right);
    border-top-color: var(--clue-depth-top);

    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas:
      "tl tc tr"
      "ml main mr"
      "bl bc br";
  }
  .order_text {
    font-size: clamp(1rem, 1cqmin, 9rem);
    color: var(--black);
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    grid-area: tr;
  }

  .value_text {
    font-family: "Swiss911 Cm BT", "Open Sans", helvetica, arial, verdana, sans-serif;
    font-size: clamp(1rem, 5cqmin, 12rem);
    background-color: var(--clue-screen-blue);
    color: var(--font-yellow);
    text-shadow: 0.1em 0.1em 0px #000000;
    text-align: center;
    vertical-align: middle;
    font-weight: 800;
    grid-area: main;
    border-style: none;
    padding: 0;
  }
</style>
