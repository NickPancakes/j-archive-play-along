<script lang="ts">
  import Game from "$lib/components/Game.svelte";
  import { type GameData } from "$lib/types.ts";

  let { gameData }: { gameData: GameData } = $props();
</script>

<Game {gameData} />
