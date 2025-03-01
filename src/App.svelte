<script lang="ts">
  import Game from "$lib/Game.svelte";

  let { contentElm }: { contentElm: Element } = $props();
</script>

<Game {contentElm} />
