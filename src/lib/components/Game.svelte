<script lang="ts">
  import Round from "$lib/components/Round.svelte";
  import ClueModal from "$lib/components/ClueModal.svelte";
  import { type GameData } from "$lib/types.ts";

  let { gameData }: { gameData: GameData } = $props();

  let activeTab = $state(0);
  let scrollToElm: Element | undefined = $state();
</script>

<div id="game_title">
  <h1>{gameData.title}</h1>
</div>

<div id="game_comments">{gameData.comments}</div>
<div id="contestants">
  <h2>Contestants</h2>
  {#each gameData.contestants as contestant (contestant.id)}
    <p class="contestants">
      <a href="showplayer.php?player_id={contestant.id}" target="_blank">{contestant.name}</a>, {contestant.comments}
    </p>
  {/each}
</div>

<div class="tabs">
  <div role="tablist" aria-label="Round Tabs" class="round-tabs-list">
    {#each gameData.rounds as round, i (round.roundNum)}
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
        {round.name}
      </button>
    {/each}
  </div>
  <div bind:this={scrollToElm}>
    {#each gameData.rounds as round, i (round.roundNum)}
      <div
        id="panel-{i}"
        class="round-tabs-content"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-{i}"
        hidden={activeTab != i}
      >
        <Round {round} />
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
