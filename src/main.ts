import { parseGame } from "$lib/parser.ts";
import { hydrate } from 'svelte';
import './app.css';
import App from './App.svelte';

const viewport = document.createElement('meta');
viewport.name = 'viewport';
viewport.content = 'width=device-width, initial-scale=1';
document.getElementsByTagName('head')[0].appendChild(viewport);

const contentElm = document.querySelector("div#content");
if (contentElm === null) {
  throw new Error("No content element found");
}
const gameData = parseGame(contentElm);

const app = hydrate(App, {
  target: contentElm,
  props: {
    gameData: gameData,
  }
});

//contentElm.remove();
//(contentElm as HTMLElement).style.display = 'none';

/*
document.querySelector("div#navbar")?.remove();
document.querySelector("div#game_title")?.remove();
document.querySelector("div#game_comments")?.remove();
document.querySelector("div#contestants")?.remove();
document.querySelector("div#disclaimer")?.remove();
*/

export default app;
