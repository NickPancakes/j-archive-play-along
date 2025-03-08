// ==UserScript==
// @name         j-archive-play-along
// @namespace    https://github.com/NickPancakes/j-archive-play-along
// @version      0.0.5
// @author       NickPancakes
// @description  Transforms J! Archive games UI to play along.
// @iconURL      https://www.google.com/s2/favicons?sz=16&domain=j-archive.com
// @icon64URL    https://www.google.com/s2/favicons?sz=64&domain=j-archive.com
// @downloadURL  https://github.com/NickPancakes/j-archive-play-along/raw/refs/heads/main/dist/j-archive-play-along.user.js
// @updateURL    https://github.com/NickPancakes/j-archive-play-along/raw/refs/heads/main/dist/j-archive-play-along.user.js
// @match        *://www.j-archive.com/showgame.php*
// @match        *://j-archive.com/showgame.php*
// @grant        GM_addStyle
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' @import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";@import"https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,40..300&display=swap";@import"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap";:root{--clue-depth-bottom: #000088;--clue-depth-left: #0000ee;--clue-depth-right: #000099;--clue-depth-top: #0000ff}#content{max-width:unset;min-width:unset}.clue_cell.svelte-whch0{border-width:.2rem;border-style:outset;display:grid;place-content:center;place-items:center;text-align:center;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);grid-template-rows:15% 70% 15%;grid-template-columns:100%;grid-template-areas:"top" "main" "bottom"}.order_text.svelte-whch0{padding-top:.2rem;padding-right:.2rem;font-size:clamp(.1rem,1.5cqmin,9rem);color:var(--white);text-align:right;vertical-align:middle;grid-area:top}.value_text.svelte-whch0{font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(1rem,7cqmin,12rem);background-color:var(--clue-screen-blue);color:var(--font-yellow);text-shadow:.1em .1em 0px #000000;text-align:center;vertical-align:middle;font-weight:800;grid-area:main;border-style:none;padding:0}div.category_cell.svelte-63tsd7{border-width:.2rem;border-style:outset;display:grid;place-content:center;place-items:center;color:var(--white);text-align:center;vertical-align:middle;font-weight:700;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);grid-row:1;grid-template-rows:15% 70% 15%;grid-template-columns:100%;grid-template-areas:"top" "main" "bottom"}button.category.svelte-63tsd7{width:100%;height:100%;background-color:var(--clue-screen-blue);border-style:none;grid-area:main;padding:0;color:var(--white)}div.category_name.svelte-63tsd7{font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(.25rem,2.5cqmin,9rem);text-shadow:.1em .1em 0px #000000;text-align:center;text-wrap:balance;vertical-align:middle;font-weight:700}div.final.svelte-63tsd7{font-size:clamp(1rem,6vmin,6rem)}div.category_comments.svelte-63tsd7{text-align:center;vertical-align:middle;font-size:clamp(.2rem,2cqmin,8rem);text-wrap:balance;grid-area:main}.ico-extra.svelte-63tsd7{width:100%;height:100%;padding-top:.2rem;padding-left:.2rem;color:var(--white);grid-area:top;font-size:clamp(.25rem,1.5cqmin,9rem);font-family:arial,sans-serif;text-align:left;vertical-align:center;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black}div.board.svelte-qvpibm{height:100vh;width:100%;display:grid;gap:.1rem;place-content:center;grid-auto-flow:column dense;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,.9fr)) repeat(5,minmax(0,1fr))}div.final_board.svelte-qvpibm{height:50vh;width:100%;display:grid;gap:.1rem;place-content:center;grid-auto-flow:row dense;grid-template-columns:minmax(0,.5fr) minmax(0,1fr) minmax(0,.5fr);grid-template-rows:minmax(0,1fr)}div.score_blocks.svelte-qvpibm{height:75vh;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}div.score_gap.svelte-qvpibm{height:25vh}div.score_block.svelte-qvpibm{height:100%;width:50%;border-width:.2rem;border-style:outset;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);place-content:center;place-items:center;text-align:center;font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(.5rem,3.5cqmin,10rem);display:grid;gap:.1rem;grid-auto-flow:row dense;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(4,minmax(0,1fr))}div.score_block_title.svelte-qvpibm{grid-row:1;grid-column:1 / -1;font-size:clamp(1rem,4cqmin,12rem);font-weight:700}div.score_name.svelte-qvpibm{grid-row:2;font-weight:700}div.score_score.svelte-qvpibm{grid-row:3}div.score_remarks.svelte-qvpibm{grid-row:4;font-size:clamp(.5rem,2.5cqmin,8rem)}dialog.clue_modal.svelte-r4f1vo{width:90%;height:90%;position:fixed;border-width:1em;border-style:outset;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top)}.modal_content.svelte-r4f1vo{width:100%;height:100%;display:grid;grid-template-columns:5% 90% 5%;grid-template-rows:5% 85% 10%;grid-template-areas:"tl tc tr" "ml main mr" "bl bc br";place-content:center;place-items:center}.modal_main.svelte-r4f1vo{grid-area:main;color:var(--white);text-align:center;font-weight:700;vertical-align:middle;text-wrap:pretty;line-height:1.25}.daily_double.svelte-r4f1vo{text-transform:uppercase;font-family:Futura,Kumbh Sans,Century Gothic,sans-serif;font-weight:800;font-size:clamp(1rem,24vmin,30rem);text-shadow:.3rem .3rem 0px #000000}.clue.svelte-r4f1vo{text-transform:uppercase;font-family:ITC Korinna Std,Libre Baskerville,Times New Roman,serif;font-size:clamp(1rem,7vmin,9rem);text-shadow:.3rem .3rem 0px #000000}.correct_response.svelte-r4f1vo{text-transform:uppercase;color:var(--aqua-blue);font-family:ITC Korinna Std,Libre Baskerville,Times New Roman,serif;font-size:clamp(1rem,7vmin,9rem);text-shadow:.3rem .3rem 0px #000000}.response_comments.svelte-r4f1vo{text-transform:none;text-shadow:none;font-size:clamp(1rem,4vmin,9rem);color:var(--white);text-align:center;vertical-align:middle}.responders.svelte-r4f1vo{grid-area:bc;display:flex;font-size:clamp(1rem,3vmin,9rem);text-align:center;vertical-align:middle;flex-direction:row}.responder[data-state=correct].svelte-r4f1vo{color:var(--lime-green)}.responder[data-state=incorrect].svelte-r4f1vo{color:var(--error-red)}.ico-close.svelte-r4f1vo{width:100%;height:100%;color:var(--white);grid-area:tr;font-size:clamp(1rem,3vmin,9rem);font-family:arial,sans-serif;text-align:right;vertical-align:center;text-shadow:.3rem .3rem 0px #000000}.ico-extra.svelte-r4f1vo{width:100%;height:100%;color:var(--white);grid-area:tl;font-size:clamp(1rem,5vmin,9rem);font-family:arial,sans-serif;text-align:left;vertical-align:center;text-shadow:.3rem .3rem 0px #000000}dialog.svelte-r4f1vo::backdrop{background:#0000004d}dialog[open].svelte-r4f1vo{animation:svelte-r4f1vo-zoom .3s cubic-bezier(.34,1.56,.64,1)}@keyframes svelte-r4f1vo-zoom{0%{transform:scale(.95)}to{transform:scale(1)}}dialog[open].svelte-r4f1vo::backdrop{animation:svelte-r4f1vo-fade .2s ease-out}@keyframes svelte-r4f1vo-fade{0%{opacity:0}to{opacity:1}}#game_title.svelte-1c03mbw{display:flex;flex-wrap:nowrap;justify-content:space-around;align-items:center}#game_title.svelte-1c03mbw>a:where(.svelte-1c03mbw){font-size:clamp(.5rem,2vmin,6rem)}div.tabs.svelte-1c03mbw{height:100%;width:100%}div.round-tabs-list.svelte-1c03mbw{flex:auto;width:100%;display:flex;flex-direction:row;justify-content:center;border-bottom-width:.25em;border-bottom-style:outset;border-bottom-color:var(--background-dark-blue)}div.round-tabs-content.svelte-1c03mbw{height:100%;width:100%}button.round-tab.svelte-1c03mbw{flex:1;display:flex;flex-direction:row;place-content:center;border-width:.1em;border-style:outset;background-color:var(--clue-depth-bottom);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);color:var(--disclaimer-gray);text-shadow:2px 2px 0px #000000;font-size:clamp(1rem,3vmin,9rem);text-align:center;vertical-align:middle;font-weight:700}button.round-tab[data-state=active].svelte-1c03mbw{flex:1.5;background-color:var(--clue-screen-blue);color:var(--white)} ');

(function () {
  'use strict';

  const RoundName = {
    Jeopardy: "Jeopardy!",
    DoubleJeopardy: "Double Jeopardy!",
    TripleJeopardy: "Triple Jeopardy!",
    FinalJeopardy: "Final Jeopardy!"
  };
  const ClueDisplayStates = {
    Clue: 0,
    CorrectResponse: 1,
    FinalResponses: 2,
    DailyDouble: 3
  };
  function roundIDToName(roundID) {
    switch (roundID) {
      case "jeopardy_round":
        return RoundName.Jeopardy;
      case "double_jeopardy_round":
        return RoundName.DoubleJeopardy;
      case "triple_jeopardy_round":
        return RoundName.TripleJeopardy;
      case "final_jeopardy_round":
        return RoundName.FinalJeopardy;
      default:
        throw new Error("Unrecognized round ID: " + roundID);
    }
  }
  function parseNormalResponsesTable(rowElm) {
    let responders = [];
    const rightElm = rowElm.querySelector("td.right");
    if (rightElm && rightElm.textContent) {
      responders.push({
        player: rightElm.textContent,
        wager: 0,
        response: "",
        correct: true
      });
    }
    for (var wrongElm of rowElm.querySelectorAll("td.wrong")) {
      if (wrongElm.textContent && wrongElm.textContent != "Triple Stumper") {
        responders.push({
          player: wrongElm.textContent,
          wager: 0,
          response: "",
          correct: false
        });
      }
    }
    return responders.length > 0 ? responders : null;
  }
  function parseFinalResponsesRows(rowElms) {
    let responders = [
      { player: "", wager: 0, response: "", correct: false },
      { player: "", wager: 0, response: "", correct: false },
      { player: "", wager: 0, response: "", correct: false }
    ];
    for (let rowIdx = 0; rowIdx < rowElms.length; rowIdx++) {
      const rowElm = rowElms[rowIdx];
      const playerNum = rowIdx / 2 | 0;
      const tdElms = rowElm.querySelectorAll("td");
      if (!tdElms) {
        continue;
      }
      if (rowIdx % 2 == 0 && tdElms.length >= 2) {
        responders[playerNum].correct = tdElms[0].className == "right";
        responders[playerNum].player = tdElms[0].textContent || "";
        responders[playerNum].response = tdElms[1].textContent || "";
      } else {
        const wager = (tdElms[0].textContent || "$0").replaceAll("$", "").replaceAll(",", "");
        responders[playerNum].wager = parseInt(wager);
      }
    }
    return responders;
  }
  function parseResponsesTable(childElm) {
    const rowElms = childElm.querySelectorAll("tr");
    if (rowElms == null) {
      return null;
    } else if (rowElms.length == 6) {
      return parseFinalResponsesRows(Array.from(rowElms));
    }
    return parseNormalResponsesTable(childElm);
  }
  function parseClueResponse(responseElm) {
    let correctResponse = "";
    let responders = [];
    let comments = [];
    let sameLine = false;
    for (let childNode of responseElm.childNodes) {
      if (childNode.nodeType === Node.TEXT_NODE) {
        if (childNode.textContent) {
          if (sameLine) {
            comments[comments.length - 1] += childNode.textContent;
            sameLine = false;
          } else {
            comments.push(childNode.textContent);
          }
        }
      } else {
        const childElm = childNode;
        switch (childElm.tagName) {
          case "EM":
            correctResponse = childElm.textContent || "";
            break;
          case "TABLE":
            const parsedResponses = parseResponsesTable(childElm);
            if (parsedResponses) {
              responders = parsedResponses;
            }
            break;
          default:
            comments[comments.length - 1] += childElm.textContent || "";
            sameLine = true;
            break;
        }
      }
    }
    return {
      correctResponse,
      comments,
      responders
    };
  }
  function parseFinalClue(roundNum, categoryNum, clueNum, clueElm) {
    const clueTextElms = clueElm.querySelectorAll("td.clue_text");
    const clueHTML = clueTextElms[0].innerHTML ?? "";
    const responseElm = clueTextElms[1];
    const clueResponse = parseClueResponse(responseElm);
    return {
      roundNum,
      categoryNum,
      clueNum,
      value: 0,
      playOrder: 0,
      clueHTML,
      response: clueResponse,
      dailyDouble: false,
      dailyDoubleWager: null,
      finalJeopardy: true
    };
  }
  function parseClue(roundNum, totalRounds, categoryNum, clueNum, clueElm) {
    var _a, _b;
    let playOrder = "0";
    let dailyDouble = false;
    const headerElm = clueElm.querySelector("table.clue_header");
    if (headerElm) {
      playOrder = ((_a = headerElm == null ? void 0 : headerElm.querySelector("td.clue_order_number")) == null ? void 0 : _a.textContent) ?? "0";
      const valueElm = headerElm.querySelector('[class^="clue_value"]');
      dailyDouble = ((_b = valueElm == null ? void 0 : valueElm.textContent) == null ? void 0 : _b.startsWith("DD:")) ?? false;
    }
    const clueTextElms = clueElm.querySelectorAll("td.clue_text");
    if (clueTextElms.length == 0) {
      return {
        roundNum,
        categoryNum,
        clueNum
      };
    }
    const clueHTML = clueTextElms[0].innerHTML ?? "";
    const responseElm = clueTextElms[1];
    const clueResponse = parseClueResponse(responseElm);
    const baseValue = totalRounds > 3 ? 100 : 200;
    const value = baseValue * (roundNum + 1) * (clueNum + 1);
    return {
      roundNum,
      categoryNum,
      clueNum,
      value,
      playOrder: parseInt(playOrder),
      clueHTML,
      response: clueResponse,
      dailyDouble,
      dailyDoubleWager: null,
      finalJeopardy: false
    };
  }
  function parseCategory(roundNum, categoryNum, clues, categoryElm) {
    const titleElm = categoryElm.querySelector(".category_name");
    const commentsElm = categoryElm.querySelector(".category_comments");
    return {
      roundNum,
      categoryNum,
      clues,
      title: (titleElm == null ? void 0 : titleElm.textContent) || "",
      comments: (commentsElm == null ? void 0 : commentsElm.textContent) || ""
    };
  }
  function parseFinalRoundTable(roundNum, tableElm) {
    const tbodyElm = tableElm.querySelector("tbody");
    if (!tbodyElm) {
      throw new Error("Could not find  in round element");
    }
    const rowElms = Array.from(tbodyElm.children);
    if (rowElms.length < 2) {
      throw new Error("Not enough rows in table.round");
    }
    const categoryRowElm = rowElms[0];
    const clueRowElm = rowElms[1];
    const clueElm = clueRowElm.querySelector("td.clue");
    if (!clueElm) {
      throw new Error("Could not find td.clue in final round clue row");
    }
    const categoryElm = categoryRowElm.querySelector("td.category");
    if (!categoryElm) {
      throw new Error("Could not find td.category in final round category row");
    }
    const clue = parseFinalClue(roundNum, 1, 0, clueElm);
    const category = parseCategory(roundNum, 1, [clue], categoryElm);
    return [category];
  }
  function parseNormalRoundTable(roundNum, totalRounds, tableElm) {
    const tbodyElm = tableElm.querySelector("tbody");
    if (!tbodyElm) {
      throw new Error("Could not find tbody in round element");
    }
    const rowElms = Array.from(tbodyElm.children);
    if (rowElms.length < 2) {
      throw new Error("Not enough rows in table.round");
    }
    const categoryRowElm = rowElms[0];
    const clueRowElms = rowElms.slice(1);
    let cluesPerCategory = [
      [],
      [],
      [],
      [],
      [],
      []
    ];
    for (let clueNum = 0; clueNum < clueRowElms.length; clueNum++) {
      const clueElms = Array.from(clueRowElms[clueNum].querySelectorAll("td.clue"));
      for (let categoryNum = 0; categoryNum < clueElms.length; categoryNum++) {
        const clueElm = clueElms[categoryNum];
        const clue = parseClue(roundNum, totalRounds, categoryNum, clueNum, clueElm);
        cluesPerCategory[categoryNum][clueNum] = clue;
      }
    }
    let categories = [];
    const categoryElms = Array.from(categoryRowElm.querySelectorAll("td.category"));
    for (let categoryNum = 0; categoryNum < categoryElms.length; categoryNum++) {
      const categoryElm = categoryElms[categoryNum];
      const category = parseCategory(roundNum, categoryNum, cluesPerCategory[categoryNum], categoryElm);
      categories.push(category);
    }
    return categories;
  }
  function parseScoreBlock(title, scoreTableElm) {
    let players = [
      { name: "", score: 0, remarks: "" },
      { name: "", score: 0, remarks: "" },
      { name: "", score: 0, remarks: "" }
    ];
    const rowElms = Array.from(scoreTableElm.querySelectorAll("tr"));
    if (rowElms.length < 2) {
      throw new Error("Not enough rows in table.score_block");
    }
    const namesRowElm = rowElms[0];
    const scoresRowElm = rowElms[1];
    const remarksRowElm = rowElms[2];
    for (let playerNum = 0; playerNum < 3; playerNum++) {
      const nameElm = namesRowElm.children[playerNum];
      const scoreElm = scoresRowElm.children[playerNum];
      const remarksElm = remarksRowElm == null ? void 0 : remarksRowElm.children[playerNum];
      const scoreText = ((scoreElm == null ? void 0 : scoreElm.textContent) || "$0").replaceAll("$", "").replaceAll(",", "");
      players[playerNum] = {
        name: nameElm.textContent || "",
        score: parseInt(scoreText),
        remarks: (remarksElm == null ? void 0 : remarksElm.textContent) || ""
      };
    }
    return {
      title,
      players
    };
  }
  function parseRound(roundNum, totalRounds, roundElm) {
    const roundName = roundIDToName(roundElm.id);
    let categories = [];
    let scoreBlocks = [];
    let currentScoreBlockTitle = "";
    for (let childElm of roundElm.children) {
      switch (childElm.tagName) {
        case "H3":
          currentScoreBlockTitle = childElm.textContent || "";
          break;
        case "TABLE":
          if (childElm.className == "round") {
            categories = parseNormalRoundTable(roundNum, totalRounds, childElm);
          } else if (childElm.className == "final_round") {
            categories = parseFinalRoundTable(roundNum, childElm);
          } else {
            scoreBlocks.push(parseScoreBlock(currentScoreBlockTitle, childElm));
          }
          break;
      }
    }
    return {
      roundNum,
      name: roundName,
      categories,
      scoreBlocks
    };
  }
  function parseContestant(contestantsPElm) {
    let id = 0;
    let name = "";
    let comments = "";
    for (let childNode of contestantsPElm.childNodes) {
      if (childNode.nodeType === Node.TEXT_NODE) {
        if (childNode.textContent) {
          comments = childNode.textContent;
        }
      } else {
        const childElm = childNode;
        if (childElm.tagName == "A") {
          id = parseInt(childElm.href.split("player_id=").pop() || "0");
          name = childElm.textContent || "";
        }
      }
    }
    if (comments.startsWith(", ")) {
      comments = comments.substring(2);
    }
    return {
      id,
      name,
      comments
    };
  }
  function parseContestants(contestantsTableElm) {
    const contestantsElms = Array.from(contestantsTableElm.querySelectorAll("p.contestants"));
    return contestantsElms.map((contestantPElm) => parseContestant(contestantPElm));
  }
  function parseGame(contentElm2) {
    const gameID = parseInt(window.location.href.split("game_id=").pop() || "0");
    const gameTitleElm = contentElm2.querySelector("#game_title");
    const gameCommentsElm = contentElm2.querySelector("#game_comments");
    const contestantsTableElm = contentElm2.querySelector("#contestants");
    const roundElms = Array.from(contentElm2.querySelectorAll('[id$="_round"]'));
    return {
      id: gameID,
      title: (gameTitleElm == null ? void 0 : gameTitleElm.textContent) || "",
      comments: (gameCommentsElm == null ? void 0 : gameCommentsElm.textContent) || "",
      contestants: contestantsTableElm ? parseContestants(contestantsTableElm) : [],
      rounds: roundElms.map((roundElm, roundNum) => parseRound(roundNum, roundElms.length, roundElm))
    };
  }
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const UNOWNED = 1 << 8;
  const DISCONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const EFFECT_RAN = 1 << 15;
  const EFFECT_TRANSPARENT = 1 << 16;
  const HEAD_EFFECT = 1 << 19;
  const EFFECT_HAS_DERIVED = 1 << 20;
  const STATE_SYMBOL = Symbol("$state");
  const LOADING_ATTR_SYMBOL = Symbol("");
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function hydration_failed() {
    {
      throw new Error(`https://svelte.dev/e/hydration_failed`);
    }
  }
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_local_read() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  let tracing_mode_flag = false;
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const HYDRATION_START = "[";
  const HYDRATION_START_ELSE = "[!";
  const HYDRATION_END = "]";
  const HYDRATION_ERROR = {};
  const UNINITIALIZED = Symbol();
  function hydration_mismatch(location) {
    {
      console.warn(`https://svelte.dev/e/hydration_mismatch`);
    }
  }
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      c: null,
      e: null,
      m: false,
      s: props,
      x: null,
      l: null
    };
  }
  function pop(component) {
    const context_stack_item = component_context;
    if (context_stack_item !== null) {
      const component_effects = context_stack_item.e;
      if (component_effects !== null) {
        var previous_effect = active_effect;
        var previous_reaction = active_reaction;
        context_stack_item.e = null;
        try {
          for (var i = 0; i < component_effects.length; i++) {
            var component_effect = component_effects[i];
            set_active_effect(component_effect.effect);
            set_active_reaction(component_effect.reaction);
            effect(component_effect.fn);
          }
        } finally {
          set_active_effect(previous_effect);
          set_active_reaction(previous_reaction);
        }
      }
      component_context = context_stack_item.p;
      context_stack_item.m = true;
    }
    return (
      /** @type {T} */
      {}
    );
  }
  function is_runes() {
    return true;
  }
  function source(v, stack) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  function state(v) {
    return /* @__PURE__ */ push_derived_source(source(v));
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function push_derived_source(source2) {
    if (active_reaction !== null && !untracking && (active_reaction.f & DERIVED) !== 0) {
      if (derived_sources === null) {
        set_derived_sources([source2]);
      } else {
        derived_sources.push(source2);
      }
    }
    return source2;
  }
  function set(source2, value) {
    if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
    // we allow the mutation.
    (derived_sources === null || !derived_sources.includes(source2))) {
      state_unsafe_mutation();
    }
    return internal_set(source2, value);
  }
  function internal_set(source2, value) {
    if (!source2.equals(value)) {
      source2.v;
      source2.v = value;
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY);
      if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
    return value;
  }
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;
      if ((flags & DIRTY) !== 0) continue;
      set_signal_status(reaction, status);
      if ((flags & (CLEAN | UNOWNED)) !== 0) {
        if ((flags & DERIVED) !== 0) {
          mark_reactions(
            /** @type {Derived} */
            reaction,
            MAYBE_DIRTY
          );
        } else {
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  let hydrating = false;
  function set_hydrating(value) {
    hydrating = value;
  }
  let hydrate_node;
  function set_hydrate_node(node) {
    if (node === null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return hydrate_node = node;
  }
  function hydrate_next() {
    return set_hydrate_node(
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(hydrate_node)
    );
  }
  function reset(node) {
    if (!hydrating) return;
    if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    hydrate_node = node;
  }
  function next(count = 1) {
    if (hydrating) {
      var i = count;
      var node = hydrate_node;
      while (i--) {
        node = /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node);
      }
      hydrate_node = node;
    }
  }
  function remove_nodes() {
    var depth = 0;
    var node = hydrate_node;
    while (true) {
      if (node.nodeType === 8) {
        var data = (
          /** @type {Comment} */
          node.data
        );
        if (data === HYDRATION_END) {
          if (depth === 0) return node;
          depth -= 1;
        } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
          depth += 1;
        }
      }
      var next2 = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
  }
  function proxy(value, parent = null, prev) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = source(0);
    if (is_proxied_array) {
      sources.set("length", source(
        /** @type {any[]} */
        value.length
      ));
    }
    var metadata;
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            s = source(descriptor.value);
            sources.set(prop2, s);
          } else {
            set(s, proxy(descriptor.value, metadata));
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              sources.set(prop2, source(UNINITIALIZED));
            }
          } else {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n < ls.v) {
                set(ls, n);
              }
            }
            set(s, UNINITIALIZED);
            update_version(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          var _a;
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || ((_a = get_descriptor(target, prop2)) == null ? void 0 : _a.writable))) {
            s = source(proxy(exists ? target[prop2] : UNINITIALIZED, metadata));
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2 == null ? void 0 : source2.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          var _a;
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || ((_a = get_descriptor(target, prop2)) == null ? void 0 : _a.writable))) {
            if (s === void 0) {
              s = source(has ? proxy(target[prop2], metadata) : UNINITIALIZED);
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var _a;
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = source(UNINITIALIZED);
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || ((_a = get_descriptor(target, prop2)) == null ? void 0 : _a.writable)) {
              s = source(void 0);
              set(s, proxy(value2, metadata));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            set(s, proxy(value2, metadata));
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor == null ? void 0 : descriptor.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            update_version(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function update_version(signal, d = 1) {
    set(signal, signal.v + d);
  }
  var $window;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    element_prototype.__click = void 0;
    element_prototype.__className = "";
    element_prototype.__attributes = null;
    element_prototype.__styles = null;
    element_prototype.__e = void 0;
    Text.prototype.__t = void 0;
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return first_child_getter.call(node);
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }
  function child(node, is_text) {
    if (!hydrating) {
      return /* @__PURE__ */ get_first_child(node);
    }
    var child2 = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(hydrate_node)
    );
    if (child2 === null) {
      child2 = hydrate_node.appendChild(create_text());
    } else if (is_text && child2.nodeType !== 3) {
      var text = create_text();
      child2 == null ? void 0 : child2.before(text);
      set_hydrate_node(text);
      return text;
    }
    set_hydrate_node(child2);
    return child2;
  }
  function first_child(fragment, is_text) {
    if (!hydrating) {
      var first = (
        /** @type {DocumentFragment} */
        /* @__PURE__ */ get_first_child(
          /** @type {Node} */
          fragment
        )
      );
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
    return hydrate_node;
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = hydrating ? hydrate_node : node;
    var last_sibling;
    while (count--) {
      last_sibling = next_sibling;
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    if (!hydrating) {
      return next_sibling;
    }
    var type = next_sibling == null ? void 0 : next_sibling.nodeType;
    if (is_text && type !== 3) {
      var text = create_text();
      if (next_sibling === null) {
        last_sibling == null ? void 0 : last_sibling.after(text);
      } else {
        next_sibling.before(text);
      }
      set_hydrate_node(text);
      return text;
    }
    set_hydrate_node(next_sibling);
    return (
      /** @type {TemplateNode} */
      next_sibling
    );
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
      flags |= UNOWNED;
    } else {
      active_effect.f |= EFFECT_HAS_DERIVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        null
      ),
      wv: 0,
      parent: parent_derived ?? active_effect
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  function get_derived_parent_effect(derived2) {
    var parent = derived2.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (
          /** @type {Effect} */
          parent
        );
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived2));
    {
      try {
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived2, status);
    if (!derived2.equals(value)) {
      derived2.v = value;
      derived2.wv = increment_write_version();
    }
  }
  function validate_effect(rune) {
    if (active_effect === null && active_reaction === null) {
      effect_orphan();
    }
    if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn, sync, push2 = true) {
    var is_root = (type & ROOT_EFFECT) !== 0;
    var parent_effect = active_effect;
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent: is_root ? null : parent_effect,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0
    };
    if (sync) {
      var previously_flushing_effect = is_flushing_effect;
      try {
        set_is_flushing_effect(true);
        update_effect(effect2);
        effect2.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect2);
        throw e;
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
    } else if (fn !== null) {
      schedule_effect(effect2);
    }
    var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
    if (!inert && !is_root && push2) {
      if (parent_effect !== null) {
        push_effect(effect2, parent_effect);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ?? (derived2.effects = [])).push(effect2);
      }
    }
    return effect2;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ?? (context.e = [])).push({
        fn,
        effect: active_effect,
        reaction: active_reaction
      });
    } else {
      var signal = effect(fn);
      return signal;
    }
  }
  function component_root(fn) {
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }
  function render_effect(fn) {
    return create_effect(RENDER_EFFECT, fn, true);
  }
  function template_effect(fn, thunks = [], d = derived) {
    const deriveds = thunks.map(d);
    const effect2 = () => fn(...deriveds.map(get));
    return block(effect2);
  }
  function block(fn, flags = 0) {
    return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
  }
  function branch(fn, push2 = true) {
    return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      var next2 = effect2.next;
      destroy_effect(effect2, remove_dom);
      effect2 = next2;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next2;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
      var node = effect2.nodes_start;
      var end = effect2.nodes_end;
      while (node !== null) {
        var next2 = node === end ? null : (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_next_sibling(node)
        );
        node.remove();
        node = next2;
      }
      removed = true;
    }
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    set_signal_status(effect2, DESTROYED);
    var transitions = effect2.transitions;
    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }
    execute_effect_teardown(effect2);
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next2 = effect2.next;
    if (prev !== null) prev.next = next2;
    if (next2 !== null) next2.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next2;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    run_out_transitions(transitions, () => {
      destroy_effect(effect2);
      if (callback) callback();
    });
  }
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition of transitions) {
        transition.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    if (effect2.transitions !== null) {
      for (const transition of effect2.transitions) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      effect2.f ^= CLEAN;
    }
    if (check_dirtiness(effect2)) {
      set_signal_status(effect2, DIRTY);
      schedule_effect(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    if (effect2.transitions !== null) {
      for (const transition of effect2.transitions) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }
  let is_micro_task_queued$1 = false;
  let current_queued_micro_tasks = [];
  function process_micro_tasks() {
    is_micro_task_queued$1 = false;
    const tasks = current_queued_micro_tasks.slice();
    current_queued_micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (!is_micro_task_queued$1) {
      is_micro_task_queued$1 = true;
      queueMicrotask(process_micro_tasks);
    }
    current_queued_micro_tasks.push(fn);
  }
  let is_throwing_error = false;
  let is_micro_task_queued = false;
  let last_scheduled_effect = null;
  let is_flushing_effect = false;
  let is_destroying_effect = false;
  function set_is_flushing_effect(value) {
    is_flushing_effect = value;
  }
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let queued_root_effects = [];
  let flush_count = 0;
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let derived_sources = null;
  function set_derived_sources(sources) {
    derived_sources = sources;
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let skip_reaction = false;
  function increment_write_version() {
    return ++write_version;
  }
  function check_dirtiness(reaction) {
    var _a;
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) {
      return true;
    }
    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;
      if (dependencies !== null) {
        var i;
        var dependency;
        var is_disconnected = (flags & DISCONNECTED) !== 0;
        var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
        var length = dependencies.length;
        if (is_disconnected || is_unowned_connected) {
          var derived2 = (
            /** @type {Derived} */
            reaction
          );
          var parent = derived2.parent;
          for (i = 0; i < length; i++) {
            dependency = dependencies[i];
            if (is_disconnected || !((_a = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a.includes(derived2))) {
              (dependency.reactions ?? (dependency.reactions = [])).push(derived2);
            }
          }
          if (is_disconnected) {
            derived2.f ^= DISCONNECTED;
          }
          if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
            derived2.f ^= UNOWNED;
          }
        }
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (check_dirtiness(
            /** @type {Derived} */
            dependency
          )) {
            update_derived(
              /** @type {Derived} */
              dependency
            );
          }
          if (dependency.wv > reaction.wv) {
            return true;
          }
        }
      }
      if (!is_unowned || active_effect !== null && !skip_reaction) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function propagate_error(error, effect2) {
    var current = effect2;
    while (current !== null) {
      if ((current.f & BOUNDARY_EFFECT) !== 0) {
        try {
          current.fn(error);
          return;
        } catch {
          current.f ^= BOUNDARY_EFFECT;
        }
      }
      current = current.parent;
    }
    is_throwing_error = false;
    throw error;
  }
  function should_rethrow_error(effect2) {
    return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
  }
  function handle_error(error, effect2, previous_effect, component_context2) {
    if (is_throwing_error) {
      if (previous_effect === null) {
        is_throwing_error = false;
      }
      if (should_rethrow_error(effect2)) {
        throw error;
      }
      return;
    }
    if (previous_effect !== null) {
      is_throwing_error = true;
    }
    {
      propagate_error(error, effect2);
      return;
    }
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root2) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var _a;
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var prev_derived_sources = derived_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var flags = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    skip_reaction = (flags & UNOWNED) !== 0 && (!is_flushing_effect || previous_reaction === null || previous_untracking);
    derived_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    read_version++;
    try {
      var result = (
        /** @type {Function} */
        (0, reaction.fn)()
      );
      var deps = reaction.deps;
      if (new_deps !== null) {
        var i;
        remove_reactions(reaction, skipped_deps);
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (!skip_reaction) {
          for (i = skipped_deps; i < deps.length; i++) {
            ((_a = deps[i]).reactions ?? (_a.reactions = [])).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null) {
        read_version++;
      }
      return result;
    } finally {
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      derived_sources = prev_derived_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !new_deps.includes(dependency))) {
      set_signal_status(dependency, MAYBE_DIRTY);
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      destroy_derived_effects(
        /** @type {Derived} **/
        dependency
      );
      remove_reactions(
        /** @type {Derived} **/
        dependency,
        0
      );
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags = effect2.f;
    if ((flags & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var previous_component_context = component_context;
    active_effect = effect2;
    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var deps = effect2.deps;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
      if (DEV) ;
    } catch (error) {
      handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
    } finally {
      active_effect = previous_effect;
    }
  }
  function infinite_loop_guard() {
    if (flush_count > 1e3) {
      flush_count = 0;
      try {
        effect_update_depth_exceeded();
      } catch (error) {
        if (last_scheduled_effect !== null) {
          {
            handle_error(error, last_scheduled_effect, null);
          }
        } else {
          throw error;
        }
      }
    }
    flush_count++;
  }
  function flush_queued_root_effects(root_effects) {
    var length = root_effects.length;
    if (length === 0) {
      return;
    }
    infinite_loop_guard();
    var previously_flushing_effect = is_flushing_effect;
    is_flushing_effect = true;
    try {
      for (var i = 0; i < length; i++) {
        var effect2 = root_effects[i];
        if ((effect2.f & CLEAN) === 0) {
          effect2.f ^= CLEAN;
        }
        var collected_effects = process_effects(effect2);
        flush_queued_effects(collected_effects);
      }
    } finally {
      is_flushing_effect = previously_flushing_effect;
    }
  }
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    for (var i = 0; i < length; i++) {
      var effect2 = effects[i];
      if ((effect2.f & (DESTROYED | INERT)) === 0) {
        try {
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
            if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
              if (effect2.teardown === null) {
                unlink_effect(effect2);
              } else {
                effect2.fn = null;
              }
            }
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        }
      }
    }
  }
  function process_deferred() {
    is_micro_task_queued = false;
    if (flush_count > 1001) {
      return;
    }
    const previous_queued_root_effects = queued_root_effects;
    queued_root_effects = [];
    flush_queued_root_effects(previous_queued_root_effects);
    if (!is_micro_task_queued) {
      flush_count = 0;
      last_scheduled_effect = null;
    }
  }
  function schedule_effect(signal) {
    {
      if (!is_micro_task_queued) {
        is_micro_task_queued = true;
        queueMicrotask(process_deferred);
      }
    }
    last_scheduled_effect = signal;
    var effect2 = signal;
    while (effect2.parent !== null) {
      effect2 = effect2.parent;
      var flags = effect2.f;
      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect2.f ^= CLEAN;
      }
    }
    queued_root_effects.push(effect2);
  }
  function process_effects(effect2) {
    var effects = [];
    var current_effect = effect2.first;
    main_loop: while (current_effect !== null) {
      var flags = current_effect.f;
      var is_branch = (flags & BRANCH_EFFECT) !== 0;
      var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
      var sibling2 = current_effect.next;
      if (!is_skippable_branch && (flags & INERT) === 0) {
        if ((flags & EFFECT) !== 0) {
          effects.push(current_effect);
        } else if (is_branch) {
          current_effect.f ^= CLEAN;
        } else {
          var previous_active_reaction = active_reaction;
          try {
            active_reaction = current_effect;
            if (check_dirtiness(current_effect)) {
              update_effect(current_effect);
            }
          } catch (error) {
            handle_error(error, current_effect, null, current_effect.ctx);
          } finally {
            active_reaction = previous_active_reaction;
          }
        }
        var child2 = current_effect.first;
        if (child2 !== null) {
          current_effect = child2;
          continue;
        }
      }
      if (sibling2 === null) {
        let parent = current_effect.parent;
        while (parent !== null) {
          if (effect2 === parent) {
            break main_loop;
          }
          var parent_sibling = parent.next;
          if (parent_sibling !== null) {
            current_effect = parent_sibling;
            continue main_loop;
          }
          parent = parent.parent;
        }
      }
      current_effect = sibling2;
    }
    return effects;
  }
  function get(signal) {
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      if (derived_sources !== null && derived_sources.includes(signal)) {
        state_unsafe_local_read();
      }
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else if (!skip_reaction || !new_deps.includes(signal)) {
          new_deps.push(signal);
        }
      }
    } else if (is_derived && /** @type {Derived} */
    signal.deps === null && /** @type {Derived} */
    signal.effects === null) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      var parent = derived2.parent;
      if (parent !== null && (parent.f & UNOWNED) === 0) {
        derived2.f ^= UNOWNED;
      }
    }
    if (is_derived) {
      derived2 = /** @type {Derived} */
      signal;
      if (check_dirtiness(derived2)) {
        update_derived(derived2);
      }
    }
    return signal.v;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler == null ? void 0 : handler.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture, passive) {
    var options = { capture, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || dom === window || dom === document) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  function handle_event_propagation(event2) {
    var _a;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = ((_a = event2.composedPath) == null ? void 0 : _a.call(event2)) || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    var path_idx = 0;
    var handled_at = event2.__root;
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2.__root = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated = current_target["__" + event_name];
          if (delegated !== void 0 && !/** @type {any} */
          current_target.disabled) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event2, ...data]);
            } else {
              delegated.call(current_target, event2);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2.__root = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function create_fragment_from_html(html2) {
    var elem = document.createElement("template");
    elem.innerHTML = html2;
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes_start === null) {
      effect2.nodes_start = start;
      effect2.nodes_end = end;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function template(content, flags) {
    var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {Node} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function comment() {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (hydrating) {
      active_effect.nodes_end = hydrate_node;
      hydrate_next();
      return;
    }
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  function set_text(text, value) {
    var str = value == null ? "" : typeof value === "object" ? value + "" : value;
    if (str !== (text.__t ?? (text.__t = text.nodeValue))) {
      text.__t = str;
      text.nodeValue = str + "";
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  function hydrate(component, options) {
    init_operations();
    options.intro = options.intro ?? false;
    const target = options.target;
    const was_hydrating = hydrating;
    const previous_hydrate_node = hydrate_node;
    try {
      var anchor = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(target)
      );
      while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
      anchor.data !== HYDRATION_START)) {
        anchor = /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(anchor);
      }
      if (!anchor) {
        throw HYDRATION_ERROR;
      }
      set_hydrating(true);
      set_hydrate_node(
        /** @type {Comment} */
        anchor
      );
      hydrate_next();
      const instance = _mount(component, { ...options, anchor });
      if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
      hydrate_node.data !== HYDRATION_END) {
        hydration_mismatch();
        throw HYDRATION_ERROR;
      }
      set_hydrating(false);
      return (
        /**  @type {Exports} */
        instance
      );
    } catch (error) {
      if (error === HYDRATION_ERROR) {
        if (options.recover === false) {
          hydration_failed();
        }
        init_operations();
        clear_text_content(target);
        set_hydrating(false);
        return mount(component, options);
      }
      throw error;
    } finally {
      set_hydrating(was_hydrating);
      set_hydrate_node(previous_hydrate_node);
    }
  }
  const document_listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        target.addEventListener(event_name, handle_event_propagation, { passive });
        var n = document_listeners.get(event_name);
        if (n === void 0) {
          document.addEventListener(event_name, handle_event_propagation, { passive });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    var component = void 0;
    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      branch(() => {
        if (context) {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context;
        }
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node,
            null
          );
        }
        component = Component(anchor_node, props) || {};
        if (hydrating) {
          active_effect.nodes_end = hydrate_node;
        }
        if (context) {
          pop();
        }
      });
      return () => {
        var _a;
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);
          var n = (
            /** @type {number} */
            document_listeners.get(event_name)
          );
          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          (_a = anchor_node.parentNode) == null ? void 0 : _a.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function if_block(node, fn, elseif = false) {
    if (hydrating) {
      hydrate_next();
    }
    var anchor = node;
    var consequent_effect = null;
    var alternate_effect = null;
    var condition = UNINITIALIZED;
    var flags = elseif ? EFFECT_TRANSPARENT : 0;
    var has_branch = false;
    const set_branch = (fn2, flag = true) => {
      has_branch = true;
      update_branch(flag, fn2);
    };
    const update_branch = (new_condition, fn2) => {
      if (condition === (condition = new_condition)) return;
      let mismatch = false;
      if (hydrating) {
        const is_else = (
          /** @type {Comment} */
          anchor.data === HYDRATION_START_ELSE
        );
        if (!!condition === is_else) {
          anchor = remove_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
        }
      }
      if (condition) {
        if (consequent_effect) {
          resume_effect(consequent_effect);
        } else if (fn2) {
          consequent_effect = branch(() => fn2(anchor));
        }
        if (alternate_effect) {
          pause_effect(alternate_effect, () => {
            alternate_effect = null;
          });
        }
      } else {
        if (alternate_effect) {
          resume_effect(alternate_effect);
        } else if (fn2) {
          alternate_effect = branch(() => fn2(anchor));
        }
        if (consequent_effect) {
          pause_effect(consequent_effect, () => {
            consequent_effect = null;
          });
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
    if (hydrating) {
      anchor = hydrate_node;
    }
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state2, items, controlled_anchor, items_map) {
    var transitions = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }
    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        /** @type {Element} */
        controlled_anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(
        /** @type {Element} */
        controlled_anchor
      );
      items_map.clear();
      link(state2, items[0].prev, items[length - 1].next);
    }
    run_out_transitions(transitions, () => {
      for (var i2 = 0; i2 < length; i2++) {
        var item = items[i2];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state2, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
    var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = hydrating ? set_hydrate_node(
        /** @type {Comment | Text} */
        /* @__PURE__ */ get_first_child(parent_node)
      ) : parent_node.appendChild(create_text());
    }
    if (hydrating) {
      hydrate_next();
    }
    var fallback = null;
    var was_empty = false;
    var each_array = /* @__PURE__ */ derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    block(() => {
      var array = get(each_array);
      var length = array.length;
      if (was_empty && length === 0) {
        return;
      }
      was_empty = length === 0;
      let mismatch = false;
      if (hydrating) {
        var is_else = (
          /** @type {Comment} */
          anchor.data === HYDRATION_START_ELSE
        );
        if (is_else !== (length === 0)) {
          anchor = remove_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
        }
      }
      if (hydrating) {
        var prev = null;
        var item;
        for (var i = 0; i < length; i++) {
          if (hydrate_node.nodeType === 8 && /** @type {Comment} */
          hydrate_node.data === HYDRATION_END) {
            anchor = /** @type {Comment} */
            hydrate_node;
            mismatch = true;
            set_hydrating(false);
            break;
          }
          var value = array[i];
          var key = get_key(value, i);
          item = create_item(
            hydrate_node,
            state2,
            prev,
            null,
            value,
            key,
            i,
            render_fn,
            flags,
            get_collection
          );
          state2.items.set(key, item);
          prev = item;
        }
        if (length > 0) {
          set_hydrate_node(remove_nodes());
        }
      }
      if (!hydrating) {
        reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection);
      }
      if (fallback_fn !== null) {
        if (length === 0) {
          if (fallback) {
            resume_effect(fallback);
          } else {
            fallback = branch(() => fallback_fn(anchor));
          }
        } else if (fallback !== null) {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
      get(each_array);
    });
    if (hydrating) {
      anchor = hydrate_node;
    }
  }
  function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
    var _a, _b, _c, _d;
    var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
    var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
    var length = array.length;
    var items = state2.items;
    var first = state2.first;
    var current = first;
    var seen;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var item;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        item = items.get(key);
        if (item !== void 0) {
          (_a = item.a) == null ? void 0 : _a.measure();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item === void 0) {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state2,
          prev,
          prev === null ? state2.first : prev.next,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        items.set(key, prev);
        matched = [];
        stashed = [];
        current = prev.next;
        continue;
      }
      if (should_update) {
        update_item(item, value, i, flags);
      }
      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
        if (is_animated) {
          (_b = item.a) == null ? void 0 : _b.unfix();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
        }
      }
      if (item !== current) {
        if (seen !== void 0 && seen.has(item)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev, a);
            link(state2, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(item);
            move(item, current, anchor);
            link(state2, item.prev, item.next);
            link(state2, item, prev === null ? state2.first : prev.next);
            link(state2, prev, item);
            prev = item;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current.k !== key) {
          if ((current.e.f & INERT) === 0) {
            (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
          }
          stashed.push(current);
          current = current.next;
        }
        if (current === null) {
          continue;
        }
        item = current;
      }
      matched.push(item);
      prev = item;
      current = item.next;
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = seen === void 0 ? [] : array_from(seen);
      while (current !== null) {
        if ((current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            (_c = to_destroy[i].a) == null ? void 0 : _c.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
          }
        }
        pause_effects(state2, to_destroy, controlled_anchor, items);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        var _a2;
        if (to_animate === void 0) return;
        for (item of to_animate) {
          (_a2 = item.a) == null ? void 0 : _a2.apply();
        }
      });
    }
    active_effect.first = state2.first && state2.first.e;
    active_effect.last = prev && prev.e;
  }
  function update_item(item, value, index2, type) {
    if ((type & EACH_ITEM_REACTIVE) !== 0) {
      internal_set(item.v, value);
    }
    if ((type & EACH_INDEX_REACTIVE) !== 0) {
      internal_set(
        /** @type {Value<number>} */
        item.i,
        index2
      );
    } else {
      item.i = index2;
    }
  }
  function create_item(anchor, state2, prev, next2, value, key, index2, render_fn, flags, get_collection) {
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
    var v = reactive ? mutable ? /* @__PURE__ */ mutable_source(value) : source(value) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev,
      next: next2
    };
    try {
      item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
      item.e.prev = prev && prev.e;
      item.e.next = next2 && next2.e;
      if (prev === null) {
        state2.first = item;
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }
      if (next2 !== null) {
        next2.prev = item;
        next2.e.prev = item.e;
      }
      return item;
    } finally {
    }
  }
  function move(item, next2, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next2 ? (
      /** @type {TemplateNode} */
      next2.e.nodes_start
    ) : anchor;
    var node = (
      /** @type {TemplateNode} */
      item.e.nodes_start
    );
    while (node !== end) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      node = next_node;
    }
  }
  function link(state2, prev, next2) {
    if (prev === null) {
      state2.first = next2;
    } else {
      prev.next = next2;
      prev.e.next = next2 && next2.e;
    }
    if (next2 !== null) {
      next2.prev = prev;
      next2.e.prev = prev && prev.e;
    }
  }
  function html(node, get_value, svg, mathml, skip_warning) {
    var anchor = node;
    var value = "";
    var effect2;
    block(() => {
      if (value === (value = get_value() ?? "")) {
        if (hydrating) {
          hydrate_next();
        }
        return;
      }
      if (effect2 !== void 0) {
        destroy_effect(effect2);
        effect2 = void 0;
      }
      if (value === "") return;
      effect2 = branch(() => {
        if (hydrating) {
          hydrate_node.data;
          var next2 = hydrate_next();
          var last = next2;
          while (next2 !== null && (next2.nodeType !== 8 || /** @type {Comment} */
          next2.data !== "")) {
            last = next2;
            next2 = /** @type {TemplateNode} */
            /* @__PURE__ */ get_next_sibling(next2);
          }
          if (next2 === null) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
          assign_nodes(hydrate_node, last);
          anchor = set_hydrate_node(next2);
          return;
        }
        var html2 = value + "";
        var node2 = create_fragment_from_html(html2);
        assign_nodes(
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(node2),
          /** @type {TemplateNode} */
          node2.lastChild
        );
        {
          anchor.before(node2);
        }
      });
    });
  }
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx$1() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  function clsx(value) {
    if (typeof value === "object") {
      return clsx$1(value);
    } else {
      return value ?? "";
    }
  }
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = element.__attributes ?? (element.__attributes = {});
    if (hydrating) {
      attributes[attribute] = element.getAttribute(attribute);
      if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === "LINK") {
        return;
      }
    }
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "style" && "__styles" in element) {
      element.__styles = {};
    }
    if (attribute === "loading") {
      element[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var setters = setters_cache.get(element.nodeName);
    if (setters) return setters;
    setters_cache.set(element.nodeName, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function set_class(dom, value, hash) {
    var prev_class_name = dom.__className;
    var next_class_name = to_class(value, hash);
    if (hydrating && dom.className === next_class_name) {
      dom.__className = next_class_name;
    } else if (prev_class_name !== next_class_name || hydrating && dom.className !== next_class_name) {
      if (value == null && !hash) {
        dom.removeAttribute("class");
      } else {
        dom.className = next_class_name;
      }
      dom.__className = next_class_name;
    }
  }
  function to_class(value, hash) {
    return (value == null ? "" : value) + (hash ? " " + hash : "");
  }
  function set_style(dom, key, value, important) {
    var styles = dom.__styles ?? (dom.__styles = {});
    if (styles[key] === value) {
      return;
    }
    styles[key] = value;
    if (value == null) {
      dom.style.removeProperty(key);
    } else {
      dom.style.setProperty(key, value, "");
    }
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        queue_micro_task(() => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        });
      };
    });
    return element_or_component;
  }
  function prop(props, key, flags, fallback) {
    var prop_value;
    {
      prop_value = /** @type {V} */
      props[key];
    }
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;
        {
          fallback_value = /** @type {V} */
          fallback;
        }
      }
      return fallback_value;
    };
    if (prop_value === void 0 && fallback !== void 0) {
      prop_value = get_fallback();
    }
    var getter;
    {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    }
    {
      return getter;
    }
  }
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
  const clueDisplay = proxy({
    show: false,
    state: ClueDisplayStates.Clue,
    clue: {
      roundNum: 0,
      categoryNum: 0,
      clueNum: 0,
      value: 0,
      playOrder: 0,
      dailyDouble: false,
      finalJeopardy: false,
      clueHTML: "",
      response: {
        correctResponse: "",
        comments: [],
        responders: []
      },
      dailyDoubleWager: null,
      finalJeopardyResponses: []
    }
  });
  function showModal(clue) {
    clueDisplay.show = true;
    clueDisplay.state = ClueDisplayStates.Clue;
    clueDisplay.clue = clue;
  }
  var on_click$1 = (_, $$props) => {
    if ("clueHTML" in $$props.clue) {
      showModal($$props.clue);
    }
  };
  var root_1$4 = /* @__PURE__ */ template(`<div class="order_text svelte-whch0"> </div> <div class="value_text svelte-whch0"> </div>`, 1);
  var root$4 = /* @__PURE__ */ template(`<button class="clue_cell svelte-whch0"><!></button>`);
  function ClueCell($$anchor, $$props) {
    push($$props, true);
    var button = root$4();
    button.__click = [on_click$1, $$props];
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var fragment = root_1$4();
        const clueData = /* @__PURE__ */ derived(() => $$props.clue);
        var div = first_child(fragment);
        var text = child(div, true);
        reset(div);
        var div_1 = sibling(div, 2);
        var text_1 = child(div_1, true);
        reset(div_1);
        template_effect(() => {
          set_text(text, get(clueData).playOrder);
          set_text(text_1, get(clueData).value);
        });
        append($$anchor2, fragment);
      };
      if_block(node, ($$render) => {
        if ("clueHTML" in $$props.clue) $$render(consequent);
      });
    }
    reset(button);
    template_effect(() => {
      set_style(button, "grid-row", $$props.clue.clueNum + 2);
      set_style(button, "grid-column", $$props.clue.categoryNum + 1);
    });
    append($$anchor, button);
    pop();
  }
  delegate(["click"]);
  function noop() {
    return;
  }
  var root_1$3 = /* @__PURE__ */ template(`<div class="ico-extra svelte-63tsd7">✱</div>`);
  var root_2$2 = /* @__PURE__ */ template(`<div class="category_comments svelte-63tsd7"> </div>`);
  var root$3 = /* @__PURE__ */ template(`<div class="category_cell svelte-63tsd7" role="columnheader"><!> <button class="category svelte-63tsd7"><div> </div> <!></button></div>`);
  function CategoryCell($$anchor, $$props) {
    push($$props, true);
    let onclick = prop($$props, "onclick", 3, noop);
    let showComment = state(false);
    const categoryNameClasses = $$props.category.clues.length == 1 ? "category_name final" : "category_name";
    var div = root$3();
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_1$3();
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if ($$props.category.comments && !get(showComment)) $$render(consequent);
      });
    }
    var button = sibling(node, 2);
    button.__click = function(...$$args) {
      var _a;
      (_a = onclick()) == null ? void 0 : _a.apply(this, $$args);
    };
    var div_2 = child(button);
    set_class(div_2, clsx(categoryNameClasses), "svelte-63tsd7");
    var text = child(div_2, true);
    reset(div_2);
    var node_1 = sibling(div_2, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var div_3 = root_2$2();
        var text_1 = child(div_3, true);
        reset(div_3);
        template_effect(() => set_text(text_1, $$props.category.comments));
        append($$anchor2, div_3);
      };
      if_block(node_1, ($$render) => {
        if ($$props.category.comments && get(showComment)) $$render(consequent_1);
      });
    }
    reset(button);
    reset(div);
    template_effect(() => {
      set_attribute(div, "tabindex", $$props.category.categoryNum);
      set_style(div, "grid-column", $$props.category.categoryNum + 1);
      set_style(div, "grid-row", 1);
      set_text(text, $$props.category.title);
    });
    event("mouseenter", div, () => {
      if ($$props.category.comments) {
        set(showComment, true);
      }
    });
    event("mouseleave", div, () => set(showComment, false));
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);
  var root_1$2 = /* @__PURE__ */ template(`<!> <!>`, 1);
  var root_5 = /* @__PURE__ */ template(`<div class="score_name svelte-qvpibm"> </div> <div class="score_score svelte-qvpibm"> </div> <div class="score_remarks svelte-qvpibm"> </div>`, 1);
  var root_4$1 = /* @__PURE__ */ template(`<div class="score_block svelte-qvpibm" role="grid"><div class="score_block_title svelte-qvpibm"> </div> <!></div>`);
  var root$2 = /* @__PURE__ */ template(`<div role="grid"></div> <div class="score_blocks svelte-qvpibm"><div class="score_gap svelte-qvpibm"></div> <!></div>`, 1);
  function Round($$anchor, $$props) {
    push($$props, true);
    const finalRound = $$props.round.categories[0].clues.length == 1;
    const boardClasses = finalRound ? "final_board" : "board";
    const categoryOnClick = finalRound ? () => {
      console.log($$props.round.categories[0].clues[0]);
      showModal($$props.round.categories[0].clues[0]);
    } : noop;
    var fragment = root$2();
    var div = first_child(fragment);
    set_class(div, clsx(boardClasses), "svelte-qvpibm");
    each(div, 21, () => $$props.round.categories, (category) => category.categoryNum, ($$anchor2, category) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      CategoryCell(node, {
        get category() {
          return get(category);
        },
        onclick: categoryOnClick
      });
      var node_1 = sibling(node, 2);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          each(node_2, 17, () => get(category).clues, index, ($$anchor4, clue) => {
            ClueCell($$anchor4, {
              get clue() {
                return get(clue);
              }
            });
          });
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (!finalRound) $$render(consequent);
        });
      }
      append($$anchor2, fragment_1);
    });
    reset(div);
    var div_1 = sibling(div, 2);
    var node_3 = sibling(child(div_1), 2);
    each(node_3, 17, () => $$props.round.scoreBlocks, (scoreBlock) => scoreBlock.title, ($$anchor2, scoreBlock) => {
      var div_2 = root_4$1();
      var div_3 = child(div_2);
      var text = child(div_3, true);
      reset(div_3);
      var node_4 = sibling(div_3, 2);
      each(node_4, 17, () => get(scoreBlock).players, (playerScore) => playerScore.name, ($$anchor3, playerScore) => {
        var fragment_4 = root_5();
        var div_4 = first_child(fragment_4);
        var text_1 = child(div_4, true);
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var text_2 = child(div_5);
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var text_3 = child(div_6, true);
        reset(div_6);
        template_effect(
          ($0) => {
            set_text(text_1, get(playerScore).name);
            set_text(text_2, `$${$0 ?? ""}`);
            set_text(text_3, get(playerScore).remarks);
          },
          [
            () => get(playerScore).score.toLocaleString()
          ]
        );
        append($$anchor3, fragment_4);
      });
      reset(div_2);
      template_effect(() => set_text(text, get(scoreBlock).title));
      append($$anchor2, div_2);
    });
    reset(div_1);
    append($$anchor, fragment);
    pop();
  }
  var on_click = (e, dialog) => {
    var _a;
    if (e.target === get(dialog)) (_a = get(dialog)) == null ? void 0 : _a.close();
  };
  var on_click_1 = (_, dialog) => {
    var _a;
    return (_a = get(dialog)) == null ? void 0 : _a.close();
  };
  var root_2$1 = /* @__PURE__ */ template(`<div class="responder svelte-r4f1vo"> </div>`);
  var root_3$1 = /* @__PURE__ */ template(`<div class="responder svelte-r4f1vo" data-state="incorrect">Triple Stumper</div>`);
  var root_1$1 = /* @__PURE__ */ template(`<div class="responders svelte-r4f1vo"><!> <!></div>`);
  var root_4 = /* @__PURE__ */ template(` <br>`, 1);
  var root$1 = /* @__PURE__ */ template(`<dialog class="clue_modal svelte-r4f1vo" aria-modal="true" tabindex="-1"><div class="modal_content svelte-r4f1vo"><div class="ico-close svelte-r4f1vo" aria-label="Close">&#x2716;</div> <div class="ico-extra svelte-r4f1vo">✱</div> <!> <div class="modal_main svelte-r4f1vo"><div class="daily_double svelte-r4f1vo">Daily Double</div> <div class="clue svelte-r4f1vo"><!></div> <div class="correct_response svelte-r4f1vo"> <div class="response_comments svelte-r4f1vo"><hr> <!></div></div> <div class="final_responses"></div></div></div></dialog>`);
  function ClueModal($$anchor, $$props) {
    push($$props, true);
    let dialog = state(void 0);
    let showExtra = state(false);
    let tripleStumper = state(false);
    user_effect(() => {
      if (clueDisplay.show) {
        set(tripleStumper, true);
        clueDisplay.clue.response.responders.forEach((responder) => {
          if (responder.correct) {
            set(tripleStumper, false);
          }
        });
        showDialog();
      }
    });
    function showDialog() {
      var _a;
      (_a = get(dialog)) == null ? void 0 : _a.showModal();
      $$props.scrollToElm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    }
    function onCloseDialog() {
      $$props.scrollToElm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
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
          if (clueDisplay.clue.finalJeopardy) {
            clueDisplay.state = ClueDisplayStates.FinalResponses;
          } else {
            clueDisplay.state = ClueDisplayStates.Clue;
          }
          break;
        default:
          clueDisplay.state = ClueDisplayStates.Clue;
          break;
      }
    }
    var dialog_1 = root$1();
    dialog_1.__click = [on_click, dialog];
    var div = child(dialog_1);
    div.__click = nextDisplayState;
    var div_1 = child(div);
    div_1.__click = [on_click_1, dialog];
    var div_2 = sibling(div_1, 2);
    var node = sibling(div_2, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var div_3 = root_1$1();
        var node_1 = child(div_3);
        each(node_1, 17, () => clueDisplay.clue.response.responders, (responder) => responder.player, ($$anchor3, responder) => {
          var div_4 = root_2$1();
          var text = child(div_4, true);
          reset(div_4);
          template_effect(() => {
            set_attribute(div_4, "data-state", get(responder).correct ? "correct" : "incorrect");
            set_text(text, get(responder).player);
          });
          append($$anchor3, div_4);
        });
        var node_2 = sibling(node_1, 2);
        {
          var consequent = ($$anchor3) => {
            var div_5 = root_3$1();
            append($$anchor3, div_5);
          };
          if_block(node_2, ($$render) => {
            if (get(tripleStumper)) $$render(consequent);
          });
        }
        reset(div_3);
        append($$anchor2, div_3);
      };
      if_block(node, ($$render) => {
        if (!clueDisplay.clue.finalJeopardy && clueDisplay.state == ClueDisplayStates.CorrectResponse) $$render(consequent_1);
      });
    }
    var div_6 = sibling(node, 2);
    var div_7 = child(div_6);
    var div_8 = sibling(div_7, 2);
    var node_3 = child(div_8);
    html(node_3, () => clueDisplay.clue.clueHTML);
    reset(div_8);
    var div_9 = sibling(div_8, 2);
    var text_1 = child(div_9);
    var div_10 = sibling(text_1);
    var node_4 = sibling(child(div_10), 2);
    each(node_4, 17, () => clueDisplay.clue.response.comments, index, ($$anchor2, comment2) => {
      next();
      var fragment = root_4();
      var text_2 = first_child(fragment);
      next();
      template_effect(() => set_text(text_2, `${get(comment2) ?? ""} `));
      append($$anchor2, fragment);
    });
    reset(div_10);
    reset(div_9);
    var div_11 = sibling(div_9, 2);
    reset(div_6);
    reset(div);
    reset(dialog_1);
    bind_this(dialog_1, ($$value) => set(dialog, $$value), () => get(dialog));
    template_effect(() => {
      set_attribute(dialog_1, "aria-hidden", !clueDisplay.show);
      div_2.hidden = clueDisplay.clue.response.comments.length == 0 || clueDisplay.state != ClueDisplayStates.CorrectResponse;
      div_7.hidden = clueDisplay.state != ClueDisplayStates.DailyDouble;
      div_8.hidden = clueDisplay.state != ClueDisplayStates.Clue;
      div_9.hidden = clueDisplay.state != ClueDisplayStates.CorrectResponse;
      set_text(text_1, `${clueDisplay.clue.response.correctResponse ?? ""} `);
      div_10.hidden = clueDisplay.clue.response.comments.length == 0 || !get(showExtra);
      div_11.hidden = clueDisplay.state != ClueDisplayStates.FinalResponses;
    });
    event("close", dialog_1, onCloseDialog);
    event("mouseenter", div_6, () => set(showExtra, true));
    event("mouseleave", div_6, () => set(showExtra, false));
    append($$anchor, dialog_1);
    pop();
  }
  delegate(["click"]);
  var root_1 = /* @__PURE__ */ template(`<p class="contestant"><a target="_blank"> </a> </p>`);
  var root_2 = /* @__PURE__ */ template(`<button class="round-tab svelte-1c03mbw" role="tab"> </button>`);
  var root_3 = /* @__PURE__ */ template(`<div class="round-tabs-content svelte-1c03mbw" role="tabpanel" tabindex="0"><!></div>`);
  var root = /* @__PURE__ */ template(`<div id="game_title" class="svelte-1c03mbw"><a target="_blank" role="button" class="svelte-1c03mbw">⇐ Previous Game</a> <h1> </h1> <a target="_blank" role="button" class="svelte-1c03mbw">Next Game ⇒</a></div> <div id="game_comments"> </div> <div id="contestants"><h2>Contestants</h2> <!></div> <div class="tabs svelte-1c03mbw"><div role="tablist" aria-label="Round Tabs" class="round-tabs-list svelte-1c03mbw"></div> <div></div> <!></div>`, 1);
  function Game($$anchor, $$props) {
    push($$props, true);
    let activeTab = state(0);
    let scrollToElm = state(void 0);
    var fragment = root();
    var div = first_child(fragment);
    var a = child(div);
    var h1 = sibling(a, 2);
    var text = child(h1, true);
    reset(h1);
    var a_1 = sibling(h1, 2);
    reset(div);
    var div_1 = sibling(div, 2);
    var text_1 = child(div_1, true);
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    var node = sibling(child(div_2), 2);
    each(node, 17, () => $$props.gameData.contestants, (contestant) => contestant.id, ($$anchor2, contestant) => {
      var p = root_1();
      var a_2 = child(p);
      var text_2 = child(a_2, true);
      reset(a_2);
      var text_3 = sibling(a_2);
      reset(p);
      template_effect(() => {
        set_attribute(a_2, "href", `showplayer.php?player_id=${get(contestant).id ?? ""}`);
        set_text(text_2, get(contestant).name);
        set_text(text_3, `, ${get(contestant).comments ?? ""}`);
      });
      append($$anchor2, p);
    });
    reset(div_2);
    var div_3 = sibling(div_2, 2);
    var div_4 = child(div_3);
    each(div_4, 23, () => $$props.gameData.rounds, (round) => round.roundNum, ($$anchor2, round, i) => {
      var button = root_2();
      button.__click = () => set(activeTab, proxy(get(i)));
      var text_4 = child(button, true);
      reset(button);
      template_effect(() => {
        set_attribute(button, "aria-selected", get(activeTab) == get(i) ? true : false);
        set_attribute(button, "aria-controls", `panel-${get(i) ?? ""}`);
        set_attribute(button, "id", `tab-${get(i) ?? ""}`);
        set_attribute(button, "tabindex", get(activeTab) == get(i) ? 0 : -1);
        set_attribute(button, "data-state", get(activeTab) == get(i) ? "active" : "inactive");
        set_text(text_4, get(round).name);
      });
      append($$anchor2, button);
    });
    reset(div_4);
    var div_5 = sibling(div_4, 2);
    each(div_5, 23, () => $$props.gameData.rounds, (round) => round.roundNum, ($$anchor2, round, i) => {
      var div_6 = root_3();
      var node_1 = child(div_6);
      Round(node_1, {
        get round() {
          return get(round);
        }
      });
      reset(div_6);
      template_effect(() => {
        set_attribute(div_6, "id", `panel-${get(i) ?? ""}`);
        set_attribute(div_6, "aria-labelledby", `tab-${get(i) ?? ""}`);
        div_6.hidden = get(activeTab) != get(i);
      });
      append($$anchor2, div_6);
    });
    reset(div_5);
    bind_this(div_5, ($$value) => set(scrollToElm, $$value), () => get(scrollToElm));
    var node_2 = sibling(div_5, 2);
    ClueModal(node_2, {
      get scrollToElm() {
        return get(scrollToElm);
      }
    });
    reset(div_3);
    template_effect(() => {
      set_attribute(a, "href", `showgame.php?game_id=${$$props.gameData.id - 1}`);
      set_text(text, $$props.gameData.title);
      set_attribute(a_1, "href", `showgame.php?game_id=${$$props.gameData.id + 1}`);
      set_text(text_1, $$props.gameData.comments);
    });
    append($$anchor, fragment);
    pop();
  }
  delegate(["click"]);
  function App($$anchor, $$props) {
    Game($$anchor, {
      get gameData() {
        return $$props.gameData;
      }
    });
  }
  const viewport = document.createElement("meta");
  viewport.name = "viewport";
  viewport.content = "width=device-width, initial-scale=1";
  document.getElementsByTagName("head")[0].appendChild(viewport);
  const contentElm = document.querySelector("div#content");
  if (contentElm === null) {
    throw new Error("No content element found");
  }
  const gameData = parseGame(contentElm);
  hydrate(App, {
    target: contentElm,
    props: {
      gameData
    }
  });

})();