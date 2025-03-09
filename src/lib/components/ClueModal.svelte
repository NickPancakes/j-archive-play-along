<script lang="ts">
  import { clueDisplay } from "$lib/state.svelte.ts";
  import { ClueDisplayStates } from "$lib/types.ts";

  let { scrollToElm }: { scrollToElm: Element } = $props();

  let dialog: HTMLDialogElement | undefined = $state();
  let showExtra: boolean = $state(false);
  let tripleStumper: boolean = $state(false);

  $effect(() => {
    if (clueDisplay.show) {
      tripleStumper = true;
      clueDisplay.clue.response.responders.forEach((responder) => {
        if (responder.correct) {
          tripleStumper = false;
        }
      });
      showDialog();
    }
  });

  function showDialog() {
    dialog?.showModal();
    scrollToElm.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }

  function onCloseDialog() {
    scrollToElm.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    clueDisplay.show = false;
    clueDisplay.state = ClueDisplayStates.Clue;
  }

  function nextDisplayState() {
    switch (clueDisplay.state) {
      case ClueDisplayStates.DailyDouble:
        clueDisplay.state = ClueDisplayStates.Clue;
        break;
      case ClueDisplayStates.Clue:
        clueDisplay.state = ClueDisplayStates.CorrectResponse;
        break;
      case ClueDisplayStates.CorrectResponse:
        clueDisplay.state = ClueDisplayStates.Clue;
        break;
      default:
        clueDisplay.state = ClueDisplayStates.Clue;
        break;
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  class="clue_modal"
  aria-modal="true"
  aria-hidden={!clueDisplay.show}
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
      hidden={clueDisplay.clue.response.comments.length == 0 || clueDisplay.state != ClueDisplayStates.CorrectResponse}
    >
      ✱
    </div>

    {#if !clueDisplay.clue.finalJeopardy && clueDisplay.state == ClueDisplayStates.CorrectResponse}
      <div class="responders">
        {#each clueDisplay.clue.response.responders as responder (responder.player)}
          <div class="responder" data-state={responder.correct ? "correct" : "incorrect"}>
            {responder.player}
            {#if clueDisplay.clue.dailyDoubleWager}
              - ${clueDisplay.clue.dailyDoubleWager.toLocaleString()}{/if}
          </div>
        {/each}

        {#if tripleStumper}
          <div class="responder" data-state="incorrect">Triple Stumper</div>
        {/if}
      </div>
    {/if}

    <div class="modal_main" onmouseenter={() => (showExtra = true)} onmouseleave={() => (showExtra = false)}>
      <div class="daily_double" hidden={clueDisplay.state != ClueDisplayStates.DailyDouble}>Daily Double</div>

      <div class="clue" hidden={clueDisplay.state != ClueDisplayStates.Clue}>
        {@html clueDisplay.clue.clueHTML}
        <div class="final_responses" hidden={!clueDisplay.clue.finalJeopardy}>
          <hr />
          <div class="final_responses_grid">
            {#each clueDisplay.clue.response.responders as responder (responder.player)}
              <div class="responder" data-state={responder.correct ? "correct" : "incorrect"}>
                {responder.player}
              </div>
              <div class="responder_wager">
                ${responder.wager.toLocaleString()}
              </div>
            {/each}
          </div>
        </div>
      </div>

      <div class="correct_response" hidden={clueDisplay.state != ClueDisplayStates.CorrectResponse}>
        {clueDisplay.clue.response.correctResponse}

        <div class="response_comments" hidden={clueDisplay.clue.response.comments.length == 0 || !showExtra}>
          <hr />
          {#each clueDisplay.clue.response.comments as comment}
            {comment}
            <br />
          {/each}
        </div>

        <div class="final_responses" hidden={!clueDisplay.clue.finalJeopardy}>
          <hr />
          <div class="final_responses_grid">
            {#each clueDisplay.clue.response.responders as responder (responder.player)}
              <div class="responder" data-state={responder.correct ? "correct" : "incorrect"}>
                {responder.player}
              </div>
              <div class="responder_wager">
                ${responder.wager.toLocaleString()}
              </div>
              <div class="responder_response">
                {responder.response}
              </div>
            {/each}
          </div>
        </div>
      </div>
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

  .response_comments {
    text-transform: none;
    text-shadow: none;
    font-size: clamp(1rem, 4vmin, 9rem);
    color: var(--white);
    text-align: center;
    vertical-align: middle;
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

  .final_responses_grid {
    place-content: center;
    place-items: center;
    text-align: center;
    font-family: "Swiss911 Cm BT", "Open Sans", helvetica, arial, verdana, sans-serif;
    color: var(--white);
    font-size: clamp(0.5rem, 5cqmin, 10rem);
    text-shadow: none;

    display: grid;
    gap: 0.1rem;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .final_responses_grid > div.responder {
    grid-row: 1;
    font-weight: bold;
  }

  div.responder_wager {
    grid-row: 2;
  }

  div.responder_response {
    grid-row: 3;
    font-size: clamp(0.5rem, 4cqmin, 8rem);
  }

  .ico-close {
    width: 100%;
    height: 100%;
    color: var(--white);
    grid-area: tr;
    font-size: clamp(1rem, 3vmin, 9rem);
    font-family: arial, sans-serif;
    text-align: right;
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
    text-align: left;
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
