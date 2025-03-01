<script lang="ts">
  import { selectedClueState, ClueDisplayStates } from "$lib/state.svelte.ts";

  let { scrollToElm }: { scrollToElm: Element } = $props();

  let dialog: HTMLDialogElement | undefined = $state();
  let showExtra: boolean = $state(false);

  $effect(() => {
    if (selectedClueState.show) {
      showDialog();
    }
  });

  function showDialog() {
    dialog?.showModal();
    scrollToElm.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }

  function onCloseDialog() {
    scrollToElm.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    selectedClueState.show = false;
    selectedClueState.displayState = ClueDisplayStates.Clue;
  }

  function nextDisplayState() {
    switch (selectedClueState.displayState) {
      case ClueDisplayStates.DailyDouble:
        selectedClueState.displayState = ClueDisplayStates.Clue;
        break;
      case ClueDisplayStates.Clue:
        selectedClueState.displayState = ClueDisplayStates.CorrectResponse;
        console.log(selectedClueState.correctResponseExtraHTML);
        console.log(selectedClueState.correctResponseExtraHTML == "");
        break;
      case ClueDisplayStates.CorrectResponse:
        if (selectedClueState.finalJeopardy) {
          selectedClueState.displayState = ClueDisplayStates.FinalResponses;
        } else {
          selectedClueState.displayState = ClueDisplayStates.Clue;
        }
        break;
      default:
        selectedClueState.displayState = ClueDisplayStates.Clue;
        break;
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  class="clue_modal"
  aria-modal="true"
  aria-hidden={!selectedClueState.show}
  tabindex="-1"
  bind:this={dialog}
  onclose={onCloseDialog}
  onclick={(e) => {
    if (e.target === dialog) dialog?.close();
  }}
>
  <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
  <div class="modal_content" onclick={nextDisplayState}>
    <div class="ico-close" aria-label="Close" onclick={() => dialog?.close()}>&#x2716;</div>

    <div
      class="ico-extra"
      hidden={selectedClueState.correctResponseExtraHTML == "" ||
        selectedClueState.displayState != ClueDisplayStates.CorrectResponse}
    >
      *
    </div>

    {#if !selectedClueState.finalJeopardy && selectedClueState.displayState == ClueDisplayStates.CorrectResponse}
      <div class="responders">
        {#each selectedClueState.incorrectResponders as incorrectResponder}
          <div class="responder" data-state="incorrect">
            {incorrectResponder}
          </div>
        {/each}

        {#if selectedClueState.correctResponder}
          <div class="responder" data-state="correct">
            {selectedClueState.correctResponder}
          </div>
        {:else}
          <div class="responder" data-state="incorrect">Triple Stumper</div>
        {/if}
      </div>
    {/if}

    <div class="modal_main" onmouseenter={() => (showExtra = true)} onmouseleave={() => (showExtra = false)}>
      <div class="daily_double" hidden={selectedClueState.displayState != ClueDisplayStates.DailyDouble}>
        Daily Double
      </div>

      <div class="clue" hidden={selectedClueState.displayState != ClueDisplayStates.Clue}>
        {@html selectedClueState.clueHTML}
      </div>

      <div class="correct_response" hidden={selectedClueState.displayState != ClueDisplayStates.CorrectResponse}>
        {@html selectedClueState.correctResponseHTML}

        <div class="extra" hidden={selectedClueState.correctResponseExtraHTML == "" || !showExtra}>
          <hr />
          {@html selectedClueState.correctResponseExtraHTML}
        </div>
      </div>

      <div class="final_responses" hidden={selectedClueState.displayState != ClueDisplayStates.FinalResponses}></div>
    </div>
  </div>
</dialog>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,40..300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

  dialog.clue_modal {
    width: 90%;
    height: 90%;
    position: fixed;

    border-width: 1em;
    border-style: outset;

    background-color: var(--clue-screen-blue);
    border-bottom-color: var(--clue-depth-bottom);
    border-left-color: var(--clue-depth-left);
    border-right-color: var(--clue-depth-right);
    border-top-color: var(--clue-depth-top);
  }

  .modal_content {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 5% 85% 10%;
    grid-template-areas:
      "tl tc tr"
      "ml main mr"
      "bl bc br";

    place-content: center;
    place-items: center;
  }

  .modal_main {
    grid-area: main;
    color: var(--white);
    text-align: center;
    font-weight: bold;
    vertical-align: middle;
    text-wrap: pretty;
    line-height: 1.25;
  }

  .daily_double {
    text-transform: uppercase;
    font-family: "Futura", "Kumbh Sans", "Century Gothic", sans-serif;
    font-weight: 800;
    font-size: clamp(1rem, 24vmin, 30rem);
    text-shadow: 0.3rem 0.3rem 0px #000000;
  }
  .clue {
    text-transform: uppercase;
    font-family: "ITC Korinna Std", "Libre Baskerville", "Times New Roman", serif;
    font-size: clamp(1rem, 7vmin, 9rem);
    text-shadow: 0.3rem 0.3rem 0px #000000;
  }

  .correct_response {
    text-transform: uppercase;
    color: var(--aqua-blue);
    font-family: "ITC Korinna Std", "Libre Baskerville", "Times New Roman", serif;
    font-size: clamp(1rem, 7vmin, 9rem);
    text-shadow: 0.3rem 0.3rem 0px #000000;
  }
  .extra {
    text-transform: none;
    text-shadow: none;
    font-size: clamp(1rem, 4vmin, 9rem);
  }

  .responders {
    grid-area: bc;
    display: flex;
    font-size: clamp(1rem, 3vmin, 9rem);
    text-align: center;
    vertical-align: middle;
    flex-direction: row;
  }

  .responder[data-state="correct"] {
    color: var(--lime-green);
  }

  .responder[data-state="incorrect"] {
    color: var(--error-red);
  }

  .extra {
    font-size: clamp(1rem, 3vmin, 9rem);
    color: var(--white);
    text-align: center;
    vertical-align: middle;
  }

  .ico-close {
    width: 100%;
    height: 100%;
    color: var(--white);
    grid-area: tr;
    font-size: clamp(1rem, 3vmin, 9rem);
    font-family: arial, sans-serif;
    text-align: center;
    vertical-align: center;
    text-shadow: 0.3rem 0.3rem 0px #000000;
  }

  .ico-extra {
    width: 100%;
    height: 100%;
    color: var(--white);
    grid-area: tl;
    font-size: clamp(1rem, 5vmin, 9rem);
    font-family: arial, sans-serif;
    text-align: center;
    vertical-align: center;
    text-shadow: 0.3rem 0.3rem 0px #000000;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
