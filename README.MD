**Goal:** Build a pure-JavaScript **Counter App** as a warm-up project before bigger ones.
**Constraints:** No libraries, finish in **25 minutes**, must handle increment/decrement/reset cleanly.

---

# **Project: Counter App (Vanilla JS)**

## **Requirements (tight + testable)**

1. Display a number starting at **0**.
2. Three buttons: **Increase**, **Decrease**, **Reset**.
3. Number updates instantly when clicked.
4. Number never becomes `undefined` or `NaN`.

---

## **3 Failure Modes + Mitigation**

1. **Counter jumps weird values** → always parse to number before updating.
2. **UI doesn’t update** → single `render()` that sets the DOM text.
3. **Negative values break layout** → enforce min-width via CSS.

---

## **Micro-Plan (do exactly in this order)**

**1. Scaffold folder (1 min)**

```
counter/
  index.html
  style.css
  app.js
```

**2. HTML structure (3 min)**

* Title
* `<div id="value">0</div>`
* Three buttons with IDs:

  * `#inc`
  * `#dec`
  * `#reset`

**3. JS plan (5 min)**
State:

```
let count = 0
```

Handlers:

* `increment()`
* `decrement()`
* `reset()`

Render:

* Always run `render()` after each action.

**4. Wire events (3 min)**

* `inc.addEventListener("click", increment)`
* `dec.addEventListener("click", decrement)`
* `reset.addEventListener("click", reset)`

**5. Test (2 min)**

* Click 10 times → value increments correctly.
* Go below zero → stays consistent.
* Reset returns to 0.

---

## **Your Turn**

Do you want **the full code template** next or **continue step-by-step and you write each part**?

