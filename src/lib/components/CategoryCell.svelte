<script lang="ts">
  import { type CategoryData } from "$lib/types.ts";
  import { noop } from "$lib/utils.ts";

  interface Props {
    category: CategoryData;
    onclick?: () => void;
  }

  let { category, onclick = noop }: Props = $props();

  let showComment = $state(false);
  const categoryNameClasses = category.clues.length == 1 ? "category_name final" : "category_name";
</script>

<div
  class="category_cell"
  role="columnheader"
  tabindex={category.categoryNum}
  style:grid-column={category.categoryNum + 1}
  style:grid-row={1}
  onmouseenter={() => {
    if (category.comments) {
      showComment = true;
    }
  }}
  onmouseleave={() => (showComment = false)}
>
  {#if category.comments && !showComment}
    <div class="ico-extra">✱</div>
  {/if}
  <button class="category" {onclick}>
    <div class={categoryNameClasses}>
      {category.title}
    </div>
    {#if category.comments && showComment}
      <div class="category_comments">
        {category.comments}
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

    grid-template-rows: 15% 70% 15%;
    grid-template-columns: 100%;
    grid-template-areas:
      "top"
      "main"
      "bottom";
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
    font-size: clamp(0.25rem, 2.5cqmin, 9rem);
    text-shadow: 0.1em 0.1em 0px #000000;
    text-align: center;
    text-wrap: balance;
    vertical-align: middle;
    font-weight: bold;
  }

  div.final {
    font-size: clamp(1rem, 6vmin, 6rem);
  }

  div.category_comments {
    text-align: center;
    vertical-align: middle;
    font-size: clamp(0.2rem, 2cqmin, 8rem);
    text-wrap: balance;
    grid-area: main;
  }

  .ico-extra {
    width: 100%;
    height: 100%;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    color: var(--white);
    grid-area: top;
    font-size: clamp(0.25rem, 1.5cqmin, 9rem);
    font-family: arial, sans-serif;
    text-align: left;
    vertical-align: center;
    text-shadow:
      -1px 0 black,
      0 1px black,
      1px 0 black,
      0 -1px black;
  }
</style>
