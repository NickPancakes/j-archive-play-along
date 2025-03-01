<script lang="ts">
  import Round from "$lib/Round.svelte";
  import FinalRound from "$lib/FinalRound.svelte";
  import ClueModal from "$lib/ClueModal.svelte";

  let { contentElm }: { contentElm: Element } = $props();

  let activeTab = $state(0);
  let scrollToElm: Element | undefined = $state();

  function roundIDToName(roundID: string): string {
    switch (roundID) {
      case "jeopardy_round":
        return "Jeopardy!";
      case "double_jeopardy_round":
        return "Double Jeopardy!";
      case "triple_jeopardy_round":
        return "Triple Jeopardy!";
      case "final_jeopardy_round":
        return "Final Jeopardy!";
      default:
        return "Unknown";
    }
  }

  const roundElms = Array.from(contentElm.querySelectorAll('[id$="_round"]')).flatMap((roundElm) => {
    const cloneElm = roundElm.cloneNode(true) as Element;
    contentElm.removeChild(roundElm);
    return cloneElm;
  });

  const gameTitleElm = contentElm.querySelector("#game_title") || document.createElement("div");
  const gameCommentsElm = contentElm.querySelector("#game_comments") || document.createElement("div");
  const contestantsElm = contentElm.querySelector("#contestants") || document.createElement("div");
</script>

{@html gameTitleElm.outerHTML}
{@html gameCommentsElm.outerHTML}
{@html contestantsElm.outerHTML}

<div class="tabs">
  <div role="tablist" aria-label="Round Tabs" class="round-tabs-list">
    {#each roundElms as roundElm, i (roundElm.id)}
      <button
        class="round-tab"
        role="tab"
        aria-selected={activeTab == i ? true : false}
        aria-controls="panel-{i}"
        id="tab-{i}"
        tabindex={activeTab == i ? 0 : -1}
        onclick={() => (activeTab = i)}
        data-state={activeTab == i ? "active" : "inactive"}
      >
        {roundIDToName(roundElm.id)}
      </button>
    {/each}
  </div>
  <div bind:this={scrollToElm}>
    {#each roundElms as roundElm, i (roundElm.id)}
      <div
        id="panel-{i}"
        class="round-tabs-content"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-{i}"
        hidden={activeTab != i}
      >
        {#if roundElm.id == "final_jeopardy_round"}
          <FinalRound {roundElm} />
        {:else}
          <Round {roundElm} />
        {/if}
      </div>
    {/each}
  </div>

  <ClueModal {scrollToElm} />
</div>

<style lang="postcss">
  div.tabs {
    height: 100%;
    width: 100%;
  }

  div.round-tabs-list {
    flex: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom-width: 0.25em;
    border-bottom-style: outset;
    border-bottom-color: var(--background-dark-blue);
  }

  div.round-tabs-content {
    height: 100vh;
    width: 100%;
  }

  button.round-tab {
    flex: 1;
    display: flex;
    flex-direction: row;
    place-content: center;
    border-width: 0.1em;
    border-style: outset;
    background-color: var(--clue-depth-bottom);
    border-bottom-color: var(--clue-depth-bottom);
    border-left-color: var(--clue-depth-left);
    border-right-color: var(--clue-depth-right);
    border-top-color: var(--clue-depth-top);
    color: var(--disclaimer-gray);
    text-shadow: 2px 2px 0px #000000;
    font-size: clamp(1rem, 3vmin, 9rem);
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
  }

  button.round-tab[data-state="active"] {
    flex: 1.5;
    background-color: var(--clue-screen-blue);
    color: var(--white);
  }
</style>
