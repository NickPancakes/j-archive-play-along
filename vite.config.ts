// @ts-nocheck
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import monkey, { util } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
  plugins: [
    AutoImport({
      imports: [util.unimportPreset]
    }),
    svelte(),
    svelteInspector(),
    monkey({
      entry: "src/main.ts",
      userscript: {
        author: "NickPancakes",
        description: "Transforms J! Archive games UI to play along.",
        match: ["*://www.j-archive.com/showgame.php*", "*://j-archive.com/showgame.php*"],
        namespace: "https://github.com/NickPancakes/j-archive-play-along",
        downloadURL: "https://github.com/NickPancakes/j-archive-play-along/raw/refs/heads/main/dist/j-archive-play-along.user.js",
        updateURL: "https://github.com/NickPancakes/j-archive-play-along/raw/refs/heads/main/dist/j-archive-play-along.user.js",
        iconURL: "https://www.google.com/s2/favicons?sz=16&domain=j-archive.com",
        icon64URL: "https://www.google.com/s2/favicons?sz=64&domain=j-archive.com"
      },
      server: {
        open: true
      }
    })
  ]
});
