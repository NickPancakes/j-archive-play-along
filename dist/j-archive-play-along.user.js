// ==UserScript==
// @name         j-archive-play-along
// @namespace    https://github.com/NickPancakes/j-archive-play-along
// @version      0.0.1
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

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' @import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";@import"https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,40..300&display=swap";@import"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap";:root{--clue-depth-bottom: #000088;--clue-depth-left: #0000ee;--clue-depth-right: #000099;--clue-depth-top: #0000ff}.clue_cell.svelte-178msfy{border-width:.2rem;border-style:outset;display:grid;place-content:center;place-items:center;text-align:center;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);grid-template-columns:10% 80% 10%;grid-template-rows:10% 80% 10%;grid-template-areas:"tl tc tr" "ml main mr" "bl bc br"}.order_text.svelte-178msfy{font-size:clamp(1rem,1cqmin,9rem);color:var(--black);text-align:center;vertical-align:middle;font-weight:700;grid-area:tr}.value_text.svelte-178msfy{font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(1rem,5cqmin,12rem);background-color:var(--clue-screen-blue);color:var(--font-yellow);text-shadow:.1em .1em 0px #000000;text-align:center;vertical-align:middle;font-weight:800;grid-area:main;border-style:none;padding:0}div.category_cell.svelte-10hs687{border-width:.2rem;border-style:outset;display:grid;place-content:center;place-items:center;color:var(--white);text-align:center;vertical-align:middle;font-weight:700;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);grid-row:1;grid-template-columns:3% 94% 3%;grid-template-rows:3% 94% 3%;grid-template-areas:"tl tc tr" "ml main mr" "bl bc br"}button.category.svelte-10hs687{width:100%;height:100%;background-color:var(--clue-screen-blue);border-style:none;grid-area:main;padding:0;color:var(--white)}div.category_name.svelte-10hs687{font-family:Swiss911 Cm BT,Open Sans,helvetica,arial,verdana,sans-serif;font-size:clamp(.25rem,2cqmin,9rem);text-shadow:.1em .1em 0px #000000;text-align:center;text-wrap:balance;vertical-align:middle;font-weight:700}div.final.svelte-10hs687{font-size:clamp(1rem,4vmin,9rem)}div.category_comments.svelte-10hs687{text-align:center;vertical-align:middle;font-weight:700;font-size:clamp(1rem,1.5cqmin,9rem);text-wrap:balance;grid-area:main}.ico-extra.svelte-10hs687{width:100%;height:100%;color:var(--white);grid-area:tl;font-size:clamp(1rem,1cqmin,9rem);font-family:arial,sans-serif;text-align:center;vertical-align:center;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black}div.board.svelte-frh5zp{height:100%;width:100%;display:grid;gap:.1rem;place-content:center;grid-auto-flow:row dense;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,.9fr)) repeat(5,minmax(0,1fr))}div.scores.svelte-frh5zp{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}div.board.svelte-15pq1e1{height:50%;width:100%;display:grid;gap:.1rem;place-content:center;grid-auto-flow:row dense;grid-template-columns:minmax(0,.5fr) minmax(0,1fr) minmax(0,.5fr);grid-template-rows:minmax(0,1fr)}div.scores.svelte-15pq1e1{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}dialog.clue_modal.svelte-61upa4{width:90%;height:90%;position:fixed;border-width:1em;border-style:outset;background-color:var(--clue-screen-blue);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top)}.modal_content.svelte-61upa4{width:100%;height:100%;display:grid;grid-template-columns:5% 90% 5%;grid-template-rows:5% 85% 10%;grid-template-areas:"tl tc tr" "ml main mr" "bl bc br";place-content:center;place-items:center}.modal_main.svelte-61upa4{grid-area:main;color:var(--white);text-align:center;font-weight:700;vertical-align:middle;text-wrap:pretty;line-height:1.25}.daily_double.svelte-61upa4{text-transform:uppercase;font-family:Futura,Kumbh Sans,Century Gothic,sans-serif;font-weight:800;font-size:clamp(1rem,24vmin,30rem);text-shadow:.3rem .3rem 0px #000000}.clue.svelte-61upa4{text-transform:uppercase;font-family:ITC Korinna Std,Libre Baskerville,Times New Roman,serif;font-size:clamp(1rem,7vmin,9rem);text-shadow:.3rem .3rem 0px #000000}.correct_response.svelte-61upa4{text-transform:uppercase;color:var(--aqua-blue);font-family:ITC Korinna Std,Libre Baskerville,Times New Roman,serif;font-size:clamp(1rem,7vmin,9rem);text-shadow:.3rem .3rem 0px #000000}.extra.svelte-61upa4{text-transform:none;text-shadow:none;font-size:clamp(1rem,4vmin,9rem)}.responders.svelte-61upa4{grid-area:bc;display:flex;font-size:clamp(1rem,3vmin,9rem);text-align:center;vertical-align:middle;flex-direction:row}.responder[data-state=correct].svelte-61upa4{color:var(--lime-green)}.responder[data-state=incorrect].svelte-61upa4{color:var(--error-red)}.extra.svelte-61upa4{font-size:clamp(1rem,3vmin,9rem);color:var(--white);text-align:center;vertical-align:middle}.ico-close.svelte-61upa4{width:100%;height:100%;color:var(--white);grid-area:tr;font-size:clamp(1rem,3vmin,9rem);font-family:arial,sans-serif;text-align:center;vertical-align:center;text-shadow:.3rem .3rem 0px #000000}.ico-extra.svelte-61upa4{width:100%;height:100%;color:var(--white);grid-area:tl;font-size:clamp(1rem,5vmin,9rem);font-family:arial,sans-serif;text-align:center;vertical-align:center;text-shadow:.3rem .3rem 0px #000000}dialog.svelte-61upa4::backdrop{background:#0000004d}dialog[open].svelte-61upa4{animation:svelte-61upa4-zoom .3s cubic-bezier(.34,1.56,.64,1)}@keyframes svelte-61upa4-zoom{0%{transform:scale(.95)}to{transform:scale(1)}}dialog[open].svelte-61upa4::backdrop{animation:svelte-61upa4-fade .2s ease-out}@keyframes svelte-61upa4-fade{0%{opacity:0}to{opacity:1}}div.tabs.svelte-2d0ooi{height:100%;width:100%}div.round-tabs-list.svelte-2d0ooi{flex:auto;width:100%;display:flex;flex-direction:row;justify-content:center;border-bottom-width:.25em;border-bottom-style:outset;border-bottom-color:var(--background-dark-blue)}div.round-tabs-content.svelte-2d0ooi{height:100vh;width:100%}button.round-tab.svelte-2d0ooi{flex:1;display:flex;flex-direction:row;place-content:center;border-width:.1em;border-style:outset;background-color:var(--clue-depth-bottom);border-bottom-color:var(--clue-depth-bottom);border-left-color:var(--clue-depth-left);border-right-color:var(--clue-depth-right);border-top-color:var(--clue-depth-top);color:var(--disclaimer-gray);text-shadow:2px 2px 0px #000000;font-size:clamp(1rem,3vmin,9rem);text-align:center;vertical-align:middle;font-weight:700}button.round-tab[data-state=active].svelte-2d0ooi{flex:1.5;background-color:var(--clue-screen-blue);color:var(--white)} ');

(function () {
  'use strict';

  var _a;
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
  const UNINITIALIZED = Symbol();
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
          var _a2;
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
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
          var _a2;
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
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
          var _a2;
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
            if (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable)) {
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
    {
      return /* @__PURE__ */ get_first_child(node);
    }
  }
  function first_child(fragment, is_text) {
    {
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
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;
    while (count--) {
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    {
      return next_sibling;
    }
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
      var next = effect2.next;
      destroy_effect(effect2, remove_dom);
      effect2 = next;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
      var node = effect2.nodes_start;
      var end = effect2.nodes_end;
      while (node !== null) {
        var next = node === end ? null : (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_next_sibling(node)
        );
        node.remove();
        node = next;
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
    var next = effect2.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next;
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
    var _a2;
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
            if (is_disconnected || !((_a2 = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a2.includes(derived2))) {
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
    var _a2;
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
            ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
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
    var _a2;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = ((_a2 = event2.composedPath) == null ? void 0 : _a2.call(event2)) || [];
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
  function append(anchor, dom) {
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
        component = Component(anchor_node, props) || {};
        if (context) {
          pop();
        }
      });
      return () => {
        var _a2;
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
          (_a2 = anchor_node.parentNode) == null ? void 0 : _a2.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function if_block(node, fn, elseif = false) {
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
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
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
      anchor = parent_node.appendChild(create_text());
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
      {
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
      get(each_array);
    });
  }
  function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
    var _a2, _b, _c, _d;
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
          (_a2 = item.a) == null ? void 0 : _a2.measure();
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
        var _a3;
        if (to_animate === void 0) return;
        for (item of to_animate) {
          (_a3 = item.a) == null ? void 0 : _a3.apply();
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
  function create_item(anchor, state2, prev, next, value, key, index2, render_fn, flags, get_collection) {
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
      next
    };
    try {
      item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
      item.e.prev = prev && prev.e;
      item.e.next = next && next.e;
      if (prev === null) {
        state2.first = item;
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }
      if (next !== null) {
        next.prev = item;
        next.e.prev = item.e;
      }
      return item;
    } finally {
    }
  }
  function move(item, next, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next ? (
      /** @type {TemplateNode} */
      next.e.nodes_start
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
  function link(state2, prev, next) {
    if (prev === null) {
      state2.first = next;
    } else {
      prev.next = next;
      prev.e.next = next && next.e;
    }
    if (next !== null) {
      next.prev = prev;
      next.e.prev = prev && prev.e;
    }
  }
  function html(node, get_value, svg, mathml, skip_warning) {
    var anchor = node;
    var value = "";
    var effect2;
    block(() => {
      if (value === (value = get_value() ?? "")) {
        return;
      }
      if (effect2 !== void 0) {
        destroy_effect(effect2);
        effect2 = void 0;
      }
      if (value === "") return;
      effect2 = branch(() => {
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
    if (prev_class_name !== next_class_name || hydrating) {
      {
        dom.className = next_class_name;
      }
      dom.__className = next_class_name;
    }
  }
  function to_class(value, hash) {
    return (value == null ? "" : value) + (" " + hash);
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
  const ClueDisplayStates = {
    Clue: 0,
    CorrectResponse: 1,
    FinalResponses: 2,
    DailyDouble: 3
  };
  const selectedClueState = proxy({
    show: false,
    displayState: ClueDisplayStates.Clue,
    dailyDouble: false,
    stumper: false,
    finalJeopardy: false,
    clueHTML: "",
    correctResponseHTML: "",
    correctResponseExtraHTML: "",
    incorrectResponders: [],
    correctResponder: "",
    finalResponsesHTML: ""
  });
  const updateSelectedClueState = (newState) => {
    selectedClueState.show = newState.show ?? false;
    selectedClueState.displayState = newState.displayState ?? ClueDisplayStates.Clue;
    selectedClueState.dailyDouble = newState.dailyDouble ?? false;
    selectedClueState.stumper = newState.stumper ?? false;
    selectedClueState.finalJeopardy = newState.finalJeopardy ?? false;
    selectedClueState.clueHTML = newState.clueHTML ?? "";
    selectedClueState.correctResponseHTML = newState.correctResponseHTML ?? "";
    selectedClueState.correctResponseExtraHTML = newState.correctResponseExtraHTML ?? "";
    selectedClueState.incorrectResponders = newState.incorrectResponders ?? [];
    selectedClueState.correctResponder = newState.correctResponder ?? "";
    selectedClueState.finalResponsesHTML = newState.finalResponsesHTML ?? "";
  };
  var root$5 = /* @__PURE__ */ template(`<div class="clue_cell svelte-178msfy"><div class="order_text svelte-178msfy"></div> <button class="value_text svelte-178msfy"></button></div>`);
  function ClueCell($$anchor, $$props) {
    var _a2, _b;
    push($$props, true);
    const headerElm = $$props.clueCellElm.querySelector("table.clue_header");
    const valueElm = headerElm == null ? void 0 : headerElm.querySelector('[class^="clue_value"]');
    const orderNumber = ((_a2 = headerElm == null ? void 0 : headerElm.querySelector("td.clue_order_number")) == null ? void 0 : _a2.textContent) ?? "0";
    const clueTextElms = $$props.clueCellElm.querySelectorAll("td.clue_text");
    const clueTextElm = clueTextElms[0];
    const responseElm = clueTextElms[1];
    const clueText = clueTextElm.innerHTML ?? "";
    function clueIDToGridPosition(clueID) {
      const splitID = clueID.split("_");
      const row2 = parseInt(splitID[3]) + 1;
      const col2 = parseInt(splitID[2]);
      switch (splitID[1].toUpperCase()) {
        case "J":
          return [1, row2, col2];
        case "DJ":
          return [2, row2, col2];
        case "TJ":
          return [3, row2, col2];
        case "FJ":
          return [4, 1, 1];
      }
      return [1, row2, col2];
    }
    const [round, row, col] = clueIDToGridPosition(clueTextElm.id);
    const dailyDouble = ((_b = valueElm == null ? void 0 : valueElm.textContent) == null ? void 0 : _b.startsWith("DD:")) ?? false;
    const value = "$" + (100 * round * (row - 1)).toString();
    function showModal() {
      var _a3;
      let respCloneElm = responseElm.cloneNode(true);
      let newClueState = {
        show: true,
        displayState: dailyDouble ? ClueDisplayStates.DailyDouble : ClueDisplayStates.Clue,
        clueHTML: clueText,
        dailyDouble
      };
      const correctResponseElm = respCloneElm.querySelector("em.correct_response");
      if (correctResponseElm) {
        newClueState.correctResponseHTML = correctResponseElm.innerHTML ?? "";
        respCloneElm.removeChild(correctResponseElm);
      }
      const responderTableElms = respCloneElm.querySelectorAll("table");
      for (var responderTableElm of responderTableElms) {
        newClueState.correctResponder = ((_a3 = responderTableElm.querySelector("td.right")) == null ? void 0 : _a3.textContent) ?? "";
        const incorrectResponderElms = responderTableElm.querySelectorAll("td.wrong");
        for (var incorrectResponderElm of incorrectResponderElms) {
          if (incorrectResponderElm.textContent && incorrectResponderElm.textContent != "Triple Stumper") {
            if (newClueState.incorrectResponders === void 0) {
              newClueState.incorrectResponders = [];
            }
            newClueState.incorrectResponders.push(incorrectResponderElm.textContent);
          }
        }
        respCloneElm.removeChild(responderTableElm);
      }
      if (respCloneElm.innerHTML != "<br><br>") {
        newClueState.correctResponseExtraHTML = respCloneElm.innerHTML;
      }
      updateSelectedClueState(newClueState);
    }
    var div = root$5();
    set_style(div, "grid-row", row);
    set_style(div, "grid-column", col);
    var div_1 = child(div);
    div_1.textContent = orderNumber;
    var button = sibling(div_1, 2);
    button.__click = showModal;
    button.textContent = value;
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);
  var root_1$2 = /* @__PURE__ */ template(`<div class="ico-extra svelte-10hs687">*</div>`);
  var root_2$2 = /* @__PURE__ */ template(`<hr> <div class="category_comments svelte-10hs687"></div>`, 1);
  var root$4 = /* @__PURE__ */ template(`<div class="category_cell svelte-10hs687" role="columnheader"><!> <button class="category svelte-10hs687"><div> </div> <!></button></div>`);
  function CategoryCell($$anchor, $$props) {
    var _a2, _b;
    push($$props, true);
    function defaultOnClickFn() {
      return;
    }
    let onclick = prop($$props, "onclick", 3, defaultOnClickFn), final = prop($$props, "final", 3, false);
    let showComment = state(false);
    let name = proxy((_a2 = $$props.categoryCellElm.querySelector("td.category_name")) == null ? void 0 : _a2.textContent);
    const comments = ((_b = $$props.categoryCellElm.querySelector("td.category_comments")) == null ? void 0 : _b.textContent) ?? "";
    const categoryNameClasses = final() ? "category_name final" : "category_name";
    var div = root$4();
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_1$2();
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if (comments && !get(showComment)) $$render(consequent);
      });
    }
    var button = sibling(node, 2);
    button.__click = function(...$$args) {
      var _a3;
      (_a3 = onclick()) == null ? void 0 : _a3.apply(this, $$args);
    };
    var div_2 = child(button);
    set_class(div_2, clsx(categoryNameClasses), "svelte-10hs687");
    var text = child(div_2);
    var node_1 = sibling(div_2, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var fragment = root_2$2();
        var div_3 = sibling(first_child(fragment), 2);
        div_3.textContent = comments;
        append($$anchor2, fragment);
      };
      if_block(node_1, ($$render) => {
        if (comments && get(showComment)) $$render(consequent_1);
      });
    }
    template_effect(() => {
      set_attribute(div, "tabindex", $$props.idx);
      set_style(div, "grid-column", $$props.idx + 1);
      set_text(text, name);
    });
    event("mouseenter", div, () => {
      if (comments != "") {
        set(showComment, true);
      }
    });
    event("mouseleave", div, () => set(showComment, false));
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);
  var root$3 = /* @__PURE__ */ template(`<div class="board svelte-frh5zp" role="grid"><!> <!></div> <div class="scores svelte-frh5zp"><!></div>`, 1);
  function Round($$anchor, $$props) {
    push($$props, true);
    let categoryElms = state(proxy([]));
    let clueElms = state(proxy([]));
    const tableElm = $$props.roundElm.querySelector("table.round");
    if (tableElm) {
      const tableClone = tableElm.cloneNode(true);
      set(categoryElms, proxy(Array.from(tableClone.querySelectorAll(".category"))));
      set(clueElms, proxy(Array.from(tableClone.querySelectorAll(".clue"))));
      $$props.roundElm.removeChild(tableElm);
    }
    const headerElm = $$props.roundElm.querySelector("h2");
    if (headerElm) {
      $$props.roundElm.removeChild(headerElm);
    }
    var fragment = root$3();
    var div = first_child(fragment);
    var node = child(div);
    each(node, 17, () => get(categoryElms), index, ($$anchor2, categoryCellElm, idx) => {
      CategoryCell($$anchor2, {
        get categoryCellElm() {
          return get(categoryCellElm);
        },
        idx
      });
    });
    var node_1 = sibling(node, 2);
    each(node_1, 17, () => get(clueElms), index, ($$anchor2, clueCellElm) => {
      ClueCell($$anchor2, {
        get clueCellElm() {
          return get(clueCellElm);
        }
      });
    });
    var div_1 = sibling(div, 2);
    var node_2 = child(div_1);
    html(node_2, () => $$props.roundElm.innerHTML);
    append($$anchor, fragment);
    pop();
  }
  var root$2 = /* @__PURE__ */ template(`<div class="board svelte-15pq1e1" role="grid"><!></div> <div class="scores svelte-15pq1e1"><!></div>`, 1);
  function FinalRound($$anchor, $$props) {
    push($$props, true);
    const tableElm = $$props.roundElm.querySelector("table.final_round");
    const tableClone = tableElm.cloneNode(true);
    const categoryCellElm = tableClone.querySelector(".category");
    const clueCellElm = tableClone.querySelector(".clue");
    const clueTextElms = clueCellElm.querySelectorAll("td.clue_text");
    const clueTextElm = clueTextElms[0];
    const responseElm = clueTextElms[1];
    const clueText = clueTextElm.innerHTML ?? "";
    $$props.roundElm.removeChild(tableElm);
    const headerElm = $$props.roundElm.querySelector("h2");
    if (headerElm) {
      $$props.roundElm.removeChild(headerElm);
    }
    function parseCorrectResponseElm(responseElm2) {
      let respCloneElm = responseElm2.cloneNode(true);
      const correctResponseElm = respCloneElm.querySelector("em.correct_response");
      if (correctResponseElm) {
        selectedClueState.correctResponseHTML = correctResponseElm.innerHTML ?? "";
        respCloneElm.removeChild(correctResponseElm);
      }
      const playerWagers = proxy([
        {
          name: "Player 1",
          response: "",
          wager: "",
          correct: false
        },
        {
          name: "Player 2",
          response: "",
          wager: "",
          correct: false
        },
        {
          name: "Player 3",
          response: "",
          wager: "",
          correct: false
        }
      ]);
      const responseTableElm = respCloneElm.querySelector("table");
      const responseRows = Array.from(responseTableElm.querySelectorAll("tr"));
      for (const [i, trElm] of responseRows.entries()) {
        let playerIdx = 0;
        switch (i) {
          case 2:
          case 3:
            playerIdx = 1;
            break;
          case 4:
          case 5:
            playerIdx = 2;
            break;
          default:
            playerIdx = 0;
            break;
        }
        if (i % 2 == 0) {
          const tdElms = Array.from(trElm.querySelectorAll("td"));
          playerWagers[playerIdx].name = tdElms[0].textContent ?? "";
          playerWagers[playerIdx].correct = tdElms[0].classList.contains("right");
          playerWagers[playerIdx].response = tdElms[1].textContent ?? "";
        } else {
          const tdElm = trElm.querySelector("td");
          playerWagers[playerIdx].wager = (tdElm == null ? void 0 : tdElm.textContent) ?? "";
        }
      }
      respCloneElm.removeChild(responseTableElm);
      if (respCloneElm.innerHTML != "<br><br>") {
        selectedClueState.correctResponseExtraHTML = respCloneElm.innerHTML;
      } else {
        selectedClueState.correctResponseExtraHTML = "";
      }
    }
    function showModal() {
      selectedClueState.show = true;
      selectedClueState.finalJeopardy = true;
      selectedClueState.clueHTML = clueText;
      parseCorrectResponseElm(responseElm);
    }
    var fragment = root$2();
    var div = first_child(fragment);
    var node = child(div);
    CategoryCell(node, {
      categoryCellElm,
      idx: 1,
      final: true,
      onclick: showModal
    });
    var div_1 = sibling(div, 2);
    var node_1 = child(div_1);
    html(node_1, () => $$props.roundElm.innerHTML);
    append($$anchor, fragment);
    pop();
  }
  var on_click = (e, dialog) => {
    var _a2;
    if (e.target === get(dialog)) (_a2 = get(dialog)) == null ? void 0 : _a2.close();
  };
  var on_click_1 = (_, dialog) => {
    var _a2;
    return (_a2 = get(dialog)) == null ? void 0 : _a2.close();
  };
  var root_2$1 = /* @__PURE__ */ template(`<div class="responder svelte-61upa4" data-state="incorrect"> </div>`);
  var root_3 = /* @__PURE__ */ template(`<div class="responder svelte-61upa4" data-state="correct"> </div>`);
  var root_4 = /* @__PURE__ */ template(`<div class="responder svelte-61upa4" data-state="incorrect">Triple Stumper</div>`);
  var root_1$1 = /* @__PURE__ */ template(`<div class="responders svelte-61upa4"><!> <!></div>`);
  var root$1 = /* @__PURE__ */ template(`<dialog class="clue_modal svelte-61upa4" aria-modal="true" tabindex="-1"><div class="modal_content svelte-61upa4"><div class="ico-close svelte-61upa4" aria-label="Close">&#x2716;</div> <div class="ico-extra svelte-61upa4">*</div> <!> <div class="modal_main svelte-61upa4"><div class="daily_double svelte-61upa4">Daily Double</div> <div class="clue svelte-61upa4"><!></div> <div class="correct_response svelte-61upa4"><!> <div class="extra svelte-61upa4"><hr> <!></div></div> <div class="final_responses"></div></div></div></dialog>`);
  function ClueModal($$anchor, $$props) {
    push($$props, true);
    let dialog = state(void 0);
    let showExtra = state(false);
    user_effect(() => {
      if (selectedClueState.show) {
        showDialog();
      }
    });
    function showDialog() {
      var _a2;
      (_a2 = get(dialog)) == null ? void 0 : _a2.showModal();
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
      selectedClueState.show = false;
      selectedClueState.displayState = ClueDisplayStates.Clue;
    }
    function nextDisplayState() {
      switch (selectedClueState.displayState) {
        case ClueDisplayStates.DailyDouble:
          selectedClueState.displayState = ClueDisplayStates.Clue;
          break;
        case ClueDisplayStates.Clue:
          selectedClueState.displayState = ClueDisplayStates.CorrectResponse;
          console.log(selectedClueState.correctResponseExtraHTML);
          console.log(selectedClueState.correctResponseExtraHTML == "");
          break;
        case ClueDisplayStates.CorrectResponse:
          if (selectedClueState.finalJeopardy) {
            selectedClueState.displayState = ClueDisplayStates.FinalResponses;
          } else {
            selectedClueState.displayState = ClueDisplayStates.Clue;
          }
          break;
        default:
          selectedClueState.displayState = ClueDisplayStates.Clue;
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
        each(node_1, 17, () => selectedClueState.incorrectResponders, index, ($$anchor3, incorrectResponder) => {
          var div_4 = root_2$1();
          var text = child(div_4);
          template_effect(() => set_text(text, get(incorrectResponder)));
          append($$anchor3, div_4);
        });
        var node_2 = sibling(node_1, 2);
        {
          var consequent = ($$anchor3) => {
            var div_5 = root_3();
            var text_1 = child(div_5);
            template_effect(() => set_text(text_1, selectedClueState.correctResponder));
            append($$anchor3, div_5);
          };
          var alternate = ($$anchor3) => {
            var div_6 = root_4();
            append($$anchor3, div_6);
          };
          if_block(node_2, ($$render) => {
            if (selectedClueState.correctResponder) $$render(consequent);
            else $$render(alternate, false);
          });
        }
        append($$anchor2, div_3);
      };
      if_block(node, ($$render) => {
        if (!selectedClueState.finalJeopardy && selectedClueState.displayState == ClueDisplayStates.CorrectResponse) $$render(consequent_1);
      });
    }
    var div_7 = sibling(node, 2);
    var div_8 = child(div_7);
    var div_9 = sibling(div_8, 2);
    var node_3 = child(div_9);
    html(node_3, () => selectedClueState.clueHTML);
    var div_10 = sibling(div_9, 2);
    var node_4 = child(div_10);
    html(node_4, () => selectedClueState.correctResponseHTML);
    var div_11 = sibling(node_4, 2);
    var node_5 = sibling(child(div_11), 2);
    html(node_5, () => selectedClueState.correctResponseExtraHTML);
    var div_12 = sibling(div_10, 2);
    bind_this(dialog_1, ($$value) => set(dialog, $$value), () => get(dialog));
    template_effect(() => {
      set_attribute(dialog_1, "aria-hidden", !selectedClueState.show);
      div_2.hidden = selectedClueState.correctResponseExtraHTML == "" || selectedClueState.displayState != ClueDisplayStates.CorrectResponse;
      div_8.hidden = selectedClueState.displayState != ClueDisplayStates.DailyDouble;
      div_9.hidden = selectedClueState.displayState != ClueDisplayStates.Clue;
      div_10.hidden = selectedClueState.displayState != ClueDisplayStates.CorrectResponse;
      div_11.hidden = selectedClueState.correctResponseExtraHTML == "" || !get(showExtra);
      div_12.hidden = selectedClueState.displayState != ClueDisplayStates.FinalResponses;
    });
    event("close", dialog_1, onCloseDialog);
    event("mouseenter", div_7, () => set(showExtra, true));
    event("mouseleave", div_7, () => set(showExtra, false));
    append($$anchor, dialog_1);
    pop();
  }
  delegate(["click"]);
  var root_1 = /* @__PURE__ */ template(`<button class="round-tab svelte-2d0ooi" role="tab"> </button>`);
  var root_2 = /* @__PURE__ */ template(`<div class="round-tabs-content svelte-2d0ooi" role="tabpanel" tabindex="0"><!></div>`);
  var root = /* @__PURE__ */ template(`<!> <!> <!> <div class="tabs svelte-2d0ooi"><div role="tablist" aria-label="Round Tabs" class="round-tabs-list svelte-2d0ooi"></div> <div></div> <!></div>`, 1);
  function Game($$anchor, $$props) {
    push($$props, true);
    let activeTab = state(0);
    let scrollToElm = state(void 0);
    function roundIDToName(roundID) {
      switch (roundID) {
        case "jeopardy_round":
          return "Jeopardy!";
        case "double_jeopardy_round":
          return "Double Jeopardy!";
        case "triple_jeopardy_round":
          return "Triple Jeopardy!";
        case "final_jeopardy_round":
          return "Final Jeopardy!";
        default:
          return "Unknown";
      }
    }
    const roundElms = Array.from($$props.contentElm.querySelectorAll('[id$="_round"]')).flatMap((roundElm) => {
      const cloneElm = roundElm.cloneNode(true);
      $$props.contentElm.removeChild(roundElm);
      return cloneElm;
    });
    const gameTitleElm = $$props.contentElm.querySelector("#game_title") || document.createElement("div");
    const gameCommentsElm = $$props.contentElm.querySelector("#game_comments") || document.createElement("div");
    const contestantsElm = $$props.contentElm.querySelector("#contestants") || document.createElement("div");
    var fragment = root();
    var node = first_child(fragment);
    html(node, () => gameTitleElm.outerHTML);
    var node_1 = sibling(node, 2);
    html(node_1, () => gameCommentsElm.outerHTML);
    var node_2 = sibling(node_1, 2);
    html(node_2, () => contestantsElm.outerHTML);
    var div = sibling(node_2, 2);
    var div_1 = child(div);
    each(div_1, 23, () => roundElms, (roundElm) => roundElm.id, ($$anchor2, roundElm, i) => {
      var button = root_1();
      button.__click = () => set(activeTab, proxy(get(i)));
      var text = child(button);
      template_effect(
        ($0) => {
          set_attribute(button, "aria-selected", get(activeTab) == get(i) ? true : false);
          set_attribute(button, "aria-controls", `panel-${get(i) ?? ""}`);
          set_attribute(button, "id", `tab-${get(i) ?? ""}`);
          set_attribute(button, "tabindex", get(activeTab) == get(i) ? 0 : -1);
          set_attribute(button, "data-state", get(activeTab) == get(i) ? "active" : "inactive");
          set_text(text, $0);
        },
        [
          () => roundIDToName(get(roundElm).id)
        ]
      );
      append($$anchor2, button);
    });
    var div_2 = sibling(div_1, 2);
    each(div_2, 23, () => roundElms, (roundElm) => roundElm.id, ($$anchor2, roundElm, i) => {
      var div_3 = root_2();
      var node_3 = child(div_3);
      {
        var consequent = ($$anchor3) => {
          FinalRound($$anchor3, {
            get roundElm() {
              return get(roundElm);
            }
          });
        };
        var alternate = ($$anchor3) => {
          Round($$anchor3, {
            get roundElm() {
              return get(roundElm);
            }
          });
        };
        if_block(node_3, ($$render) => {
          if (get(roundElm).id == "final_jeopardy_round") $$render(consequent);
          else $$render(alternate, false);
        });
      }
      template_effect(() => {
        set_attribute(div_3, "id", `panel-${get(i) ?? ""}`);
        set_attribute(div_3, "aria-labelledby", `tab-${get(i) ?? ""}`);
        div_3.hidden = get(activeTab) != get(i);
      });
      append($$anchor2, div_3);
    });
    bind_this(div_2, ($$value) => set(scrollToElm, $$value), () => get(scrollToElm));
    var node_4 = sibling(div_2, 2);
    ClueModal(node_4, {
      get scrollToElm() {
        return get(scrollToElm);
      }
    });
    append($$anchor, fragment);
    pop();
  }
  delegate(["click"]);
  function App($$anchor, $$props) {
    Game($$anchor, {
      get contentElm() {
        return $$props.contentElm;
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
  mount(App, {
    target: document.body,
    props: {
      contentElm: contentElm.cloneNode(true)
    }
  });
  contentElm.remove();
  (_a = document.querySelector("div#disclaimer")) == null ? void 0 : _a.remove();

})();