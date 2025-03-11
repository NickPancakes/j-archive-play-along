<script lang="ts">
  import ClueCell from "$lib/components/ClueCell.svelte";
  import CategoryCell from "$lib/components/CategoryCell.svelte";
  import { type RoundData, type ClueData } from "$lib/types.ts";
  import { noop } from "$lib/utils.ts";
  import { showModal } from "$lib/state.svelte.ts";

  let { round }: { round: RoundData } = $props();

  const finalRound = round.categories[0].clues.length == 1;
  const boardClasses = finalRound ? "final_board" : "board";
  const categoryOnClick = finalRound
    ? () => {
        showModal(round.categories[0].clues[0] as ClueData);
      }
    : noop;
</script>

<div class={boardClasses} role="grid">
  {#each round.categories as category (category.categoryNum)}
    <CategoryCell {category} onclick={categoryOnClick} />
    {#if !finalRound}
      {#each category.clues as clue}
        <ClueCell {clue} />
      {/each}
    {/if}
  {/each}
</div>

<div class="score_blocks">
  <div class="score_gap"></div>
  {#each round.scoreBlocks as scoreBlock (scoreBlock.title)}
    <div class="score_block" role="grid">
      <div class="score_block_title">{scoreBlock.title}</div>
      {#each scoreBlock.players as playerScore (playerScore.name)}
        <div class="score_name">{playerScore.name}</div>
        <div class="score_score">${playerScore.score.toLocaleString()}</div>
        <div class="score_remarks">{playerScore.remarks}</div>
      {/each}
    </div>
  {/each}
</div>

<style lang="postcss">
  div.board {
    height: 100vh;
    width: 100%;
    display: grid;
    gap: 0.1rem;
    place-content: center;
    grid-auto-flow: column dense;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  div.final_board {
    height: 50vh;
    width: 100%;
    display: grid;
    gap: 0.1rem;
    place-content: center;
    grid-auto-flow: row dense;
    grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 0.5fr);
    grid-template-rows: minmax(0, 1fr);
  }

  div.score_blocks {
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  div.score_gap {
    height: 25vh;
  }

  div.score_block {
    height: 100%;
    width: 90%;
    border-width: 0.2rem;
    border-style: outset;
    background-color: var(--clue-screen-blue);
    border-bottom-color: var(--clue-depth-bottom);
    border-left-color: var(--clue-depth-left);
    border-right-color: var(--clue-depth-right);
    border-top-color: var(--clue-depth-top);

    place-content: center;
    place-items: center;
    text-align: center;
    font-family: "Swiss911 Cm BT", "Open Sans", helvetica, arial, verdana, sans-serif;
    font-size: clamp(0.25rem, 3cqmin, 10rem);

    display: grid;
    gap: 0.1rem;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  div.score_block_title {
    grid-row: 1;
    grid-column: 1 / -1;
    font-size: clamp(0.5rem, 3cqmin, 12rem);
    font-weight: bold;
  }

  div.score_name {
    grid-row: 2;
    font-weight: bold;
  }

  div.score_score {
    grid-row: 3;
  }

  div.score_remarks {
    grid-row: 4;
    font-size: clamp(0.5rem, 2.5cqmin, 8rem);
  }
</style>
