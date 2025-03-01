<script lang="ts">
  import CategoryCell from "$lib/CategoryCell.svelte";
  import { selectedClueState } from "$lib/state.svelte.ts";

  let { roundElm }: { roundElm: Element } = $props();

  const tableElm = roundElm.querySelector("table.final_round")!;
  const tableClone = tableElm.cloneNode(true) as Element;
  const categoryCellElm = tableClone.querySelector(".category")!;
  const clueCellElm = tableClone.querySelector(".clue")!;
  const clueTextElms = clueCellElm.querySelectorAll("td.clue_text");
  const clueTextElm = clueTextElms[0];
  const responseElm = clueTextElms[1];
  const clueText = clueTextElm.innerHTML ?? "";
  roundElm.removeChild(tableElm);

  const headerElm = roundElm.querySelector("h2");
  if (headerElm) {
    roundElm.removeChild(headerElm);
  }

  function parseCorrectResponseElm(responseElm: Element) {
    let respCloneElm = responseElm.cloneNode(true) as Element;

    const correctResponseElm = respCloneElm.querySelector("em.correct_response");
    if (correctResponseElm) {
      selectedClueState.correctResponseHTML = correctResponseElm.innerHTML ?? "";
      respCloneElm.removeChild(correctResponseElm);
    }

    interface PlayerWager {
      name: string;
      response: string;
      wager: string;
      correct: boolean;
    }

    const playerWagers: PlayerWager[] = $state([
      { name: "Player 1", response: "", wager: "", correct: false },
      { name: "Player 2", response: "", wager: "", correct: false },
      { name: "Player 3", response: "", wager: "", correct: false }
    ]);

    const responseTableElm = respCloneElm.querySelector("table")!;
    const responseRows = Array.from(responseTableElm.querySelectorAll("tr"));
    for (const [i, trElm] of responseRows.entries()) {
      let playerIdx = 0;
      switch (i) {
        case 2:
        case 3:
          playerIdx = 1;
          break;
        case 4:
        case 5:
          playerIdx = 2;
          break;
        default:
          playerIdx = 0;
          break;
      }

      if (i % 2 == 0) {
        const tdElms = Array.from(trElm.querySelectorAll("td"));
        playerWagers[playerIdx].name = tdElms[0].textContent ?? "";
        playerWagers[playerIdx].correct = tdElms[0].classList.contains("right");
        playerWagers[playerIdx].response = tdElms[1].textContent ?? "";
      } else {
        const tdElm = trElm.querySelector("td");
        playerWagers[playerIdx].wager = tdElm?.textContent ?? "";
      }
    }
    respCloneElm.removeChild(responseTableElm);

    if (respCloneElm.innerHTML != "<br><br>") {
      selectedClueState.correctResponseExtraHTML = respCloneElm.innerHTML;
    } else {
      selectedClueState.correctResponseExtraHTML = "";
    }
  }

  function showModal() {
    selectedClueState.show = true;
    selectedClueState.finalJeopardy = true;
    selectedClueState.clueHTML = clueText;
    parseCorrectResponseElm(responseElm);
  }
</script>

<div class="board" role="grid">
  <CategoryCell {categoryCellElm} idx={1} final={true} onclick={showModal} />
</div>

<div class="scores">
  {@html roundElm.innerHTML}
</div>

<style lang="postcss">
  div.board {
    height: 50%;
    width: 100%;
    display: grid;
    gap: 0.1rem;
    place-content: center;
    grid-auto-flow: row dense;
    grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 0.5fr);
    grid-template-rows: minmax(0, 1fr);
  }

  div.scores {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
