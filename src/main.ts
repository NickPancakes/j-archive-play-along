import { mount } from 'svelte';
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
// document.styleSheets[0].disabled = true;

const app = mount(App, {
  target: document.body,
  props: {
    contentElm: contentElm.cloneNode(true) as Element,
  }
});

contentElm.remove();
document.querySelector("div#disclaimer")?.remove();

/*
document.querySelector("div#navbar")?.remove();
document.querySelector("div#game_title")?.remove();
document.querySelector("div#game_comments")?.remove();
document.querySelector("div#contestants")?.remove();
*/

export default app;
