<script lang="ts">
  import { type ClueData, type OptionalClueData } from "$lib/types.ts";
  import { showModal } from "$lib/state.svelte.ts";

  let { clue }: { clue: OptionalClueData } = $props();
</script>

<button
  class="clue_cell"
  style:grid-row={clue.clueNum + 2}
  style:grid-column={clue.categoryNum + 1}
  onclick={() => {
    if ("clueHTML" in clue) {
      showModal(clue as ClueData);
    }
  }}
>
  {#if "clueHTML" in clue}
    {@const clueData = clue as ClueData}
    <div class="order_text">
      {clueData.playOrder}
    </div>
    <div class="value_text">
      {clueData.value}
    </div>
  {/if}
</button>

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

    grid-template-rows: 15% 70% 15%;
    grid-template-columns: 100%;
    grid-template-areas:
      "top"
      "main"
      "bottom";
  }

  .order_text {
    padding-top: 0.2rem;
    padding-right: 0.2rem;
    font-size: clamp(0.1rem, 1.5cqmin, 9rem);
    color: var(--white);
    text-align: right;
    vertical-align: middle;
    grid-area: top;
  }

  .value_text {
    font-family: "Swiss911 Cm BT", "Open Sans", helvetica, arial, verdana, sans-serif;
    font-size: clamp(1rem, 7cqmin, 12rem);
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
