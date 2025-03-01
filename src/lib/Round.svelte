<script lang="ts">
  import ClueCell from "$lib/ClueCell.svelte";
  import CategoryCell from "$lib/CategoryCell.svelte";

  let { roundElm }: { roundElm: Element } = $props();

  let categoryElms = $state([]);
  let clueElms = $state([]);

  const tableElm = roundElm.querySelector("table.round");
  if (tableElm) {
    const tableClone = tableElm.cloneNode(true) as Element;

    categoryElms = Array.from(tableClone.querySelectorAll(".category"));
    clueElms = Array.from(tableClone.querySelectorAll(".clue"));

    roundElm.removeChild(tableElm);
  }

  const headerElm = roundElm.querySelector("h2");
  if (headerElm) {
    roundElm.removeChild(headerElm);
  }
</script>

<div class="board" role="grid">
  {#each categoryElms as categoryCellElm, idx}
    <CategoryCell {categoryCellElm} {idx} />
  {/each}
  {#each clueElms as clueCellElm}
    <ClueCell {clueCellElm} />
  {/each}
</div>

<div class="scores">
  {@html roundElm.innerHTML}
</div>

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

  div.scores {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
