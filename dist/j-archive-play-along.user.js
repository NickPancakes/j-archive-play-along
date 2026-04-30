// ==UserScript==
// @name         j-archive-play-along
// @namespace    https://github.com/NickPancakes/j-archive-play-along
// @version      0.1.3
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

(function () {
  'use strict';

  const d=new Set;const importCSS = async e=>{d.has(e)||(d.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):(document.head||document.documentElement).appendChild(document.createElement("style")).append(t);})(e));};

  importCSS(' @import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";@import"https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,40..300&display=swap";@import"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap";.clue_cell.svelte-10i3dmb{border-width:.2rem;border-style:outset;display:grid;place-content:center;place-items:center;text-align:center;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);grid-template-rows:15% 70% 15%;grid-template-columns:100%;grid-template-areas:"top" "main" "bottom"}.order_text.svelte-10i3dmb{padding-top:.2rem;padding-right:.2rem;font-size:clamp(.1rem,1.5cqmin,9rem);color:var(--white);text-align:right;vertical-align:middle;grid-area:top}.value_text.svelte-10i3dmb{font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(1rem,6.5cqmin,12rem);background-color:var(--clue-screen-blue);color:var(--font-yellow);text-shadow:.1em .1em 0px #000000;text-align:center;vertical-align:middle;font-weight:800;grid-area:main;border-style:none;padding:0}div.category_cell.svelte-1atmmd4{border-width:.2rem;border-style:outset;display:grid;place-content:center;place-items:center;color:var(--white);text-align:center;vertical-align:middle;font-weight:700;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);grid-row:1;grid-template-rows:15% 70% 15%;grid-template-columns:100%;grid-template-areas:"top" "main" "bottom"}button.category.svelte-1atmmd4{width:100%;height:100%;background-color:var(--clue-screen-blue);border-style:none;grid-area:main;padding:0;color:var(--white)}div.category_name.svelte-1atmmd4{font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(.25rem,2.5cqmin,9rem);text-shadow:.1em .1em 0px #000000;text-align:center;text-wrap:balance;vertical-align:middle;font-weight:700}div.final.svelte-1atmmd4{font-size:clamp(1rem,6vmin,6rem)}div.category_comments.svelte-1atmmd4{text-align:center;vertical-align:middle;font-size:clamp(.2rem,2cqmin,8rem);text-wrap:balance;grid-area:main}.ico-extra.svelte-1atmmd4{width:100%;height:100%;padding-top:.2rem;padding-left:.2rem;color:var(--white);grid-area:top;font-size:clamp(.25rem,1.5cqmin,9rem);font-family:arial,sans-serif;text-align:left;vertical-align:center;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black}div.board.svelte-1cn8fss{height:100vh;width:100%;display:grid;gap:.1rem;place-content:center;grid-auto-flow:column dense;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(6,minmax(0,1fr))}div.final_board.svelte-1cn8fss{height:50vh;width:100%;display:grid;gap:.1rem;place-content:center;grid-auto-flow:row dense;grid-template-columns:minmax(0,.5fr) minmax(0,1fr) minmax(0,.5fr);grid-template-rows:minmax(0,1fr)}div.score_blocks.svelte-1cn8fss{height:75vh;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}div.score_gap.svelte-1cn8fss{height:25vh}div.score_block.svelte-1cn8fss{height:100%;width:90%;border-width:.2rem;border-style:outset;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);place-content:center;place-items:center;text-align:center;font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(.25rem,3cqmin,10rem);display:grid;gap:.1rem;grid-auto-flow:row dense;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(4,minmax(0,1fr))}div.score_block_title.svelte-1cn8fss{grid-row:1;grid-column:1 / -1;font-size:clamp(.5rem,3cqmin,12rem);font-weight:700}div.score_name.svelte-1cn8fss{grid-row:2;font-weight:700}div.score_score.svelte-1cn8fss{grid-row:3}div.score_remarks.svelte-1cn8fss{grid-row:4;font-size:clamp(.5rem,2.5cqmin,8rem)}dialog.clue_modal.svelte-11gz3ue{width:90%;height:90%;position:fixed;border-width:1em;border-style:outset;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top)}.modal_content.svelte-11gz3ue{width:100%;height:100%;display:grid;grid-template-columns:5% 90% 5%;grid-template-rows:5% 85% 10%;grid-template-areas:"tl tc tr" "ml main mr" "bl bc br";place-content:center;place-items:center}.modal_main.svelte-11gz3ue{grid-area:main;color:var(--white);text-align:center;font-weight:700;vertical-align:middle;text-wrap:pretty;line-height:1.25}.daily_double.svelte-11gz3ue{text-transform:uppercase;font-family:Futura,Kumbh Sans,Century Gothic,sans-serif;font-weight:800;font-size:clamp(1rem,24vmin,30rem);text-shadow:.3rem .3rem 0px #000000}.clue.svelte-11gz3ue{text-transform:uppercase;font-family:ITC Korinna Std,Libre Baskerville,Times New Roman,serif;font-size:clamp(1rem,7vmin,9rem);text-shadow:.3rem .3rem 0px #000000}.correct_response.svelte-11gz3ue{text-transform:uppercase;color:var(--aqua-blue);font-family:ITC Korinna Std,Libre Baskerville,Times New Roman,serif;font-size:clamp(1rem,7vmin,9rem);text-shadow:.3rem .3rem 0px #000000}.response_comments.svelte-11gz3ue{text-transform:none;text-shadow:none;font-size:clamp(1rem,4vmin,9rem);color:var(--white);text-align:center;vertical-align:middle}.responders.svelte-11gz3ue{grid-area:bc;display:flex;font-size:clamp(1rem,3vmin,9rem);text-align:center;vertical-align:middle;flex-direction:row}.responder[data-state=correct].svelte-11gz3ue{color:var(--lime-green)}.responder[data-state=incorrect].svelte-11gz3ue{color:var(--error-red)}.final_responses_grid.svelte-11gz3ue{place-content:center;place-items:center;text-align:center;font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;color:var(--white);font-size:clamp(.5rem,5cqmin,10rem);text-shadow:none;display:grid;gap:.1rem;grid-auto-flow:row dense;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr))}.final_responses_grid.svelte-11gz3ue>div.responder:where(.svelte-11gz3ue){grid-row:1;font-weight:700}div.responder_wager.svelte-11gz3ue{grid-row:2}div.responder_response.svelte-11gz3ue{grid-row:3;font-size:clamp(.5rem,4cqmin,8rem)}.ico-close.svelte-11gz3ue{width:100%;height:100%;color:var(--white);grid-area:tr;font-size:clamp(1rem,3vmin,9rem);font-family:arial,sans-serif;text-align:right;vertical-align:center;text-shadow:.3rem .3rem 0px #000000}.ico-extra.svelte-11gz3ue{width:100%;height:100%;color:var(--white);grid-area:tl;font-size:clamp(1rem,5vmin,9rem);font-family:arial,sans-serif;text-align:left;vertical-align:center;text-shadow:.3rem .3rem 0px #000000}dialog.svelte-11gz3ue::backdrop{background:#0000004d}dialog[open].svelte-11gz3ue{animation:svelte-11gz3ue-zoom .3s cubic-bezier(.34,1.56,.64,1)}@keyframes svelte-11gz3ue-zoom{0%{transform:scale(.95)}to{transform:scale(1)}}dialog[open].svelte-11gz3ue::backdrop{animation:svelte-11gz3ue-fade .2s ease-out}@keyframes svelte-11gz3ue-fade{0%{opacity:0}to{opacity:1}}#game_title.svelte-wmng36{display:flex;flex-wrap:nowrap;justify-content:space-around;align-items:center}#game_title.svelte-wmng36>a:where(.svelte-wmng36){font-size:clamp(.5rem,2vmin,6rem)}div.tabs.svelte-wmng36{height:100%;width:100%}div.round-tabs-list.svelte-wmng36{flex:auto;width:100%;display:flex;flex-direction:row;justify-content:center;border-bottom-width:.25em;border-bottom-style:outset;border-bottom-color:var(--background-dark-blue)}div.round-tabs-content.svelte-wmng36{height:100%;width:100%}button.round-tab.svelte-wmng36{flex:1;display:flex;flex-direction:row;place-content:center;border-width:.1em;border-style:outset;background-color:var(--clue-depth-bottom);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);color:var(--disclaimer-gray);text-shadow:2px 2px 0px #000000;font-size:clamp(1rem,3vmin,9rem);text-align:center;vertical-align:middle;font-weight:700}button.round-tab[data-state=active].svelte-wmng36{flex:1.5;background-color:var(--clue-screen-blue);color:var(--white)} ');

  const RoundName = {
    Jeopardy: "Jeopardy!",
    DoubleJeopardy: "Double Jeopardy!",
    TripleJeopardy: "Triple Jeopardy!",
    FinalJeopardy: "Final Jeopardy!"
  };
  const ClueDisplayStates = {
    Clue: 0,
    CorrectResponse: 1,
    DailyDouble: 2
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
  function parseFinalResponsesTable(tableElm) {
    const rowElms = tableElm.querySelectorAll("tr");
    if (rowElms == null) {
      return null;
    }
    let responders = [];
    let responder = { player: "", wager: 0, response: "", correct: false };
    for (let rowIdx = 0; rowIdx < rowElms.length; rowIdx++) {
      const rowElm = rowElms[rowIdx];
      const tdElms = rowElm.querySelectorAll("td");
      if (!tdElms) {
        continue;
      }
      if (rowIdx % 2 == 0 && tdElms.length >= 2) {
        responder.correct = tdElms[0].className == "right";
        responder.player = tdElms[0].textContent || "";
        responder.response = tdElms[1].textContent || "";
      } else {
        const wager = (tdElms[0].textContent || "$0").replaceAll("$", "").replaceAll(",", "");
        responder.wager = parseInt(wager);
        responders.push(responder);
        responder = { player: "", wager: 0, response: "", correct: false };
      }
    }
    return responders;
  }
  function parseClueResponse(responseElm, final) {
    let correctResponse = "";
    let responders = [];
    let comments = [];
    let comment2 = "";
    for (let childNode of responseElm.childNodes) {
      if (childNode.nodeType === Node.TEXT_NODE) {
        if (childNode.textContent) {
          comment2 += childNode.textContent;
        }
      } else {
        const childElm = childNode;
        switch (childElm.tagName) {
          case "BR":
            if (comment2) {
              comments.push(comment2);
              comment2 = "";
            }
            break;
          case "EM":
            correctResponse = childElm.textContent || "";
            break;
          case "TABLE":
            const parsedResponses = final ? parseFinalResponsesTable(childElm) : parseNormalResponsesTable(childElm);
            if (parsedResponses) {
              responders = parsedResponses;
            }
            break;
          default:
            comment2 += childNode.textContent;
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
    const clueResponse = parseClueResponse(responseElm, true);
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
    let playOrder = "0";
    let dailyDouble = false;
    let dailyDoubleWager = null;
    const baseValue = totalRounds > 3 ? 100 : 200;
    const value = baseValue * (roundNum + 1) * (clueNum + 1);
    const headerElm = clueElm.querySelector("table.clue_header");
    if (headerElm) {
      playOrder = headerElm?.querySelector("td.clue_order_number")?.textContent ?? "0";
      const valueElm = headerElm.querySelector('[class^="clue_value"]');
      const valueText = valueElm?.textContent || "";
      dailyDouble = valueText.startsWith("DD:");
      if (dailyDouble) {
        dailyDoubleWager = parseInt((valueText.split(":").pop() || "0").replaceAll("$", "").replaceAll(",", ""));
      }
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
    const clueResponse = parseClueResponse(responseElm, false);
    return {
      roundNum,
      categoryNum,
      clueNum,
      value,
      playOrder: parseInt(playOrder),
      clueHTML,
      response: clueResponse,
      dailyDouble,
      dailyDoubleWager,
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
      title: titleElm?.textContent || "",
      comments: commentsElm?.textContent || ""
    };
  }
  function parseFinalRoundTable(roundNum, tableElm) {
    const tbodyElm = tableElm.querySelector("tbody");
    if (!tbodyElm) {
      throw new Error("Could not find tbody in round element");
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
      const remarksElm = remarksRowElm?.children[playerNum];
      const scoreText = (scoreElm?.textContent || "$0").replaceAll("$", "").replaceAll(",", "");
      players[playerNum] = {
        name: nameElm.textContent || "",
        score: parseInt(scoreText),
        remarks: remarksElm?.textContent || ""
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
      title: gameTitleElm?.textContent || "",
      comments: gameCommentsElm?.textContent || "",
      contestants: contestantsTableElm ? parseContestants(contestantsTableElm) : [],
      rounds: roundElms.map((roundElm, roundNum) => parseRound(roundNum, roundElms.length, roundElm))
    };
  }
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var includes = Array.prototype.includes;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  const noop$1 = () => {
  };
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const MANAGED_EFFECT = 1 << 24;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const CONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const REACTION_RAN = 1 << 15;
  const DESTROYING = 1 << 25;
  const EFFECT_TRANSPARENT = 1 << 16;
  const EAGER_EFFECT = 1 << 17;
  const HEAD_EFFECT = 1 << 18;
  const EFFECT_PRESERVED = 1 << 19;
  const USER_EFFECT = 1 << 20;
  const EFFECT_OFFSCREEN = 1 << 25;
  const WAS_MARKED = 1 << 16;
  const REACTION_IS_UPDATING = 1 << 21;
  const ASYNC = 1 << 22;
  const ERROR_VALUE = 1 << 23;
  const STATE_SYMBOL = Symbol("$state");
  const LOADING_ATTR_SYMBOL = Symbol("");
  const STALE_REACTION = new class StaleReactionError extends Error {
    name = "StaleReactionError";
    message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
  }();
  const IS_XHTML = (
!!globalThis.document?.contentType && globalThis.document.contentType.includes("xml")
  );
  const TEXT_NODE = 3;
  const COMMENT_NODE = 8;
  function lifecycle_outside_component(name) {
    {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  function async_derived_orphan() {
    {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }
  function each_key_duplicate(a, b, value) {
    {
      throw new Error(`https://svelte.dev/e/each_key_duplicate`);
    }
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
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  function svelte_boundary_reset_onerror() {
    {
      throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
    }
  }
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const HYDRATION_START = "[";
  const HYDRATION_START_ELSE = "[!";
  const HYDRATION_START_FAILED = "[?";
  const HYDRATION_END = "]";
  const HYDRATION_ERROR = {};
  const UNINITIALIZED = Symbol();
  const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
  const NAMESPACE_SVG = "http://www.w3.org/2000/svg";
  const NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";
  function derived_inert() {
    {
      console.warn(`https://svelte.dev/e/derived_inert`);
    }
  }
  function hydration_mismatch(location) {
    {
      console.warn(`https://svelte.dev/e/hydration_mismatch`);
    }
  }
  function svelte_boundary_reset_noop() {
    {
      console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
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
    return set_hydrate_node( get_next_sibling(hydrate_node));
  }
  function reset(node) {
    if (!hydrating) return;
    if ( get_next_sibling(hydrate_node) !== null) {
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
        node =

get_next_sibling(node);
      }
      hydrate_node = node;
    }
  }
  function skip_nodes(remove = true) {
    var depth = 0;
    var node = hydrate_node;
    while (true) {
      if (node.nodeType === COMMENT_NODE) {
        var data = (
node.data
        );
        if (data === HYDRATION_END) {
          if (depth === 0) return node;
          depth -= 1;
        } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE ||
data[0] === "[" && !isNaN(Number(data.slice(1)))) {
          depth += 1;
        }
      }
      var next2 = (

get_next_sibling(node)
      );
      if (remove) node.remove();
      node = next2;
    }
  }
  function read_hydration_instruction(node) {
    if (!node || node.nodeType !== COMMENT_NODE) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return (
node.data
    );
  }
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  let tracing_mode_flag = false;
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      i: false,
      c: null,
      e: null,
      s: props,
      x: null,
      r: (
active_effect
      ),
      l: null
    };
  }
  function pop(component) {
    var context = (
component_context
    );
    var effects = context.e;
    if (effects !== null) {
      context.e = null;
      for (var fn of effects) {
        create_user_effect(fn);
      }
    }
    context.i = true;
    component_context = context.p;
    return (
{}
    );
  }
  function is_runes() {
    return true;
  }
  let micro_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0 && true) {
      var tasks = micro_tasks;
      queueMicrotask(() => {
        if (tasks === micro_tasks) run_micro_tasks();
      });
    }
    micro_tasks.push(fn);
  }
  function handle_error(error) {
    var effect2 = active_effect;
    if (effect2 === null) {
      active_reaction.f |= ERROR_VALUE;
      return error;
    }
    if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
      throw error;
    }
    invoke_error_boundary(error, effect2);
  }
  function invoke_error_boundary(error, effect2) {
    while (effect2 !== null) {
      if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
        if ((effect2.f & REACTION_RAN) === 0) {
          throw error;
        }
        try {
          effect2.b.error(error);
          return;
        } catch (e) {
          error = e;
        }
      }
      effect2 = effect2.parent;
    }
    throw error;
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function update_derived_status(derived2) {
    if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
      set_signal_status(derived2, CLEAN);
    } else {
      set_signal_status(derived2, MAYBE_DIRTY);
    }
  }
  function clear_marked(deps) {
    if (deps === null) return;
    for (const dep of deps) {
      if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
        continue;
      }
      dep.f ^= WAS_MARKED;
      clear_marked(
dep.deps
      );
    }
  }
  function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
    if ((effect2.f & DIRTY) !== 0) {
      dirty_effects.add(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      maybe_dirty_effects.add(effect2);
    }
    clear_marked(effect2.deps);
    set_signal_status(effect2, CLEAN);
  }
  const batches = new Set();
  let current_batch = null;
  let batch_values = null;
  let last_scheduled_effect = null;
  let is_processing = false;
  let collected_effects = null;
  let legacy_updates = null;
  var flush_count = 0;
  let uid = 1;
  class Batch {
    id = uid++;
current = new Map();
previous = new Map();
#commit_callbacks = new Set();
#discard_callbacks = new Set();
#fork_commit_callbacks = new Set();
#pending = new Map();
#blocking_pending = new Map();
#deferred = null;
#roots = [];
#new_effects = [];
#dirty_effects = new Set();
#maybe_dirty_effects = new Set();
#skipped_branches = new Map();
#unskipped_branches = new Set();
    is_fork = false;
    #decrement_queued = false;
#blockers = new Set();
    #is_deferred() {
      return this.is_fork || this.#blocking_pending.size > 0;
    }
    #is_blocked() {
      for (const batch of this.#blockers) {
        for (const effect2 of batch.#blocking_pending.keys()) {
          var skipped = false;
          var e = effect2;
          while (e.parent !== null) {
            if (this.#skipped_branches.has(e)) {
              skipped = true;
              break;
            }
            e = e.parent;
          }
          if (!skipped) {
            return true;
          }
        }
      }
      return false;
    }
skip_effect(effect2) {
      if (!this.#skipped_branches.has(effect2)) {
        this.#skipped_branches.set(effect2, { d: [], m: [] });
      }
      this.#unskipped_branches.delete(effect2);
    }
unskip_effect(effect2, callback = (e) => this.schedule(e)) {
      var tracked = this.#skipped_branches.get(effect2);
      if (tracked) {
        this.#skipped_branches.delete(effect2);
        for (var e of tracked.d) {
          set_signal_status(e, DIRTY);
          callback(e);
        }
        for (e of tracked.m) {
          set_signal_status(e, MAYBE_DIRTY);
          callback(e);
        }
      }
      this.#unskipped_branches.add(effect2);
    }
    #process() {
      if (flush_count++ > 1e3) {
        batches.delete(this);
        infinite_loop_guard();
      }
      if (!this.#is_deferred()) {
        for (const e of this.#dirty_effects) {
          this.#maybe_dirty_effects.delete(e);
          set_signal_status(e, DIRTY);
          this.schedule(e);
        }
        for (const e of this.#maybe_dirty_effects) {
          set_signal_status(e, MAYBE_DIRTY);
          this.schedule(e);
        }
      }
      const roots = this.#roots;
      this.#roots = [];
      this.apply();
      var effects = collected_effects = [];
      var render_effects = [];
      var updates = legacy_updates = [];
      for (const root2 of roots) {
        try {
          this.#traverse(root2, effects, render_effects);
        } catch (e) {
          reset_all(root2);
          throw e;
        }
      }
      current_batch = null;
      if (updates.length > 0) {
        var batch = Batch.ensure();
        for (const e of updates) {
          batch.schedule(e);
        }
      }
      collected_effects = null;
      legacy_updates = null;
      if (this.#is_deferred() || this.#is_blocked()) {
        this.#defer_effects(render_effects);
        this.#defer_effects(effects);
        for (const [e, t] of this.#skipped_branches) {
          reset_branch(e, t);
        }
      } else {
        if (this.#pending.size === 0) {
          batches.delete(this);
        }
        this.#dirty_effects.clear();
        this.#maybe_dirty_effects.clear();
        for (const fn of this.#commit_callbacks) fn(this);
        this.#commit_callbacks.clear();
        flush_queued_effects(render_effects);
        flush_queued_effects(effects);
        this.#deferred?.resolve();
      }
      var next_batch = (

current_batch
      );
      if (this.#roots.length > 0) {
        const batch2 = next_batch ??= this;
        batch2.#roots.push(...this.#roots.filter((r2) => !batch2.#roots.includes(r2)));
      }
      if (next_batch !== null) {
        batches.add(next_batch);
        next_batch.#process();
      }
    }
#traverse(root2, effects, render_effects) {
      root2.f ^= CLEAN;
      var effect2 = root2.first;
      while (effect2 !== null) {
        var flags2 = effect2.f;
        var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
        var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
        var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
        if (!skip && effect2.fn !== null) {
          if (is_branch) {
            effect2.f ^= CLEAN;
          } else if ((flags2 & EFFECT) !== 0) {
            effects.push(effect2);
          } else if (is_dirty(effect2)) {
            if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect2);
            update_effect(effect2);
          }
          var child2 = effect2.first;
          if (child2 !== null) {
            effect2 = child2;
            continue;
          }
        }
        while (effect2 !== null) {
          var next2 = effect2.next;
          if (next2 !== null) {
            effect2 = next2;
            break;
          }
          effect2 = effect2.parent;
        }
      }
    }
#defer_effects(effects) {
      for (var i = 0; i < effects.length; i += 1) {
        defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
      }
    }
capture(source2, value, is_derived = false) {
      if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
        this.previous.set(source2, source2.v);
      }
      if ((source2.f & ERROR_VALUE) === 0) {
        this.current.set(source2, [value, is_derived]);
        batch_values?.set(source2, value);
      }
      if (!this.is_fork) {
        source2.v = value;
      }
    }
    activate() {
      current_batch = this;
    }
    deactivate() {
      current_batch = null;
      batch_values = null;
    }
    flush() {
      try {
        is_processing = true;
        current_batch = this;
        this.#process();
      } finally {
        flush_count = 0;
        last_scheduled_effect = null;
        collected_effects = null;
        legacy_updates = null;
        is_processing = false;
        current_batch = null;
        batch_values = null;
        old_values.clear();
      }
    }
    discard() {
      for (const fn of this.#discard_callbacks) fn(this);
      this.#discard_callbacks.clear();
      this.#fork_commit_callbacks.clear();
      batches.delete(this);
    }
register_created_effect(effect2) {
      this.#new_effects.push(effect2);
    }
    #commit() {
      for (const batch of batches) {
        var is_earlier = batch.id < this.id;
        var sources = [];
        for (const [source3, [value, is_derived]] of this.current) {
          if (batch.current.has(source3)) {
            var batch_value = (
batch.current.get(source3)[0]
            );
            if (is_earlier && value !== batch_value) {
              batch.current.set(source3, [value, is_derived]);
            } else {
              continue;
            }
          }
          sources.push(source3);
        }
        var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
        if (others.length === 0) {
          if (is_earlier) {
            batch.discard();
          }
        } else if (sources.length > 0) {
          if (is_earlier) {
            for (const unskipped of this.#unskipped_branches) {
              batch.unskip_effect(unskipped, (e) => {
                if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                  batch.schedule(e);
                } else {
                  batch.#defer_effects([e]);
                }
              });
            }
          }
          batch.activate();
          var marked = new Set();
          var checked = new Map();
          for (var source2 of sources) {
            mark_effects(source2, others, marked, checked);
          }
          checked = new Map();
          var current_unequal = [...batch.current.keys()].filter(
            (c) => this.current.has(c) ? (
this.current.get(c)[0] !== c
            ) : true
          );
          for (const effect2 of this.#new_effects) {
            if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
              if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                set_signal_status(effect2, DIRTY);
                batch.schedule(effect2);
              } else {
                batch.#dirty_effects.add(effect2);
              }
            }
          }
          if (batch.#roots.length > 0) {
            batch.apply();
            for (var root2 of batch.#roots) {
              batch.#traverse(root2, [], []);
            }
            batch.#roots = [];
          }
          batch.deactivate();
        }
      }
      for (const batch of batches) {
        if (batch.#blockers.has(this)) {
          batch.#blockers.delete(this);
          if (batch.#blockers.size === 0 && !batch.#is_deferred()) {
            batch.activate();
            batch.#process();
          }
        }
      }
    }
increment(blocking, effect2) {
      let pending_count = this.#pending.get(effect2) ?? 0;
      this.#pending.set(effect2, pending_count + 1);
      if (blocking) {
        let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
        this.#blocking_pending.set(effect2, blocking_pending_count + 1);
      }
    }
decrement(blocking, effect2, skip) {
      let pending_count = this.#pending.get(effect2) ?? 0;
      if (pending_count === 1) {
        this.#pending.delete(effect2);
      } else {
        this.#pending.set(effect2, pending_count - 1);
      }
      if (blocking) {
        let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
        if (blocking_pending_count === 1) {
          this.#blocking_pending.delete(effect2);
        } else {
          this.#blocking_pending.set(effect2, blocking_pending_count - 1);
        }
      }
      if (this.#decrement_queued || skip) return;
      this.#decrement_queued = true;
      queue_micro_task(() => {
        this.#decrement_queued = false;
        this.flush();
      });
    }
transfer_effects(dirty_effects, maybe_dirty_effects) {
      for (const e of dirty_effects) {
        this.#dirty_effects.add(e);
      }
      for (const e of maybe_dirty_effects) {
        this.#maybe_dirty_effects.add(e);
      }
      dirty_effects.clear();
      maybe_dirty_effects.clear();
    }
oncommit(fn) {
      this.#commit_callbacks.add(fn);
    }
ondiscard(fn) {
      this.#discard_callbacks.add(fn);
    }
on_fork_commit(fn) {
      this.#fork_commit_callbacks.add(fn);
    }
    run_fork_commit_callbacks() {
      for (const fn of this.#fork_commit_callbacks) fn(this);
      this.#fork_commit_callbacks.clear();
    }
    settled() {
      return (this.#deferred ??= deferred()).promise;
    }
    static ensure() {
      if (current_batch === null) {
        const batch = current_batch = new Batch();
        if (!is_processing) {
          batches.add(current_batch);
          {
            queue_micro_task(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
      }
      return current_batch;
    }
    apply() {
      {
        batch_values = null;
        return;
      }
    }
schedule(effect2) {
      last_scheduled_effect = effect2;
      if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
        effect2.b.defer_effect(effect2);
        return;
      }
      var e = effect2;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if (collected_effects !== null && e === active_effect) {
          if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && true) {
            return;
          }
        }
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            return;
          }
          e.f ^= CLEAN;
        }
      }
      this.#roots.push(e);
    }
  }
  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }
  let eager_block_effects = null;
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    var i = 0;
    while (i < length) {
      var effect2 = effects[i++];
      if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
        eager_block_effects = new Set();
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        }
        if (eager_block_effects?.size > 0) {
          old_values.clear();
          for (const e of eager_block_effects) {
            if ((e.f & (DESTROYED | INERT)) !== 0) continue;
            const ordered_effects = [e];
            let ancestor = e.parent;
            while (ancestor !== null) {
              if (eager_block_effects.has(ancestor)) {
                eager_block_effects.delete(ancestor);
                ordered_effects.push(ancestor);
              }
              ancestor = ancestor.parent;
            }
            for (let j = ordered_effects.length - 1; j >= 0; j--) {
              const e2 = ordered_effects[j];
              if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
              update_effect(e2);
            }
          }
          eager_block_effects.clear();
        }
      }
    }
    eager_block_effects = null;
  }
  function mark_effects(value, sources, marked, checked) {
    if (marked.has(value)) return;
    marked.add(value);
    if (value.reactions !== null) {
      for (const reaction of value.reactions) {
        const flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark_effects(
reaction,
            sources,
            marked,
            checked
          );
        } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
          set_signal_status(reaction, DIRTY);
          schedule_effect(
reaction
          );
        }
      }
    }
  }
  function depends_on(reaction, sources, checked) {
    const depends = checked.get(reaction);
    if (depends !== void 0) return depends;
    if (reaction.deps !== null) {
      for (const dep of reaction.deps) {
        if (includes.call(sources, dep)) {
          return true;
        }
        if ((dep.f & DERIVED) !== 0 && depends_on(
dep,
          sources,
          checked
        )) {
          checked.set(
dep,
            true
          );
          return true;
        }
      }
    }
    checked.set(reaction, false);
    return false;
  }
  function schedule_effect(effect2) {
    current_batch.schedule(effect2);
  }
  function reset_branch(effect2, tracked) {
    if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
      return;
    }
    if ((effect2.f & DIRTY) !== 0) {
      tracked.d.push(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      tracked.m.push(effect2);
    }
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_branch(e, tracked);
      e = e.next;
    }
  }
  function reset_all(effect2) {
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_all(e);
      e = e.next;
    }
  }
  function createSubscriber(start) {
    let subscribers = 0;
    let version = source(0);
    let stop;
    return () => {
      if (effect_tracking()) {
        get(version);
        render_effect(() => {
          if (subscribers === 0) {
            stop = untrack(() => start(() => increment(version)));
          }
          subscribers += 1;
          return () => {
            queue_micro_task(() => {
              subscribers -= 1;
              if (subscribers === 0) {
                stop?.();
                stop = void 0;
                increment(version);
              }
            });
          };
        });
      }
    };
  }
  var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
  function boundary(node, props, children, transform_error) {
    new Boundary(node, props, children, transform_error);
  }
  class Boundary {
parent;
    is_pending = false;
transform_error;
#anchor;
#hydrate_open = hydrating ? hydrate_node : null;
#props;
#children;
#effect;
#main_effect = null;
#pending_effect = null;
#failed_effect = null;
#offscreen_fragment = null;
    #local_pending_count = 0;
    #pending_count = 0;
    #pending_count_update_queued = false;
#dirty_effects = new Set();
#maybe_dirty_effects = new Set();
#effect_pending = null;
    #effect_pending_subscriber = createSubscriber(() => {
      this.#effect_pending = source(this.#local_pending_count);
      return () => {
        this.#effect_pending = null;
      };
    });
constructor(node, props, children, transform_error) {
      this.#anchor = node;
      this.#props = props;
      this.#children = (anchor) => {
        var effect2 = (
active_effect
        );
        effect2.b = this;
        effect2.f |= BOUNDARY_EFFECT;
        children(anchor);
      };
      this.parent =
active_effect.b;
      this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
      this.#effect = block(() => {
        if (hydrating) {
          const comment2 = (
this.#hydrate_open
          );
          hydrate_next();
          const server_rendered_pending = comment2.data === HYDRATION_START_ELSE;
          const server_rendered_failed = comment2.data.startsWith(HYDRATION_START_FAILED);
          if (server_rendered_failed) {
            const serialized_error = JSON.parse(comment2.data.slice(HYDRATION_START_FAILED.length));
            this.#hydrate_failed_content(serialized_error);
          } else if (server_rendered_pending) {
            this.#hydrate_pending_content();
          } else {
            this.#hydrate_resolved_content();
          }
        } else {
          this.#render();
        }
      }, flags);
      if (hydrating) {
        this.#anchor = hydrate_node;
      }
    }
    #hydrate_resolved_content() {
      try {
        this.#main_effect = branch(() => this.#children(this.#anchor));
      } catch (error) {
        this.error(error);
      }
    }
#hydrate_failed_content(error) {
      const failed = this.#props.failed;
      if (!failed) return;
      this.#failed_effect = branch(() => {
        failed(
          this.#anchor,
          () => error,
          () => () => {
          }
        );
      });
    }
    #hydrate_pending_content() {
      const pending = this.#props.pending;
      if (!pending) return;
      this.is_pending = true;
      this.#pending_effect = branch(() => pending(this.#anchor));
      queue_micro_task(() => {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        var anchor = create_text();
        fragment.append(anchor);
        this.#main_effect = this.#run(() => {
          return branch(() => this.#children(anchor));
        });
        if (this.#pending_count === 0) {
          this.#anchor.before(fragment);
          this.#offscreen_fragment = null;
          pause_effect(
this.#pending_effect,
            () => {
              this.#pending_effect = null;
            }
          );
          this.#resolve(
current_batch
          );
        }
      });
    }
    #render() {
      try {
        this.is_pending = this.has_pending_snippet();
        this.#pending_count = 0;
        this.#local_pending_count = 0;
        this.#main_effect = branch(() => {
          this.#children(this.#anchor);
        });
        if (this.#pending_count > 0) {
          var fragment = this.#offscreen_fragment = document.createDocumentFragment();
          move_effect(this.#main_effect, fragment);
          const pending = (
this.#props.pending
          );
          this.#pending_effect = branch(() => pending(this.#anchor));
        } else {
          this.#resolve(
current_batch
          );
        }
      } catch (error) {
        this.error(error);
      }
    }
#resolve(batch) {
      this.is_pending = false;
      batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
    }
defer_effect(effect2) {
      defer_effect(effect2, this.#dirty_effects, this.#maybe_dirty_effects);
    }
is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!this.#props.pending;
    }
#run(fn) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      var previous_ctx = component_context;
      set_active_effect(this.#effect);
      set_active_reaction(this.#effect);
      set_component_context(this.#effect.ctx);
      try {
        Batch.ensure();
        return fn();
      } catch (e) {
        handle_error(e);
        return null;
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
        set_component_context(previous_ctx);
      }
    }
#update_pending_count(d, batch) {
      if (!this.has_pending_snippet()) {
        if (this.parent) {
          this.parent.#update_pending_count(d, batch);
        }
        return;
      }
      this.#pending_count += d;
      if (this.#pending_count === 0) {
        this.#resolve(batch);
        if (this.#pending_effect) {
          pause_effect(this.#pending_effect, () => {
            this.#pending_effect = null;
          });
        }
        if (this.#offscreen_fragment) {
          this.#anchor.before(this.#offscreen_fragment);
          this.#offscreen_fragment = null;
        }
      }
    }
update_pending_count(d, batch) {
      this.#update_pending_count(d, batch);
      this.#local_pending_count += d;
      if (!this.#effect_pending || this.#pending_count_update_queued) return;
      this.#pending_count_update_queued = true;
      queue_micro_task(() => {
        this.#pending_count_update_queued = false;
        if (this.#effect_pending) {
          internal_set(this.#effect_pending, this.#local_pending_count);
        }
      });
    }
    get_effect_pending() {
      this.#effect_pending_subscriber();
      return get(
this.#effect_pending
      );
    }
error(error) {
      if (!this.#props.onerror && !this.#props.failed) {
        throw error;
      }
      if (current_batch?.is_fork) {
        if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
        if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
        if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
        current_batch.on_fork_commit(() => {
          this.#handle_error(error);
        });
      } else {
        this.#handle_error(error);
      }
    }
#handle_error(error) {
      if (this.#main_effect) {
        destroy_effect(this.#main_effect);
        this.#main_effect = null;
      }
      if (this.#pending_effect) {
        destroy_effect(this.#pending_effect);
        this.#pending_effect = null;
      }
      if (this.#failed_effect) {
        destroy_effect(this.#failed_effect);
        this.#failed_effect = null;
      }
      if (hydrating) {
        set_hydrate_node(
this.#hydrate_open
        );
        next();
        set_hydrate_node(skip_nodes());
      }
      var onerror = this.#props.onerror;
      let failed = this.#props.failed;
      var did_reset = false;
      var calling_on_error = false;
      const reset2 = () => {
        if (did_reset) {
          svelte_boundary_reset_noop();
          return;
        }
        did_reset = true;
        if (calling_on_error) {
          svelte_boundary_reset_onerror();
        }
        if (this.#failed_effect !== null) {
          pause_effect(this.#failed_effect, () => {
            this.#failed_effect = null;
          });
        }
        this.#run(() => {
          this.#render();
        });
      };
      const handle_error_result = (transformed_error) => {
        try {
          calling_on_error = true;
          onerror?.(transformed_error, reset2);
          calling_on_error = false;
        } catch (error2) {
          invoke_error_boundary(error2, this.#effect && this.#effect.parent);
        }
        if (failed) {
          this.#failed_effect = this.#run(() => {
            try {
              return branch(() => {
                var effect2 = (
active_effect
                );
                effect2.b = this;
                effect2.f |= BOUNDARY_EFFECT;
                failed(
                  this.#anchor,
                  () => transformed_error,
                  () => reset2
                );
              });
            } catch (error2) {
              invoke_error_boundary(
                error2,
this.#effect.parent
              );
              return null;
            }
          });
        }
      };
      queue_micro_task(() => {
        var result;
        try {
          result = this.transform_error(error);
        } catch (e) {
          invoke_error_boundary(e, this.#effect && this.#effect.parent);
          return;
        }
        if (result !== null && typeof result === "object" && typeof
result.then === "function") {
          result.then(
            handle_error_result,
(e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
          );
        } else {
          handle_error_result(result);
        }
      });
    }
  }
  function flatten(blockers, sync, async, fn) {
    const d = derived;
    var pending = blockers.filter((b) => !b.settled);
    if (async.length === 0 && pending.length === 0) {
      fn(sync.map(d));
      return;
    }
    var parent = (
active_effect
    );
    var restore = capture();
    var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
    function finish(values) {
      restore();
      try {
        fn(values);
      } catch (error) {
        if ((parent.f & DESTROYED) === 0) {
          invoke_error_boundary(error, parent);
        }
      }
      unset_context();
    }
    if (async.length === 0) {
      blocker_promise.then(() => finish(sync.map(d)));
      return;
    }
    var decrement_pending = increment_pending();
    function run() {
      Promise.all(async.map((expression) => async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(() => decrement_pending());
    }
    if (blocker_promise) {
      blocker_promise.then(() => {
        restore();
        run();
        unset_context();
      });
    } else {
      run();
    }
  }
  function capture() {
    var previous_effect = (
active_effect
    );
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;
    var previous_batch = (
current_batch
    );
    return function restore(activate_batch = true) {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
      if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
        previous_batch?.activate();
        previous_batch?.apply();
      }
    };
  }
  function unset_context(deactivate_batch = true) {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
    if (deactivate_batch) current_batch?.deactivate();
  }
  function increment_pending() {
    var effect2 = (
active_effect
    );
    var boundary2 = (
effect2.b
    );
    var batch = (
current_batch
    );
    var blocking = boundary2.is_rendered();
    boundary2.update_pending_count(1, batch);
    batch.increment(blocking, effect2);
    return (skip = false) => {
      boundary2.update_pending_count(-1, batch);
      batch.decrement(blocking, effect2, skip);
    };
  }
function derived(fn) {
    var flags2 = DERIVED | DIRTY;
    if (active_effect !== null) {
      active_effect.f |= EFFECT_PRESERVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags2,
      fn,
      reactions: null,
      rv: 0,
      v: (
UNINITIALIZED
      ),
      wv: 0,
      parent: active_effect,
      ac: null
    };
    return signal;
  }
function async_derived(fn, label, location) {
    let parent = (
active_effect
    );
    if (parent === null) {
      async_derived_orphan();
    }
    var promise = (

void 0
    );
    var signal = source(
UNINITIALIZED
    );
    var should_suspend = !active_reaction;
    var deferreds = new Map();
    async_effect(() => {
      var effect2 = (
active_effect
      );
      var d = deferred();
      promise = d.promise;
      try {
        Promise.resolve(fn()).then(d.resolve, d.reject).finally(unset_context);
      } catch (error) {
        d.reject(error);
        unset_context();
      }
      var batch = (
current_batch
      );
      if (should_suspend) {
        if ((effect2.f & REACTION_RAN) !== 0) {
          var decrement_pending = increment_pending();
        }
        if (
parent.b.is_rendered()
        ) {
          deferreds.get(batch)?.reject(STALE_REACTION);
          deferreds.delete(batch);
        } else {
          for (const d2 of deferreds.values()) {
            d2.reject(STALE_REACTION);
          }
          deferreds.clear();
        }
        deferreds.set(batch, d);
      }
      const handler = (value, error = void 0) => {
        if (decrement_pending) {
          var skip = error === STALE_REACTION;
          decrement_pending(skip);
        }
        if (error === STALE_REACTION || (effect2.f & DESTROYED) !== 0) {
          return;
        }
        batch.activate();
        if (error) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }
          internal_set(signal, value);
          for (const [b, d2] of deferreds) {
            deferreds.delete(b);
            if (b === batch) break;
            d2.reject(STALE_REACTION);
          }
        }
        batch.deactivate();
      };
      d.promise.then(handler, (e) => handler(null, e || "unknown"));
    });
    teardown(() => {
      for (const d of deferreds.values()) {
        d.reject(STALE_REACTION);
      }
    });
    return new Promise((fulfil) => {
      function next2(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            next2(promise);
          }
        }
        p.then(go, go);
      }
      next2(promise);
    });
  }
function user_derived(fn) {
    const d = derived(fn);
    push_reaction_value(d);
    return d;
  }
function derived_safe_equal(fn) {
    const signal = derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
effects[i]
        );
      }
    }
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    var parent = derived2.parent;
    if (!is_destroying_effect && parent !== null && (parent.f & (DESTROYED | INERT)) !== 0) {
      derived_inert();
      return derived2.v;
    }
    set_active_effect(parent);
    {
      try {
        derived2.f &= ~WAS_MARKED;
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
    if (!derived2.equals(value)) {
      derived2.wv = increment_write_version();
      if (!current_batch?.is_fork || derived2.deps === null) {
        if (current_batch !== null) {
          current_batch.capture(derived2, value, true);
        } else {
          derived2.v = value;
        }
        if (derived2.deps === null) {
          set_signal_status(derived2, CLEAN);
          return;
        }
      }
    }
    if (is_destroying_effect) {
      return;
    }
    if (batch_values !== null) {
      if (effect_tracking() || current_batch?.is_fork) {
        batch_values.set(derived2, value);
      }
    } else {
      update_derived_status(derived2);
    }
  }
  function freeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown || e.ac) {
        e.teardown?.();
        e.ac?.abort(STALE_REACTION);
        e.teardown = noop$1;
        e.ac = null;
        remove_reactions(e, 0);
        destroy_effect_children(e);
      }
    }
  }
  function unfreeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown) {
        update_effect(e);
      }
    }
  }
  let eager_effects = new Set();
  const old_values = new Map();
  let eager_effects_deferred = false;
  function source(v, stack) {
    var signal = {
      f: 0,
v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
function state(v, stack) {
    const s = source(v);
    push_reaction_value(s);
    return s;
  }
function mutable_source(initial_value, immutable = false, trackable = true) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null &&

(!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !includes.call(current_sources, source2))) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    return internal_set(source2, new_value, legacy_updates);
  }
  function internal_set(source2, value, updated_during_traversal = null) {
    if (!source2.equals(value)) {
      old_values.set(source2, is_destroying_effect ? value : source2.v);
      var batch = Batch.ensure();
      batch.capture(source2, value);
      if ((source2.f & DERIVED) !== 0) {
        const derived2 = (
source2
        );
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(derived2);
        }
        if (batch_values === null) {
          update_derived_status(derived2);
        }
      }
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY, updated_during_traversal);
      if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
      if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
        flush_eager_effects();
      }
    }
    return value;
  }
  function flush_eager_effects() {
    eager_effects_deferred = false;
    for (const effect2 of eager_effects) {
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (is_dirty(effect2)) {
        update_effect(effect2);
      }
    }
    eager_effects.clear();
  }
  function increment(source2) {
    set(source2, source2.v + 1);
  }
  function mark_reactions(signal, status, updated_during_traversal) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags2 = reaction.f;
      var not_dirty = (flags2 & DIRTY) === 0;
      if (not_dirty) {
        set_signal_status(reaction, status);
      }
      if ((flags2 & DERIVED) !== 0) {
        var derived2 = (
reaction
        );
        batch_values?.delete(derived2);
        if ((flags2 & WAS_MARKED) === 0) {
          if (flags2 & CONNECTED && (active_effect === null || (active_effect.f & REACTION_IS_UPDATING) === 0)) {
            reaction.f |= WAS_MARKED;
          }
          mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
        }
      } else if (not_dirty) {
        var effect2 = (
reaction
        );
        if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
          eager_block_effects.add(effect2);
        }
        if (updated_during_traversal !== null) {
          updated_during_traversal.push(effect2);
        } else {
          schedule_effect(effect2);
        }
      }
    }
  }
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = new Map();
    var is_proxied_array = is_array(value);
    var version = state(0);
    var parent_version = update_version;
    var with_parent = (fn) => {
      if (update_version === parent_version) {
        return fn();
      }
      var reaction = active_reaction;
      var version2 = update_version;
      set_active_reaction(null);
      set_update_version(parent_version);
      var result = fn();
      set_active_reaction(reaction);
      set_update_version(version2);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", state(
value.length
      ));
    }
    return new Proxy(
value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            with_parent(() => {
              var s2 = state(descriptor.value);
              sources.set(prop2, s2);
              return s2;
            });
          } else {
            set(s, descriptor.value, true);
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              const s2 = with_parent(() => state(UNINITIALIZED));
              sources.set(prop2, s2);
              increment(version);
            }
          } else {
            set(s, UNINITIALIZED);
            increment(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
            s = with_parent(() => {
              var p = proxy(exists ? target[prop2] : UNINITIALIZED);
              var s2 = state(p);
              return s2;
            });
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
            var value2 = source2?.v;
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
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
            if (s === void 0) {
              s = with_parent(() => {
                var p = has ? proxy(target[prop2]) : UNINITIALIZED;
                var s2 = state(p);
                return s2;
              });
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
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i <
s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => state(UNINITIALIZED));
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || get_descriptor(target, prop2)?.writable) {
              s = with_parent(() => state(void 0));
              set(s, proxy(value2));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            var p = with_parent(() => proxy(value2));
            set(s, p);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor?.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            increment(version);
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
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype.__click = void 0;
      element_prototype.__className = void 0;
      element_prototype.__attributes = null;
      element_prototype.__style = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype.__t = void 0;
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
function get_first_child(node) {
    return (
first_child_getter.call(node)
    );
  }
function get_next_sibling(node) {
    return (
next_sibling_getter.call(node)
    );
  }
  function child(node, is_text) {
    if (!hydrating) {
      return get_first_child(node);
    }
    var child2 = get_first_child(hydrate_node);
    if (child2 === null) {
      child2 = hydrate_node.appendChild(create_text());
    } else if (is_text && child2.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      child2?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    if (is_text) {
      merge_text_nodes(
child2
      );
    }
    set_hydrate_node(child2);
    return child2;
  }
  function first_child(node, is_text = false) {
    if (!hydrating) {
      var first = get_first_child(node);
      if (first instanceof Comment && first.data === "") return get_next_sibling(first);
      return first;
    }
    if (is_text) {
      if (hydrate_node?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        hydrate_node?.before(text2);
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
hydrate_node
      );
    }
    return hydrate_node;
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = hydrating ? hydrate_node : node;
    var last_sibling;
    while (count--) {
      last_sibling = next_sibling;
      next_sibling =

get_next_sibling(next_sibling);
    }
    if (!hydrating) {
      return next_sibling;
    }
    if (is_text) {
      if (next_sibling?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        if (next_sibling === null) {
          last_sibling?.after(text2);
        } else {
          next_sibling.before(text2);
        }
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
next_sibling
      );
    }
    set_hydrate_node(next_sibling);
    return next_sibling;
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  function create_element(tag, namespace, is) {
    let options = void 0;
    return (
document.createElementNS(namespace ?? NAMESPACE_HTML, tag, options)
    );
  }
  function merge_text_nodes(text2) {
    if (
text2.nodeValue.length < 65536
    ) {
      return;
    }
    let next2 = text2.nextSibling;
    while (next2 !== null && next2.nodeType === TEXT_NODE) {
      next2.remove();
      text2.nodeValue +=
next2.nodeValue;
      next2 = text2.nextSibling;
    }
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
  function validate_effect(rune) {
    if (active_effect === null) {
      if (active_reaction === null) {
        effect_orphan();
      }
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
  function create_effect(type, fn) {
    var parent = active_effect;
    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes: null,
      f: type | DIRTY | CONNECTED,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    current_batch?.register_created_effect(effect2);
    var e = effect2;
    if ((type & EFFECT) !== 0) {
      if (collected_effects !== null) {
        collected_effects.push(effect2);
      } else {
        Batch.ensure().schedule(effect2);
      }
    } else if (fn !== null) {
      try {
        update_effect(effect2);
      } catch (e2) {
        destroy_effect(effect2);
        throw e2;
      }
      if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last &&
(e.f & EFFECT_PRESERVED) === 0) {
        e = e.first;
        if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
          e.f |= EFFECT_TRANSPARENT;
        }
      }
    }
    if (e !== null) {
      e.parent = parent;
      if (parent !== null) {
        push_effect(e, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived2 = (
active_reaction
        );
        (derived2.effects ??= []).push(e);
      }
    }
    return effect2;
  }
  function effect_tracking() {
    return active_reaction !== null && !untracking;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var flags2 = (
active_effect.f
    );
    var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & REACTION_RAN) === 0;
    if (defer) {
      var context = (
component_context
      );
      (context.e ??= []).push(fn);
    } else {
      return create_user_effect(fn);
    }
  }
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn);
  }
  function component_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
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
    return create_effect(EFFECT, fn);
  }
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn);
  }
  function render_effect(fn, flags2 = 0) {
    return create_effect(RENDER_EFFECT | flags2, fn);
  }
  function template_effect(fn, sync = [], async = [], blockers = []) {
    flatten(blockers, sync, async, (values) => {
      create_effect(RENDER_EFFECT, () => fn(...values.map(get)));
    });
  }
  function block(fn, flags2 = 0) {
    var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
    return effect2;
  }
  function branch(fn) {
    return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
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
      const controller = effect2.ac;
      if (controller !== null) {
        without_reactive_context(() => {
          controller.abort(STALE_REACTION);
        });
      }
      var next2 = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
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
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
      remove_effect_dom(
        effect2.nodes.start,
effect2.nodes.end
      );
      removed = true;
    }
    set_signal_status(effect2, DESTROYING);
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    var transitions = effect2.nodes && effect2.nodes.t;
    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }
    execute_effect_teardown(effect2);
    effect2.f ^= DESTROYING;
    effect2.f |= DESTROYED;
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next2 = node === end ? null : get_next_sibling(node);
      node.remove();
      node = next2;
    }
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
  function pause_effect(effect2, callback, destroy = true) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    var fn = () => {
      if (destroy) destroy_effect(effect2);
      if (callback) callback();
    };
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
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      if ((child2.f & ROOT_EFFECT) === 0) {
        var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 ||


(child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
        pause_children(child2, transitions, transparent ? local : false);
      }
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
      set_signal_status(effect2, DIRTY);
      Batch.ensure().schedule(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }
  function move_effect(effect2, fragment) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    while (node !== null) {
      var next2 = node === end ? null : get_next_sibling(node);
      fragment.append(node);
      node = next2;
    }
  }
  let is_updating_effect = false;
  let is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let current_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && true) {
      if (current_sources === null) {
        current_sources = [value];
      } else {
        current_sources.push(value);
      }
    }
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let update_version = read_version;
  function set_update_version(value) {
    update_version = value;
  }
  function increment_write_version() {
    return ++write_version;
  }
  function is_dirty(reaction) {
    var flags2 = reaction.f;
    if ((flags2 & DIRTY) !== 0) {
      return true;
    }
    if (flags2 & DERIVED) {
      reaction.f &= ~WAS_MARKED;
    }
    if ((flags2 & MAYBE_DIRTY) !== 0) {
      var dependencies = (
reaction.deps
      );
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        var dependency = dependencies[i];
        if (is_dirty(
dependency
        )) {
          update_derived(
dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
      if ((flags2 & CONNECTED) !== 0 &&

batch_values === null) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    if (current_sources !== null && includes.call(current_sources, signal)) {
      return;
    }
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
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
reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;
    var flags2 = reaction.f;
    new_deps =
null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;
    if (reaction.ac !== null) {
      without_reactive_context(() => {
        reaction.ac.abort(STALE_REACTION);
      });
      reaction.ac = null;
    }
    try {
      reaction.f |= REACTION_IS_UPDATING;
      var fn = (
reaction.fn
      );
      var result = fn();
      reaction.f |= REACTION_RAN;
      var deps = reaction.deps;
      var is_fork = current_batch?.is_fork;
      if (new_deps !== null) {
        var i;
        if (!is_fork) {
          remove_reactions(reaction, skipped_deps);
        }
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
          for (i = skipped_deps; i < deps.length; i++) {
            (deps[i].reactions ??= []).push(reaction);
          }
        }
      } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i <
untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (previous_reaction.deps !== null) {
          for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
            previous_reaction.deps[i2].rv = read_version;
          }
        }
        if (previous_deps !== null) {
          for (const dep of previous_deps) {
            dep.rv = read_version;
          }
        }
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(...
untracked_writes);
          }
        }
      }
      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }
      return result;
    } catch (error) {
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
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
    if (reactions === null && (dependency.f & DERIVED) !== 0 &&


(new_deps === null || !includes.call(new_deps, dependency))) {
      var derived2 = (
dependency
      );
      if ((derived2.f & CONNECTED) !== 0) {
        derived2.f ^= CONNECTED;
        derived2.f &= ~WAS_MARKED;
      }
      if (derived2.v !== UNINITIALIZED) {
        update_derived_status(derived2);
      }
      freeze_derived_effects(derived2);
      remove_reactions(derived2, 0);
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
    var flags2 = effect2.f;
    if ((flags2 & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var was_updating_effect = is_updating_effect;
    active_effect = effect2;
    is_updating_effect = true;
    try {
      if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
    }
  }
  function get(signal) {
    var flags2 = signal.f;
    var is_derived = (flags2 & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
      if (!destroyed && (current_sources === null || !includes.call(current_sources, signal))) {
        var deps = active_reaction.deps;
        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          if (signal.rv < read_version) {
            signal.rv = read_version;
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else {
              new_deps.push(signal);
            }
          }
        } else {
          (active_reaction.deps ??= []).push(signal);
          var reactions = signal.reactions;
          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!includes.call(reactions, active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    }
    if (is_destroying_effect && old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      var derived2 = (
signal
      );
      if (is_destroying_effect) {
        var value = derived2.v;
        if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
          value = execute_derived(derived2);
        }
        old_values.set(derived2, value);
        return value;
      }
      var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
      var is_new = (derived2.f & REACTION_RAN) === 0;
      if (is_dirty(derived2)) {
        if (should_connect) {
          derived2.f |= CONNECTED;
        }
        update_derived(derived2);
      }
      if (should_connect && !is_new) {
        unfreeze_derived_effects(derived2);
        reconnect(derived2);
      }
    }
    if (batch_values?.has(signal)) {
      return batch_values.get(signal);
    }
    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }
    return signal.v;
  }
  function reconnect(derived2) {
    derived2.f |= CONNECTED;
    if (derived2.deps === null) return;
    for (const dep of derived2.deps) {
      (dep.reactions ??= []).push(derived2);
      if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
        unfreeze_derived_effects(
dep
        );
        reconnect(
dep
        );
      }
    }
  }
  function depends_on_old_values(derived2) {
    if (derived2.v === UNINITIALIZED) return true;
    if (derived2.deps === null) return false;
    for (const dep of derived2.deps) {
      if (old_values.has(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
dep
      )) {
        return true;
      }
    }
    return false;
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
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  const event_symbol = Symbol("events");
  const all_registered_events = new Set();
  const root_event_handles = new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler?.call(this, event2);
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
  function event(event_name, dom, handler, capture2, passive) {
    var options = { capture: capture2, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body ||
dom === window ||
dom === document ||
dom instanceof HTMLMediaElement) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegated(event_name, element, handler) {
    (element[event_symbol] ??= {})[event_name] = handler;
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  let last_propagated_event = null;
  function handle_event_propagation(event2) {
    var handler_element = this;
    var owner_document = (
handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = event2.composedPath?.() || [];
    var current_target = (
path[0] || event2.target
    );
    last_propagated_event = event2;
    var path_idx = 0;
    var handled_at = last_propagated_event === event2 && event2[event_symbol];
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element ===
window)) {
        event2[event_symbol] = handler_element;
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
    current_target =
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
        var parent_element = current_target.assignedSlot || current_target.parentNode ||
current_target.host || null;
        try {
          var delegated2 = current_target[event_symbol]?.[event_name];
          if (delegated2 != null && (!
current_target.disabled ||

event2.target === current_target)) {
            delegated2.call(current_target, event2);
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
      event2[event_symbol] = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const policy = (
globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
createHTML: (html2) => {
        return html2;
      }
    })
  );
  function create_trusted_html(html2) {
    return (
policy?.createHTML(html2) ?? html2
    );
  }
  function create_fragment_from_html(html2) {
    var elem = create_element("template");
    elem.innerHTML = create_trusted_html(html2.replaceAll("<!>", "<!---->"));
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
active_effect
    );
    if (effect2.nodes === null) {
      effect2.nodes = { start, end, a: null, t: null };
    }
  }
function from_html(content, flags2) {
    var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node =

get_first_child(node);
      }
      var clone = (
use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (

get_first_child(clone)
        );
        var end = (
clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function text(value = "") {
    if (!hydrating) {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
    var node = hydrate_node;
    if (node.nodeType !== TEXT_NODE) {
      node.before(node = create_text());
      set_hydrate_node(node);
    } else {
      merge_text_nodes(
node
      );
    }
    assign_nodes(node, node);
    return node;
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
      var effect2 = (
active_effect
      );
      if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
        effect2.nodes.end = hydrate_node;
      }
      hydrate_next();
      return;
    }
    if (anchor === null) {
      return;
    }
    anchor.before(
dom
    );
  }
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
    if (str !== (text2.__t ??= text2.nodeValue)) {
      text2.__t = str;
      text2.nodeValue = `${str}`;
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
      var anchor = get_first_child(target);
      while (anchor && (anchor.nodeType !== COMMENT_NODE ||
anchor.data !== HYDRATION_START)) {
        anchor = get_next_sibling(anchor);
      }
      if (!anchor) {
        throw HYDRATION_ERROR;
      }
      set_hydrating(true);
      set_hydrate_node(
anchor
      );
      const instance = _mount(component, { ...options, anchor });
      set_hydrating(false);
      return (
instance
      );
    } catch (error) {
      if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
        throw error;
      }
      if (error !== HYDRATION_ERROR) {
        console.warn("Failed to hydrate: ", error);
      }
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component, options);
    } finally {
      set_hydrating(was_hydrating);
      set_hydrate_node(previous_hydrate_node);
    }
  }
  const listeners = new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
    init_operations();
    var component = void 0;
    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      boundary(
anchor_node,
        {
          pending: () => {
          }
        },
        (anchor_node2) => {
          push({});
          var ctx = (
component_context
          );
          if (context) ctx.c = context;
          if (events) {
            props.$$events = events;
          }
          if (hydrating) {
            assign_nodes(
anchor_node2,
              null
            );
          }
          component = Component(anchor_node2, props) || {};
          if (hydrating) {
            active_effect.nodes.end = hydrate_node;
            if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE ||
hydrate_node.data !== HYDRATION_END) {
              hydration_mismatch();
              throw HYDRATION_ERROR;
            }
          }
          pop();
        },
        transformError
      );
      var registered_events = new Set();
      var event_handle = (events2) => {
        for (var i = 0; i < events2.length; i++) {
          var event_name = events2[i];
          if (registered_events.has(event_name)) continue;
          registered_events.add(event_name);
          var passive = is_passive_event(event_name);
          for (const node of [target, document]) {
            var counts = listeners.get(node);
            if (counts === void 0) {
              counts = new Map();
              listeners.set(node, counts);
            }
            var count = counts.get(event_name);
            if (count === void 0) {
              node.addEventListener(event_name, handle_event_propagation, { passive });
              counts.set(event_name, 1);
            } else {
              counts.set(event_name, count + 1);
            }
          }
        }
      };
      event_handle(array_from(all_registered_events));
      root_event_handles.add(event_handle);
      return () => {
        for (var event_name of registered_events) {
          for (const node of [target, document]) {
            var counts = (
listeners.get(node)
            );
            var count = (
counts.get(event_name)
            );
            if (--count == 0) {
              node.removeEventListener(event_name, handle_event_propagation);
              counts.delete(event_name);
              if (counts.size === 0) {
                listeners.delete(node);
              }
            } else {
              counts.set(event_name, count);
            }
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          anchor_node.parentNode?.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = new WeakMap();
  class BranchManager {
anchor;
#batches = new Map();
#onscreen = new Map();
#offscreen = new Map();
#outroing = new Set();
#transition = true;
constructor(anchor, transition = true) {
      this.anchor = anchor;
      this.#transition = transition;
    }
#commit = (batch) => {
      if (!this.#batches.has(batch)) return;
      var key = (
this.#batches.get(batch)
      );
      var onscreen = this.#onscreen.get(key);
      if (onscreen) {
        resume_effect(onscreen);
        this.#outroing.delete(key);
      } else {
        var offscreen = this.#offscreen.get(key);
        if (offscreen) {
          this.#onscreen.set(key, offscreen.effect);
          this.#offscreen.delete(key);
          offscreen.fragment.lastChild.remove();
          this.anchor.before(offscreen.fragment);
          onscreen = offscreen.effect;
        }
      }
      for (const [b, k] of this.#batches) {
        this.#batches.delete(b);
        if (b === batch) {
          break;
        }
        const offscreen2 = this.#offscreen.get(k);
        if (offscreen2) {
          destroy_effect(offscreen2.effect);
          this.#offscreen.delete(k);
        }
      }
      for (const [k, effect2] of this.#onscreen) {
        if (k === key || this.#outroing.has(k)) continue;
        const on_destroy = () => {
          const keys = Array.from(this.#batches.values());
          if (keys.includes(k)) {
            var fragment = document.createDocumentFragment();
            move_effect(effect2, fragment);
            fragment.append(create_text());
            this.#offscreen.set(k, { effect: effect2, fragment });
          } else {
            destroy_effect(effect2);
          }
          this.#outroing.delete(k);
          this.#onscreen.delete(k);
        };
        if (this.#transition || !onscreen) {
          this.#outroing.add(k);
          pause_effect(effect2, on_destroy, false);
        } else {
          on_destroy();
        }
      }
    };
#discard = (batch) => {
      this.#batches.delete(batch);
      const keys = Array.from(this.#batches.values());
      for (const [k, branch2] of this.#offscreen) {
        if (!keys.includes(k)) {
          destroy_effect(branch2.effect);
          this.#offscreen.delete(k);
        }
      }
    };
ensure(key, fn) {
      var batch = (
current_batch
      );
      if (fn && !this.#onscreen.has(key) && !this.#offscreen.has(key)) {
        {
          this.#onscreen.set(
            key,
            branch(() => fn(this.anchor))
          );
        }
      }
      this.#batches.set(batch, key);
      {
        if (hydrating) {
          this.anchor = hydrate_node;
        }
        this.#commit(batch);
      }
    }
  }
  function if_block(node, fn, elseif = false) {
    var marker;
    if (hydrating) {
      marker = hydrate_node;
      hydrate_next();
    }
    var branches = new BranchManager(node);
    var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
    function update_branch(key, fn2) {
      if (hydrating) {
        var data = read_hydration_instruction(
marker
        );
        if (key !== parseInt(data.substring(1))) {
          var anchor = skip_nodes();
          set_hydrate_node(anchor);
          branches.anchor = anchor;
          set_hydrating(false);
          branches.ensure(key, fn2);
          set_hydrating(true);
          return;
        }
      }
      branches.ensure(key, fn2);
    }
    block(() => {
      var has_branch = false;
      fn((fn2, key = 0) => {
        has_branch = true;
        update_branch(key, fn2);
      });
      if (!has_branch) {
        update_branch(-1, null);
      }
    }, flags2);
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state2, to_destroy, controlled_anchor) {
    var transitions = [];
    var length = to_destroy.length;
    var group;
    var remaining = to_destroy.length;
    for (var i = 0; i < length; i++) {
      let effect2 = to_destroy[i];
      pause_effect(
        effect2,
        () => {
          if (group) {
            group.pending.delete(effect2);
            group.done.add(effect2);
            if (group.pending.size === 0) {
              var groups = (
state2.outrogroups
              );
              destroy_effects(state2, array_from(group.done));
              groups.delete(group);
              if (groups.size === 0) {
                state2.outrogroups = null;
              }
            }
          } else {
            remaining -= 1;
          }
        },
        false
      );
    }
    if (remaining === 0) {
      var fast_path = transitions.length === 0 && controlled_anchor !== null;
      if (fast_path) {
        var anchor = (
controlled_anchor
        );
        var parent_node = (
anchor.parentNode
        );
        clear_text_content(parent_node);
        parent_node.append(anchor);
        state2.items.clear();
      }
      destroy_effects(state2, to_destroy, !fast_path);
    } else {
      group = {
        pending: new Set(to_destroy),
        done: new Set()
      };
      (state2.outrogroups ??= new Set()).add(group);
    }
  }
  function destroy_effects(state2, to_destroy, remove_dom = true) {
    var preserved_effects;
    if (state2.pending.size > 0) {
      preserved_effects = new Set();
      for (const keys of state2.pending.values()) {
        for (const key of keys) {
          preserved_effects.add(
state2.items.get(key).e
          );
        }
      }
    }
    for (var i = 0; i < to_destroy.length; i++) {
      var e = to_destroy[i];
      if (preserved_effects?.has(e)) {
        e.f |= EFFECT_OFFSCREEN;
        const fragment = document.createDocumentFragment();
        move_effect(e, fragment);
      } else {
        destroy_effect(to_destroy[i], remove_dom);
      }
    }
  }
  var offscreen_anchor;
  function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var items = new Map();
    var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
node
      );
      anchor = hydrating ? set_hydrate_node( get_first_child(parent_node)) : parent_node.appendChild(create_text());
    }
    if (hydrating) {
      hydrate_next();
    }
    var fallback = null;
    var each_array = derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    var array;
    var pending = new Map();
    var first_run = true;
    function commit(batch) {
      if ((state2.effect.f & DESTROYED) !== 0) {
        return;
      }
      state2.pending.delete(batch);
      state2.fallback = fallback;
      reconcile(state2, array, anchor, flags2, get_key);
      if (fallback !== null) {
        if (array.length === 0) {
          if ((fallback.f & EFFECT_OFFSCREEN) === 0) {
            resume_effect(fallback);
          } else {
            fallback.f ^= EFFECT_OFFSCREEN;
            move(fallback, null, anchor);
          }
        } else {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
    }
    var effect2 = block(() => {
      array =
get(each_array);
      var length = array.length;
      let mismatch = false;
      if (hydrating) {
        var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
        if (is_else !== (length === 0)) {
          anchor = skip_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
        }
      }
      var keys = new Set();
      var batch = (
current_batch
      );
      for (var index2 = 0; index2 < length; index2 += 1) {
        if (hydrating && hydrate_node.nodeType === COMMENT_NODE &&
hydrate_node.data === HYDRATION_END) {
          anchor =
hydrate_node;
          mismatch = true;
          set_hydrating(false);
        }
        var value = array[index2];
        var key = get_key(value, index2);
        var item = first_run ? null : items.get(key);
        if (item) {
          if (item.v) internal_set(item.v, value);
          if (item.i) internal_set(item.i, index2);
        } else {
          item = create_item(
            items,
            first_run ? anchor : offscreen_anchor ??= create_text(),
            value,
            key,
            index2,
            render_fn,
            flags2,
            get_collection
          );
          if (!first_run) {
            item.e.f |= EFFECT_OFFSCREEN;
          }
          items.set(key, item);
        }
        keys.add(key);
      }
      if (length === 0 && fallback_fn && !fallback) {
        if (first_run) {
          fallback = branch(() => fallback_fn(anchor));
        } else {
          fallback = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
          fallback.f |= EFFECT_OFFSCREEN;
        }
      }
      if (length > keys.size) {
        {
          each_key_duplicate();
        }
      }
      if (hydrating && length > 0) {
        set_hydrate_node(skip_nodes());
      }
      if (!first_run) {
        pending.set(batch, keys);
        {
          commit(batch);
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
      get(each_array);
    });
    var state2 = { effect: effect2, items, pending, outrogroups: null, fallback };
    first_run = false;
    if (hydrating) {
      anchor = hydrate_node;
    }
  }
  function skip_to_branch(effect2) {
    while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
      effect2 = effect2.next;
    }
    return effect2;
  }
  function reconcile(state2, array, anchor, flags2, get_key) {
    var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
    var length = array.length;
    var items = state2.items;
    var current = skip_to_branch(state2.effect.first);
    var seen;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var effect2;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        effect2 =
items.get(key).e;
        if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
          effect2.nodes?.a?.measure();
          (to_animate ??= new Set()).add(effect2);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      effect2 =
items.get(key).e;
      if (state2.outrogroups !== null) {
        for (const group of state2.outrogroups) {
          group.pending.delete(effect2);
          group.done.delete(effect2);
        }
      }
      if ((effect2.f & INERT) !== 0) {
        resume_effect(effect2);
        if (is_animated) {
          effect2.nodes?.a?.unfix();
          (to_animate ??= new Set()).delete(effect2);
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
        effect2.f ^= EFFECT_OFFSCREEN;
        if (effect2 === current) {
          move(effect2, null, anchor);
        } else {
          var next2 = prev ? prev.next : current;
          if (effect2 === state2.effect.last) {
            state2.effect.last = effect2.prev;
          }
          if (effect2.prev) effect2.prev.next = effect2.next;
          if (effect2.next) effect2.next.prev = effect2.prev;
          link(state2, prev, effect2);
          link(state2, effect2, next2);
          move(effect2, next2, anchor);
          prev = effect2;
          matched = [];
          stashed = [];
          current = skip_to_branch(prev.next);
          continue;
        }
      }
      if (effect2 !== current) {
        if (seen !== void 0 && seen.has(effect2)) {
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
            seen.delete(effect2);
            move(effect2, current, anchor);
            link(state2, effect2.prev, effect2.next);
            link(state2, effect2, prev === null ? state2.effect.first : prev.next);
            link(state2, prev, effect2);
            prev = effect2;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current !== effect2) {
          (seen ??= new Set()).add(current);
          stashed.push(current);
          current = skip_to_branch(current.next);
        }
        if (current === null) {
          continue;
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        matched.push(effect2);
      }
      prev = effect2;
      current = skip_to_branch(effect2.next);
    }
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        if (group.pending.size === 0) {
          destroy_effects(state2, array_from(group.done));
          state2.outrogroups?.delete(group);
        }
      }
      if (state2.outrogroups.size === 0) {
        state2.outrogroups = null;
      }
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = [];
      if (seen !== void 0) {
        for (effect2 of seen) {
          if ((effect2.f & INERT) === 0) {
            to_destroy.push(effect2);
          }
        }
      }
      while (current !== null) {
        if ((current.f & INERT) === 0 && current !== state2.fallback) {
          to_destroy.push(current);
        }
        current = skip_to_branch(current.next);
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].nodes?.a?.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].nodes?.a?.fix();
          }
        }
        pause_effects(state2, to_destroy, controlled_anchor);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        if (to_animate === void 0) return;
        for (effect2 of to_animate) {
          effect2.nodes?.a?.apply();
        }
      });
    }
  }
  function create_item(items, anchor, value, key, index2, render_fn, flags2, get_collection) {
    var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
    var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
    return {
      v,
      i,
      e: branch(() => {
        render_fn(anchor, v ?? value, i ?? index2, get_collection);
        return () => {
          items.delete(key);
        };
      })
    };
  }
  function move(effect2, next2, anchor) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
next2.nodes.start
    ) : anchor;
    while (node !== null) {
      var next_node = (

get_next_sibling(node)
      );
      dest.before(node);
      if (node === end) {
        return;
      }
      node = next_node;
    }
  }
  function link(state2, prev, next2) {
    if (prev === null) {
      state2.effect.first = next2;
    } else {
      prev.next = next2;
    }
    if (next2 === null) {
      state2.effect.last = prev;
    } else {
      next2.prev = prev;
    }
  }
  function html(node, get_value, is_controlled = false, svg = false, mathml = false, skip_warning = false) {
    var anchor = node;
    var value = "";
    if (is_controlled) {
      var parent_node = (
node
      );
      if (hydrating) {
        anchor = set_hydrate_node( get_first_child(parent_node));
      }
    }
    template_effect(() => {
      var effect2 = (
active_effect
      );
      if (value === (value = get_value() ?? "")) {
        if (hydrating) hydrate_next();
        return;
      }
      if (is_controlled && !hydrating) {
        effect2.nodes = null;
        parent_node.innerHTML =
value;
        if (value !== "") {
          assign_nodes(

get_first_child(parent_node),
parent_node.lastChild
          );
        }
        return;
      }
      if (effect2.nodes !== null) {
        remove_effect_dom(
          effect2.nodes.start,
effect2.nodes.end
        );
        effect2.nodes = null;
      }
      if (value === "") return;
      if (hydrating) {
        hydrate_node.data;
        var next2 = hydrate_next();
        var last = next2;
        while (next2 !== null && (next2.nodeType !== COMMENT_NODE ||
next2.data !== "")) {
          last = next2;
          next2 = get_next_sibling(next2);
        }
        if (next2 === null) {
          hydration_mismatch();
          throw HYDRATION_ERROR;
        }
        assign_nodes(hydrate_node, last);
        anchor = set_hydrate_node(next2);
        return;
      }
      var ns = svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0;
      var wrapper = (
create_element(svg ? "svg" : mathml ? "math" : "template", ns)
      );
      wrapper.innerHTML =
value;
      var node2 = svg || mathml ? wrapper : (
wrapper.content
      );
      assign_nodes(

get_first_child(node2),
node2.lastChild
      );
      if (svg || mathml) {
        while ( get_first_child(node2)) {
          anchor.before(

get_first_child(node2)
          );
        }
      } else {
        anchor.before(node2);
      }
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
  function to_class(value, hash, directives) {
    var classname = value == null ? "" : "" + value;
    if (hash) {
      classname = classname ? classname + " " + hash : hash;
    }
    return classname === "" ? null : classname;
  }
  function append_styles(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css = "";
    for (var key of Object.keys(styles)) {
      var value = styles[key];
      if (value != null && value !== "") {
        css += " " + key + ": " + value + separator;
      }
    }
    return css;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (normal_styles) {
        new_style += append_styles(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return String(value);
  }
  function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
    var prev = dom.__className;
    if (hydrating || prev !== value || prev === void 0) {
      var next_class_name = to_class(value, hash);
      if (!hydrating || next_class_name !== dom.getAttribute("class")) {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else {
          dom.className = next_class_name;
        }
      }
      dom.__className = value;
    }
    return next_classes;
  }
  function update_styles(dom, prev = {}, next2, priority) {
    for (var key in next2) {
      var value = next2[key];
      if (prev[key] !== value) {
        if (next2[key] == null) {
          dom.style.removeProperty(key);
        } else {
          dom.style.setProperty(key, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev = dom.__style;
    if (hydrating || prev !== value) {
      var next_style_attr = to_style(value, next_styles);
      if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom.__style = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles?.[0], next_styles[0]);
        update_styles(dom, prev_styles?.[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }
  const IS_CUSTOM_ELEMENT = Symbol("is custom element");
  const IS_HTML = Symbol("is html");
  const LINK_TAG = IS_XHTML ? "link" : "LINK";
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = get_attributes(element);
    if (hydrating) {
      attributes[attribute] = element.getAttribute(attribute);
      if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === LINK_TAG) {
        return;
      }
    }
    if (attributes[attribute] === (attributes[attribute] = value)) return;
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
  function get_attributes(element) {
    return (

element.__attributes ??= {
        [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
        [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
      }
    );
  }
  var setters_cache = new Map();
  function get_setters(element) {
    var cache_key = element.getAttribute("is") || element.nodeName;
    var setters = setters_cache.get(cache_key);
    if (setters) return setters;
    setters_cache.set(cache_key, setters = []);
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
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    var component_effect = (
component_context.r
    );
    var parent = (
active_effect
    );
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
        let p = parent;
        while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
          p = p.parent;
        }
        const teardown2 = () => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        };
        const original_teardown = p.teardown;
        p.teardown = () => {
          teardown2();
          original_teardown?.();
        };
      };
    });
    return element_or_component;
  }
  function prop(props, key, flags2, fallback) {
    var fallback_value = (
fallback
    );
    var fallback_dirty = true;
    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;
        fallback_value =
fallback;
      }
      return fallback_value;
    };
    var initial_value;
    {
      initial_value =
props[key];
    }
    if (initial_value === void 0 && fallback !== void 0) {
      initial_value = get_fallback();
    }
    var getter;
    {
      getter = () => {
        var value = (
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
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component();
    }
    {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
cleanup
        );
      });
    }
  }
  const appCss = ":root{--clue-depth-bottom: #000088;--clue-depth-left: #0000ee;--clue-depth-right: #000099;--clue-depth-top: #0000ff}#content{max-width:unset;min-width:unset}";
  importCSS(appCss);
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined") {
    ((window.__svelte ??= {}).v ??= new Set()).add(PUBLIC_VERSION);
  }
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
      response: { correctResponse: "", comments: [], responders: [] },
      dailyDoubleWager: null,
      finalJeopardyResponses: []
    }
  });
  function showModal(clue) {
    clueDisplay.show = true;
    if (clue.dailyDouble) {
      clueDisplay.state = ClueDisplayStates.DailyDouble;
    } else {
      clueDisplay.state = ClueDisplayStates.Clue;
    }
    clueDisplay.clue = clue;
  }
  var root_1$4 = from_html(`<div class="order_text svelte-10i3dmb"> </div> <div class="value_text svelte-10i3dmb"> </div>`, 1);
  var root$4 = from_html(`<button class="clue_cell svelte-10i3dmb"><!></button>`);
  function ClueCell($$anchor, $$props) {
    push($$props, true);
    var button = root$4();
    let styles;
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        const clueData = user_derived(() => $$props.clue);
        var fragment = root_1$4();
        var div = first_child(fragment);
        var text2 = child(div, true);
        reset(div);
        var div_1 = sibling(div, 2);
        var text_1 = child(div_1, true);
        reset(div_1);
        template_effect(() => {
          set_text(text2, get(clueData).playOrder);
          set_text(text_1, get(clueData).value);
        });
        append($$anchor2, fragment);
      };
      if_block(node, ($$render) => {
        if ("clueHTML" in $$props.clue) $$render(consequent);
      });
    }
    reset(button);
    template_effect(() => styles = set_style(button, "", styles, {
      "grid-row": $$props.clue.clueNum + 2,
      "grid-column": $$props.clue.categoryNum + 1
    }));
    delegated("click", button, () => {
      if ("clueHTML" in $$props.clue) {
        showModal($$props.clue);
      }
    });
    append($$anchor, button);
    pop();
  }
  delegate(["click"]);
  function noop() {
    return;
  }
  var root_1$3 = from_html(`<div class="ico-extra svelte-1atmmd4">✱</div>`);
  var root_2$2 = from_html(`<div class="category_comments svelte-1atmmd4"> </div>`);
  var root$3 = from_html(`<div class="category_cell svelte-1atmmd4" role="columnheader"><!> <button class="category svelte-1atmmd4"><div> </div> <!></button></div>`);
  function CategoryCell($$anchor, $$props) {
    push($$props, true);
    let onclick = prop($$props, "onclick", 3, noop);
    let showComment = state(false);
    let categoryNameClasses = state("category_name");
    onMount(() => {
      set(categoryNameClasses, $$props.category.clues.length == 1 ? "category_name final" : "category_name", true);
    });
    var div = root$3();
    let styles;
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
    var div_2 = child(button);
    var text2 = child(div_2, true);
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
      styles = set_style(div, "", styles, {
        "grid-column": $$props.category.categoryNum + 1,
        "grid-row": 1
      });
      set_class(div_2, 1, clsx(get(categoryNameClasses)), "svelte-1atmmd4");
      set_text(text2, $$props.category.title);
    });
    event("mouseenter", div, () => {
      if ($$props.category.comments) {
        set(showComment, true);
      }
    });
    event("mouseleave", div, () => set(showComment, false));
    delegated("click", button, function(...$$args) {
      onclick()?.apply(this, $$args);
    });
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);
  var root_1$2 = from_html(`<!> <!>`, 1);
  var root_5$1 = from_html(`<div class="score_name svelte-1cn8fss"> </div> <div class="score_score svelte-1cn8fss"> </div> <div class="score_remarks svelte-1cn8fss"> </div>`, 1);
  var root_4$1 = from_html(`<div class="score_block svelte-1cn8fss" role="grid"><div class="score_block_title svelte-1cn8fss"> </div> <!></div>`);
  var root$2 = from_html(`<div role="grid"></div> <div class="score_blocks svelte-1cn8fss"><div class="score_gap svelte-1cn8fss"></div> <!></div>`, 1);
  function Round($$anchor, $$props) {
    push($$props, true);
    let boardClasses = state("board");
    const isFinalRound = () => $$props.round.categories[0].clues.length == 1;
    const categoryOnClick = () => {
      if (isFinalRound()) {
        showModal($$props.round.categories[0].clues[0]);
      }
    };
    onMount(() => {
      set(boardClasses, isFinalRound() ? "final_board" : "board", true);
    });
    var fragment = root$2();
    var div = first_child(fragment);
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
        var d = user_derived(() => !isFinalRound());
        if_block(node_1, ($$render) => {
          if (get(d)) $$render(consequent);
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
      var text2 = child(div_3, true);
      reset(div_3);
      var node_4 = sibling(div_3, 2);
      each(node_4, 17, () => get(scoreBlock).players, (playerScore) => playerScore.name, ($$anchor3, playerScore) => {
        var fragment_4 = root_5$1();
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
          [() => get(playerScore).score.toLocaleString()]
        );
        append($$anchor3, fragment_4);
      });
      reset(div_2);
      template_effect(() => set_text(text2, get(scoreBlock).title));
      append($$anchor2, div_2);
    });
    reset(div_1);
    template_effect(() => set_class(div, 1, clsx(get(boardClasses)), "svelte-1cn8fss"));
    append($$anchor, fragment);
    pop();
  }
  var root_2$1 = from_html(`<div class="responder svelte-11gz3ue"> <!></div>`);
  var root_4 = from_html(`<div class="responder svelte-11gz3ue" data-state="incorrect">Triple Stumper</div>`);
  var root_1$1 = from_html(`<div class="responders svelte-11gz3ue"><!> <!></div>`);
  var root_5 = from_html(`<div class="responder svelte-11gz3ue"> </div> <div class="responder_wager svelte-11gz3ue"> </div>`, 1);
  var root_6 = from_html(` <br/>`, 1);
  var root_7 = from_html(`<div class="responder svelte-11gz3ue"> </div> <div class="responder_wager svelte-11gz3ue"> </div> <div class="responder_response svelte-11gz3ue"> </div>`, 1);
  var root$1 = from_html(`<dialog class="clue_modal svelte-11gz3ue" aria-modal="true" tabindex="-1"><div class="modal_content svelte-11gz3ue"><div class="ico-close svelte-11gz3ue" aria-label="Close">&#x2716;</div> <div class="ico-extra svelte-11gz3ue">✱</div> <!> <div class="modal_main svelte-11gz3ue"><div class="daily_double svelte-11gz3ue">Daily Double</div> <div class="clue svelte-11gz3ue"><!> <div class="final_responses"><hr/> <div class="final_responses_grid svelte-11gz3ue"></div></div></div> <div class="correct_response svelte-11gz3ue"> <div class="response_comments svelte-11gz3ue"><hr/> <!></div> <div class="final_responses"><hr/> <div class="final_responses_grid svelte-11gz3ue"></div></div></div></div></div></dialog>`);
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
      get(dialog)?.showModal();
      $$props.scrollToElm.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
    function onCloseDialog() {
      $$props.scrollToElm.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
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
    var dialog_1 = root$1();
    var div = child(dialog_1);
    var div_1 = child(div);
    var div_2 = sibling(div_1, 2);
    var node = sibling(div_2, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var div_3 = root_1$1();
        var node_1 = child(div_3);
        each(node_1, 17, () => clueDisplay.clue.response.responders, (responder) => responder.player, ($$anchor3, responder) => {
          var div_4 = root_2$1();
          var text$1 = child(div_4);
          var node_2 = sibling(text$1);
          {
            var consequent = ($$anchor4) => {
              var text_1 = text();
              template_effect(($0) => set_text(text_1, `- $${$0 ?? ""}`), [() => clueDisplay.clue.dailyDoubleWager.toLocaleString()]);
              append($$anchor4, text_1);
            };
            if_block(node_2, ($$render) => {
              if (clueDisplay.clue.dailyDoubleWager) $$render(consequent);
            });
          }
          reset(div_4);
          template_effect(() => {
            set_attribute(div_4, "data-state", get(responder).correct ? "correct" : "incorrect");
            set_text(text$1, `${get(responder).player ?? ""} `);
          });
          append($$anchor3, div_4);
        });
        var node_3 = sibling(node_1, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var div_5 = root_4();
            append($$anchor3, div_5);
          };
          if_block(node_3, ($$render) => {
            if (get(tripleStumper)) $$render(consequent_1);
          });
        }
        reset(div_3);
        append($$anchor2, div_3);
      };
      if_block(node, ($$render) => {
        if (!clueDisplay.clue.finalJeopardy && clueDisplay.state == ClueDisplayStates.CorrectResponse) $$render(consequent_2);
      });
    }
    var div_6 = sibling(node, 2);
    var div_7 = child(div_6);
    var div_8 = sibling(div_7, 2);
    var node_4 = child(div_8);
    html(node_4, () => clueDisplay.clue.clueHTML);
    var div_9 = sibling(node_4, 2);
    var div_10 = sibling(child(div_9), 2);
    each(div_10, 21, () => clueDisplay.clue.response.responders, (responder) => responder.player, ($$anchor2, responder) => {
      var fragment_1 = root_5();
      var div_11 = first_child(fragment_1);
      var text_2 = child(div_11, true);
      reset(div_11);
      var div_12 = sibling(div_11, 2);
      var text_3 = child(div_12);
      reset(div_12);
      template_effect(
        ($0) => {
          set_attribute(div_11, "data-state", get(responder).correct ? "correct" : "incorrect");
          set_text(text_2, get(responder).player);
          set_text(text_3, `$${$0 ?? ""}`);
        },
        [() => get(responder).wager.toLocaleString()]
      );
      append($$anchor2, fragment_1);
    });
    reset(div_10);
    reset(div_9);
    reset(div_8);
    var div_13 = sibling(div_8, 2);
    var text_4 = child(div_13);
    var div_14 = sibling(text_4);
    var node_5 = sibling(child(div_14), 2);
    each(node_5, 17, () => clueDisplay.clue.response.comments, index, ($$anchor2, comment2) => {
      next();
      var fragment_2 = root_6();
      var text_5 = first_child(fragment_2);
      next();
      template_effect(() => set_text(text_5, `${get(comment2) ?? ""} `));
      append($$anchor2, fragment_2);
    });
    reset(div_14);
    var div_15 = sibling(div_14, 2);
    var div_16 = sibling(child(div_15), 2);
    each(div_16, 21, () => clueDisplay.clue.response.responders, (responder) => responder.player, ($$anchor2, responder) => {
      var fragment_3 = root_7();
      var div_17 = first_child(fragment_3);
      var text_6 = child(div_17, true);
      reset(div_17);
      var div_18 = sibling(div_17, 2);
      var text_7 = child(div_18);
      reset(div_18);
      var div_19 = sibling(div_18, 2);
      var text_8 = child(div_19, true);
      reset(div_19);
      template_effect(
        ($0) => {
          set_attribute(div_17, "data-state", get(responder).correct ? "correct" : "incorrect");
          set_text(text_6, get(responder).player);
          set_text(text_7, `$${$0 ?? ""}`);
          set_text(text_8, get(responder).response);
        },
        [() => get(responder).wager.toLocaleString()]
      );
      append($$anchor2, fragment_3);
    });
    reset(div_16);
    reset(div_15);
    reset(div_13);
    reset(div_6);
    reset(div);
    reset(dialog_1);
    bind_this(dialog_1, ($$value) => set(dialog, $$value), () => get(dialog));
    template_effect(() => {
      set_attribute(dialog_1, "aria-hidden", !clueDisplay.show);
      set_attribute(div_2, "hidden", clueDisplay.clue.response.comments.length == 0 || clueDisplay.state != ClueDisplayStates.CorrectResponse);
      set_attribute(div_7, "hidden", clueDisplay.state != ClueDisplayStates.DailyDouble);
      set_attribute(div_8, "hidden", clueDisplay.state != ClueDisplayStates.Clue);
      set_attribute(div_9, "hidden", !clueDisplay.clue.finalJeopardy);
      set_attribute(div_13, "hidden", clueDisplay.state != ClueDisplayStates.CorrectResponse);
      set_text(text_4, `${clueDisplay.clue.response.correctResponse ?? ""} `);
      set_attribute(div_14, "hidden", clueDisplay.clue.response.comments.length == 0 || !get(showExtra));
      set_attribute(div_15, "hidden", !clueDisplay.clue.finalJeopardy);
    });
    event("close", dialog_1, onCloseDialog);
    delegated("click", dialog_1, (e) => {
      if (e.target === get(dialog)) get(dialog)?.close();
    });
    delegated("click", div, nextDisplayState);
    delegated("click", div_1, () => get(dialog)?.close());
    event("mouseenter", div_6, () => set(showExtra, true));
    event("mouseleave", div_6, () => set(showExtra, false));
    append($$anchor, dialog_1);
    pop();
  }
  delegate(["click"]);
  var root_1 = from_html(`<p class="contestant"><a target="_blank"> </a> </p>`);
  var root_2 = from_html(`<button class="round-tab svelte-wmng36" role="tab"> </button>`);
  var root_3 = from_html(`<div class="round-tabs-content svelte-wmng36" role="tabpanel" tabindex="0"><!></div>`);
  var root = from_html(`<div id="game_title" class="svelte-wmng36"><a target="_blank" role="button" class="svelte-wmng36">⇐ Previous Game</a> <h1> </h1> <a target="_blank" role="button" class="svelte-wmng36">Next Game ⇒</a></div> <div id="game_comments"> </div> <div id="contestants"><h2>Contestants</h2> <!></div> <div class="tabs svelte-wmng36"><div role="tablist" aria-label="Round Tabs" class="round-tabs-list svelte-wmng36"></div> <div></div> <!></div>`, 1);
  function Game($$anchor, $$props) {
    push($$props, true);
    let activeTab = state(0);
    let scrollToElm = state(void 0);
    var fragment = root();
    var div = first_child(fragment);
    var a = child(div);
    var h1 = sibling(a, 2);
    var text2 = child(h1, true);
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
      delegated("click", button, () => set(activeTab, get(i), true));
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
        set_attribute(div_6, "hidden", get(activeTab) != get(i));
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
      set_text(text2, $$props.gameData.title);
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