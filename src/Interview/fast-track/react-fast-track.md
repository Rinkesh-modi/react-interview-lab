# ⚡ REACT INTERVIEW --- FAST-TRACK HIGH-YIELD PLAN

**Overall Progress:**
- 🟩 **Module 1: Core Hooks & State Updates** (100% | 6/6 topics)
- 🟩 **Module 2: API Fetching & Custom Hooks** (100% | 4/4 topics)
- 🟩 **Module 3: Debounced Search & Forms** (100% | 4/4 topics)
- ⬜ **Module 4: Performance & Memoization** (0% | 0/4 topics)
- ⬜ **Module 5: Rapid Mock Simulation** (0% | 0/2 topics)
- 📊 **Total Topic Progress:** 14 / 20 topics completed (70%)
- 🏆 **Modules Completed:** 3 / 5 modules (60%)

> Goal: **Interview Readiness in 2 Hours** via focused high-yield modules and live coding.

---

# 📚 COMPLETED REVISION NOTES (FOUNDATIONS)

### 1. What is React, Why Use It & Declarative vs Imperative UI
- **What is React:** Component-based, state-driven JavaScript UI library by Meta.
- **Why React over Vanilla JS:** Vanilla JS requires manual DOM querying (`querySelector`) and DOM mutation step-by-step, which becomes hard to maintain, error-prone, and causes excessive DOM reflows at scale. React abstracts DOM manipulation automatically based on state.
- **Imperative vs Declarative:**
  - *Imperative (Vanilla JS):* You write HOW to update the DOM step-by-step (`element.innerText = count`).
  - *Declarative (React):* You declare WHAT the UI should look like for a given state (`return <div>{count}</div>`), and React handles DOM updates under the hood.

### 2. Component vs Element & Functional vs Class Components
- **Component vs Element:**
  - *Component:* The blueprint / function (e.g. `function Welcome(props) { ... }`).
  - *Element:* The plain, immutable JavaScript object returned by JSX / `React.createElement` (e.g. `{ type: Welcome, props: { name: 'Rinkesh' } }`).
- **Functional vs Class Components:**
  - *Class (Legacy):* ES6 class with verbose lifecycle methods (`componentDidMount`, `componentDidUpdate`), `this.state`, and manual `this` binding.
  - *Functional (Standard):* Plain functions with **Hooks** (`useState`, `useEffect`). Prevents `this` binding bugs, unifies lifecycle logic, and enables custom hooks.

### 3. JSX Mechanics & React Fragments
- **Is JSX HTML:** No, JSX is XML-like syntactic sugar transformed by Babel into `React.createElement(...)` calls.
- **`className` / `htmlFor`:** Prevents syntax collisions with JavaScript reserved keywords `class` and `for`.
- **Single Root & Fragments:** Functions return a single object tree. `<React.Fragment>` / `<>` groups children without inserting extra wrapper `<div>` nodes into the real DOM, preventing layout breakage and DOM bloat.

### 4. Props vs State & Re-rendering Triggers
- **Props vs State:** Props are read-only inputs passed from parent to child (immutable by child). State is internal private component data updated via setter functions.
- **Re-render Triggers:** State updates (`setState`), prop changes, context changes, or parent component re-rendering. Changing a regular local variable (`let x = 10`) does NOT trigger a re-render.
- **Parent Re-renders:** By default, when a parent re-renders, ALL children re-render recursively unless memoized using `React.memo`.

### 5. Derived State, Single Source of Truth & Render vs Commit Phase
- **Derived State:** Computing values on the fly during render (e.g. `fullName = \`${firstName} ${lastName}\``) instead of keeping extra state, avoiding state sync bugs.
- **Single Source of Truth:** Each piece of data has ONE owner state in React.
- **Render vs Commit Phase:**
  - *Render Phase (Pure):* React calls components, generates VDOM, and diffs VDOM trees.
  - *Commit Phase (Side-effects):* React mutates the real browser DOM and executes `useEffect`.

---

# 🚀 FAST-TRACK MODULES

## 🟩 MODULE 1: Core Hooks & State Updates (COMPLETED)
- [x] Direct State Mutation vs Immutability
- [x] Functional State Updates (`setCount(prev => prev + 1)`) vs Direct State Values
- [x] State Batching (Automatic Batching in React 18)
- [x] `useEffect` execution timing, dependency arrays (`[]`, `[dep]`, no deps)
- [x] `useEffect` cleanup function & unmounting
- [x] `useRef` vs `useState` (DOM references & mutable values without re-rendering)

## 🟩 MODULE 2: API Fetching & Custom Hooks (`useFetch`) (COMPLETED)
- [x] Fetching API data in `useEffect`
- [x] Handling Loading, Error, and Empty states
- [x] Handling stale API responses / race conditions (Cleanup with AbortController)
- [x] Building reusable `useFetch(url)` Custom Hook

## 🟩 MODULE 3: Debounced Search & Forms (COMPLETED)
- [x] Controlled vs Uncontrolled inputs (`value` + `onChange` vs `useRef`)
- [x] Form submission, validation, and error states
- [x] Building reusable `useDebounce(value, delay)` Custom Hook
- [x] Live coding a Debounced Search Filter

## 🟨 MODULE 4: Performance & Memoization (IN PROGRESS: 1/4)
- [x] `useMemo` (memoizing expensive calculations)
- [ ] `useCallback` (memoizing function references)
- [ ] `React.memo` (memoizing component renders)
- [ ] Common React rendering output questions & fixes

## ⬜ MODULE 5: Rapid Mock Simulation
- [ ] Rapid-fire interview questions
- [ ] Live coding timed challenge
