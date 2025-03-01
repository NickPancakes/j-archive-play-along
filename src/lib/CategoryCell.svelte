<script lang="ts">
  interface Props {
    categoryCellElm: Element;
    idx: number;
    onclick?: () => void;
    final?: boolean;
  }

  function defaultOnClickFn() {
    return;
  }

  let { categoryCellElm, idx, onclick = defaultOnClickFn, final = false }: Props = $props();

  let showComment = $state(false);
  let name = $state(categoryCellElm.querySelector("td.category_name")?.textContent);

  const comments = categoryCellElm.querySelector("td.category_comments")?.textContent ?? "";
  const categoryNameClasses = final ? "category_name final" : "category_name";
</script>

<div
  class="category_cell"
  role="columnheader"
  tabindex={idx}
  style:grid-column={idx + 1}
  onmouseenter={() => {
    if (comments != "") {
      showComment = true;
    }
  }}
  onmouseleave={() => (showComment = false)}
>
  {#if comments && !showComment}
    <div class="ico-extra">*</div>
  {/if}
  <button class="category" {onclick}>
    <div class={categoryNameClasses}>
      {name}
    </div>
    {#if comments && showComment}
      <hr />
      <div class="category_comments">
        {comments}
      </div>
    {/if}
  </button>
</div>

<style lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

  div.category_cell {
    border-width: 0.2rem;
    border-style: outset;
    display: grid;
    place-content: center;
    place-items: center;

    color: var(--white);
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    background-color: var(--clue-screen-blue);
    border-bottom-color: var(--clue-depth-bottom);
    border-left-color: var(--clue-depth-left);
    border-right-color: var(--clue-depth-right);
    border-top-color: var(--clue-depth-top);
    grid-row: 1;

    grid-template-columns: 3% 94% 3%;
    grid-template-rows: 3% 94% 3%;
    grid-template-areas:
      "tl tc tr"
      "ml main mr"
      "bl bc br";
  }

  button.category {
    width: 100%;
    height: 100%;
    background-color: var(--clue-screen-blue);
    border-style: none;
    grid-area: main;
    padding: 0;
    color: var(--white);
  }
  div.category_name {
    font-family: "Swiss911 Cm BT", "Open Sans", helvetica, arial, verdana, sans-serif;
    font-size: clamp(0.25rem, 2cqmin, 9rem);
    text-shadow: 0.1em 0.1em 0px #000000;
    text-align: center;
    text-wrap: balance;
    vertical-align: middle;
    font-weight: bold;
  }

  div.final {
    font-size: clamp(1rem, 4vmin, 9rem);
  }

  div.category_comments {
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    font-size: clamp(1rem, 1.5cqmin, 9rem);
    text-wrap: balance;
    grid-area: main;
  }

  .ico-extra {
    width: 100%;
    height: 100%;
    color: var(--white);
    grid-area: tl;
    font-size: clamp(1rem, 1cqmin, 9rem);
    font-family: arial, sans-serif;
    text-align: center;
    vertical-align: center;
    text-shadow:
      -1px 0 black,
      0 1px black,
      1px 0 black,
      0 -1px black;
  }
</style>
