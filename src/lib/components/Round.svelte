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
        console.log(round.categories[0].clues[0]);
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

<!-- TODO: Scores -->

<style lang="postcss">
  div.board {
    height: 100%;
    width: 100%;
    display: grid;
    gap: 0.1rem;
    place-content: center;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 0.9fr)) repeat(5, minmax(0, 1fr));
  }

  div.final_board {
    height: 50%;
    width: 100%;
    display: grid;
    gap: 0.1rem;
    place-content: center;
    grid-auto-flow: row dense;
    grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 0.5fr);
    grid-template-rows: minmax(0, 1fr);
  }
</style>
