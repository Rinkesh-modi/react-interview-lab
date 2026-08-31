# 🚨 REACT.JS --- HALF-DAY INTERVIEW MODE

**Preparation Progress:**
- 🔴 **Priority 1:** 4/32 Sections completed (12.5%)
- 🟡 **Priority 2:** 0/14 Sections completed (0%)
- 🟢 **Priority 3:** 0/14 Sections completed (0%)
- 📊 **Overall:** 4/60 Total Sections (6.6%)

> IMPORTANT: I have only **half a day** to prepare for my React.js interview.

> **Do NOT try to complete the entire question bank.** Use the priority levels below to decide what to practice.

> The goal is **interview readiness**, not React mastery.

---

# 🎯 React Interview Strategy

The interviewer can test React in two main ways:

### 1. Theory / Explanation

I should be able to explain:
- what React does
- why React re-renders
- how hooks work
- when to use each hook
- component lifecycle through hooks
- state vs props
- controlled vs uncontrolled components
- memoization
- context
- performance
- common React mistakes

### 2. Live Coding

I should be able to implement:
- a component from scratch
- state updates
- a form
- a list with keys
- API fetching
- loading/error states
- debounce search
- custom hooks
- pagination
- modal/toggle components
- memoization/performance fixes

---

# 🔴 PRIORITY 1 --- MUST COMPLETE

These are the highest-value React topics for the interview.

Do **not** move to Priority 2 until these are reasonably strong.

- React fundamentals
- JSX
- Components
- Props vs state
- Rendering and re-rendering
- State updates
- Lists and keys
- Event handling
- Forms
- `useState`
- `useEffect`
- `useRef`
- `useMemo`
- `useCallback`
- `React.memo`
- Dependency arrays
- Effect cleanup
- API calls
- Loading/error states
- Conditional rendering
- Lifting state up
- Controlled components
- Context API
- Custom hooks
- Stale closures
- Functional state updates
- Immutability
- Basic React performance
- Debounced search
- Practical React coding

---

# 🟡 PRIORITY 2 --- ONLY IF TIME

Practice these after Priority 1.

- `useReducer`
- `useContext` with reducer
- `forwardRef`
- `useImperativeHandle`
- Error boundaries
- Portals
- Lazy loading
- `Suspense`
- Code splitting
- Advanced component patterns
- Compound components
- Render props
- Higher-order components
- Optimistic UI
- Pagination/infinite scrolling
- Race-condition handling
- Advanced performance debugging
- React DevTools concepts
- Server-side rendering concepts

---

# 🟢 PRIORITY 3 --- SKIP FOR THIS INTERVIEW

Do not spend valuable half-day preparation time here unless the job description specifically requires them.

- Deep React internals
- Fiber implementation details
- Scheduler internals
- Reconciliation implementation details
- Writing a React renderer
- Advanced concurrent rendering internals
- React compiler internals
- Complex state-management architecture
- Advanced SSR framework internals
- Experimental APIs
- Building a state library from scratch
- Advanced animation architecture
- Complex design-system architecture
- Rare edge cases of React internals

---

# ⏱️ HALF-DAY PLAN

If I have approximately **4--5 hours**, use this order:

## First 90 minutes --- 🔴 React Core

1. JSX
2. Components
3. Props vs state
4. Rendering/re-rendering
5. State updates
6. Lists and keys
7. Controlled forms
8. Lifting state
9. Immutability

## Next 90 minutes --- 🔴 Hooks

10. `useState`
11. `useEffect`
12. dependency arrays
13. cleanup
14. `useRef`
15. `useMemo`
16. `useCallback`
17. `React.memo`
18. stale closures
19. custom hooks

## Next 60 minutes --- 🔴 Live Coding

Practice:
- counter
- todo list
- search
- debounced search
- API fetch
- custom hook
- modal/form

## Final 30--60 minutes --- Interview Simulation

- rapid-fire theory
- one output/re-render question
- one coding problem
- follow-up questions
- weak-area revision

---

# INTERVIEW MODE RULES

1. Always prioritize 🔴 topics.
2. Do not move to 🟡 topics while important 🔴 topics are weak.
3. Skip 🟢 topics completely for this interview.
4. Ask me **ONE question at a time**.
5. Do not reveal answers before I attempt them.
6. For coding questions, make me implement the solution.
7. Run my React code when possible.
8. Test edge cases.
9. Ask realistic interviewer follow-ups.
10. Make me explain concepts verbally.
11. If I understand a topic strongly, move on.
12. Track my weak areas.
13. Prefer practical interview questions over trivia.
14. Optimize for interview readiness, NOT completion.
15. When I make a React misconception, correct it immediately and record it in the Weak Areas Log.
16. For hooks, always ask **why**, **when**, and **what happens on re-render**.
17. For coding, ask me to explain the implementation before showing a solution.
18. Do not let me memorize definitions without understanding behavior.
19. After each topic/point is completed, write the key questions, summary notes, and code snippets in the repository (e.g., in `notes/` or relevant files) so I can easily revise later.
20. Focus exclusively on React and the `react-interview-lab` repository; skip non-React/JavaScript topics.

---

# INTERVIEW COMMANDS

- `hint` → Give me a small hint.
- `solution` → Show and explain the solution.
- `next` → Move to the next question.
- `explain` → Explain the concept differently.
- `interview mode` → Act like a real interviewer.
- `why` → Ask me to explain why the code works.
- `follow-up` → Ask a realistic interviewer follow-up.
- `code` → Give me a live coding problem.
- `rapid fire` → Ask short React questions randomly.
- `weak areas` → Show my current weak areas.
- `mock` → Start the final React mock interview.

---

# SECTION 1 --- React Fundamentals

## Theory

- [x] What is React?
- [x] Why is React used?
- [x] What is a component?
- [x] Functional component vs class component.
- [x] What is a React element?
- [x] Component vs element.
- [x] What does declarative UI mean?

## Interview Answer

Be able to answer:

> "Explain React to me in 30 seconds."

A strong answer should cover:
- component-based UI
- declarative programming
- state/props
- React updates the UI when data changes
- reusable components

---

# SECTION 2 --- JSX

- [x] Explain JSX.
- [x] Why do we use `{}` inside JSX?
- [x] How do you conditionally render JSX?
- [x] How do you render a list?
- [x] Why can't we use `class` in JSX?
- [x] What is `className`?
- [x] Why must components return one parent/root?
- [x] What are fragments?
- [x] `<>...</>` vs `<React.Fragment>`.

## Coding

Build:

``` jsx
function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
```

Then modify it to:
- conditionally show age
- show a fallback name
- render multiple users

---

# SECTION 3 --- Props vs State

- [x] What are props?
- [x] What is state?
- [x] Props vs state.
- [x] Can a child modify props?
- [x] Why should props be treated as immutable?
- [x] When should data be state?
- [x] What is derived state?
- [x] Why should unnecessary derived state be avoided?
- [x] What does "single source of truth" mean?

## Rapid-Fire

Answer in under 20 seconds:

> "What's the difference between props and state?"

---

# SECTION 4 --- Rendering & Re-rendering

This is a **high-priority interview topic**.

- [x] What causes a React component to render?
- [x] Does changing a normal local variable trigger a render?
- [x] Does changing state trigger a render?
- [x] Does changing props trigger a render?
- [x] Does a parent re-render cause its children to render?
- [x] What does React do after a render?
- [x] What is reconciliation?
- [x] What is the virtual DOM?
- [x] Does React update the entire DOM after every render?
- [x] Render phase vs commit phase --- basic understanding.

## Output / Reasoning Practice

``` jsx
function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Questions:

- [ ] When does `"App rendered"` run?
- [ ] Does clicking the button cause a re-render?
- [ ] What happens if `setCount(count)` is called?
- [ ] What happens if a local variable changes instead?

---

# SECTION 5 --- State Updates

- [ ] Why shouldn't state be mutated directly?
- [ ] Why does React care about immutability?
- [ ] How do you update an object in state?
- [ ] How do you update an array in state?
- [ ] Why use functional updates?
- [ ] What is batching?
- [ ] What happens when multiple state updates occur?

## Important Coding Question

Predict:

``` jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

What is the final value?

Then compare:

``` jsx
function handleClick() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
}
```

Explain why the behavior differs.

---

# SECTION 6 --- Lists & Keys

- [ ] Render arrays using `.map()`.
- [ ] Why does React need `key`?
- [ ] What makes a good key?
- [ ] Why is array index usually a bad key?
- [ ] What happens when list order changes?
- [ ] Why should keys be stable?
- [ ] What happens when keys change between renders?

## Coding

Build:

``` jsx
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];
```

Render the list correctly.

Then answer:

> Why is `key={user.id}` better than `key={index}`?

---

# SECTION 7 --- Event Handling

- [ ] Handle click events.
- [ ] Handle input events.
- [ ] Pass arguments to event handlers.
- [ ] `event.preventDefault()`.
- [ ] Synthetic events --- basic understanding.
- [ ] Event bubbling --- basic understanding.
- [ ] Event delegation --- practical understanding.

## Coding

Create a button that:
- increments a counter
- receives an event
- logs the clicked element

---

# SECTION 8 --- Forms

**Very likely live-coding topic.**

- [ ] Controlled components.
- [ ] Uncontrolled components.
- [ ] `value` + `onChange`.
- [ ] Form submission.
- [ ] `preventDefault`.
- [ ] Form validation.
- [ ] Multiple form fields.
- [ ] Checkbox/radio/select handling.

## Coding

Build a controlled login form:

``` jsx
function LoginForm() {
  // email
  // password
  // submit
}
```

Requirements:
- controlled inputs
- validation
- submit handler
- loading state
- error message
- reset after successful submission

---

# SECTION 9 --- useState

## Theory

- [ ] What is `useState`?
- [ ] What does it return?
- [ ] Why does updating state trigger rendering?
- [ ] Why shouldn't state be mutated directly?
- [ ] Functional updates.
- [ ] Lazy initialization.
- [ ] State with objects.
- [ ] State with arrays.
- [ ] Multiple state variables.
- [ ] When should state be split?

## Coding

Implement:

``` jsx
function Counter() {
  // increment
  // decrement
  // reset
}
```

Then extend it with:
- step value
- min/max
- loading state

---

# SECTION 10 --- useEffect ⭐⭐⭐

**This is one of the most important React interview topics.**

- [ ] What is `useEffect`?
- [ ] Why does React need effects?
- [ ] What is an external system?
- [ ] When does an effect run?
- [ ] Dependency array.
- [ ] No dependency array.
- [ ] Empty dependency array.
- [ ] Specific dependencies.
- [ ] Cleanup function.
- [ ] Effect cleanup timing.
- [ ] Why effects can run more than once in development.
- [ ] Why effects should not be used for every calculation.
- [ ] Effect vs event handler.
- [ ] Fetching data with `useEffect`.

## Understand These Three

``` jsx
useEffect(() => {
  console.log("runs after every render");
});
```

``` jsx
useEffect(() => {
  console.log("runs after initial mount");
}, []);
```

``` jsx
useEffect(() => {
  console.log("runs when count changes");
}, [count]);
```

Be able to explain exactly **when each runs**.

## Cleanup

``` jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Explain:
- [ ] Why cleanup exists.
- [ ] When cleanup runs.
- [ ] What happens on unmount.
- [ ] What happens before an effect re-runs.

---

# SECTION 11 --- useEffect + API Calls

**Very high-value live coding.**

Build:

``` jsx
function Users() {
  // fetch users
}
```

Requirements:

- [ ] loading state
- [ ] success state
- [ ] error state
- [ ] API request
- [ ] cleanup / stale-request handling
- [ ] render list
- [ ] empty state
- [ ] retry

## Follow-Ups

Interviewer may ask:

1. Why use `useEffect`?
2. What happens if the dependency array is omitted?
3. What happens if `users` is added to the dependency array?
4. How would you cancel an outdated request?
5. How would you prevent stale results?
6. How would you retry?
7. How would you cache the response?

---

# SECTION 12 --- Dependency Arrays

- [ ] What is a dependency?
- [ ] Why does React care about dependencies?
- [ ] What happens when a dependency changes?
- [ ] Why can objects/functions cause effects to re-run?
- [ ] What is a stale closure?
- [ ] Why is disabling exhaustive-deps dangerous?

## Coding / Reasoning

``` jsx
function Search({ query }) {
  useEffect(() => {
    fetch(`/api/search?q=${query}`);
  }, [query]);

  return null;
}
```

Explain why `query` belongs in the dependency array.

---

# SECTION 13 --- useRef

- [ ] What is `useRef`?
- [ ] Does changing `ref.current` cause a render?
- [ ] Difference between `useRef` and `useState`.
- [ ] Accessing DOM elements.
- [ ] Storing mutable values.
- [ ] Previous value pattern.
- [ ] Timer/interval storage.

## Coding

Create:

``` jsx
function InputFocus() {
  // focus input on button click
}
```

Use `useRef`.

## Follow-Up

> "Why wouldn't you use state for the DOM element reference?"

---

# SECTION 14 --- useMemo

- [ ] What is `useMemo`?
- [ ] What does it memoize?
- [ ] When should it be used?
- [ ] When should it NOT be used?
- [ ] Dependency array.
- [ ] Expensive computation example.
- [ ] Memoization tradeoffs.

Example:

``` jsx
const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.includes(search)
  );
}, [users, search]);
```

Be able to explain:
- [ ] What is cached?
- [ ] When is the calculation repeated?
- [ ] Is `useMemo` required for correctness?
- [ ] Can overusing `useMemo` hurt performance/readability?

---

# SECTION 15 --- useCallback

- [ ] What is `useCallback`?
- [ ] What does it memoize?
- [ ] Why can function identity matter?
- [ ] How does it relate to `React.memo`?
- [ ] Dependency array.
- [ ] When should it be used?
- [ ] When is it unnecessary?

Example:

``` jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

Explain what stays stable and what does not.

---

# SECTION 16 --- React.memo

- [ ] What does `React.memo` do?
- [ ] What problem does it solve?
- [ ] When can it prevent a child re-render?
- [ ] How does shallow prop comparison work?
- [ ] Why can object/function props defeat memoization?
- [ ] Relationship between `React.memo`, `useMemo`, and `useCallback`.

## Interview Scenario

``` jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Click</button>;
});
```

Parent:

``` jsx
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
}
```

Question:

> Will `Child` re-render when `count` changes? Why?

Then fix it using `useCallback`.

---

# SECTION 17 --- useMemo vs useCallback vs React.memo

Be able to answer this in under 60 seconds:

### `useMemo`

Memoizes a **computed value**.

### `useCallback`

Memoizes a **function reference**.

### `React.memo`

Memoizes a **component render based on props**.

## Interview Question

> "Do you always need useCallback when using React.memo?"

Answer: **No.**

Explain why.

---

# SECTION 18 --- Stale Closures ⭐⭐⭐

- [ ] What is a stale closure?
- [ ] Why can effects capture old state?
- [ ] Why can timers capture old state?
- [ ] How can functional updates help?
- [ ] How can dependency arrays help?
- [ ] When can refs help?

## Coding

Understand:

``` jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <button onClick={() => setCount(c => c + 1)}>
    {count}
  </button>;
}
```

Question:

> Why does the interval keep seeing the old `count`?

Then fix it.

---

# SECTION 19 --- Lifting State Up

- [ ] What is lifting state?
- [ ] When should state move to a parent?
- [ ] How does a child update parent state?
- [ ] What is prop drilling?
- [ ] When should Context be considered?

## Coding

Build:

``` text
Parent
 ├── SearchInput
 └── UserList
```

The search input should filter the user list.

Do this by keeping the shared state in the parent.

---

# SECTION 20 --- Conditional Rendering

Practice:

- [ ] `if`
- [ ] ternary
- [ ] `&&`
- [ ] loading states
- [ ] error states
- [ ] empty states
- [ ] early returns

## Coding

Create a component with:

``` text
Loading
Error
Empty
Success
```

and switch between all four states.

---

# SECTION 21 --- Context API

- [ ] What problem does Context solve?
- [ ] `createContext`.
- [ ] `Provider`.
- [ ] `useContext`.
- [ ] Context vs props.
- [ ] Context vs state management library.
- [ ] Why can Context cause unnecessary re-renders?
- [ ] When should Context be avoided?

## Coding

Create a theme context:

``` jsx
const ThemeContext = createContext();
```

Build:
- ThemeProvider
- ThemeButton
- ThemeDisplay

No prop drilling.

---

# SECTION 22 --- Custom Hooks

**Very likely practical interview topic.**

- [ ] What is a custom hook?
- [ ] Why create one?
- [ ] Naming convention: `useSomething`.
- [ ] Rules of hooks.
- [ ] Reusing stateful logic.
- [ ] Custom hook vs component.

## Coding

Implement:

``` jsx
function useFetch(url) {
  // return:
  // data
  // loading
  // error
}
```

Then:

``` jsx
const { data, loading, error } = useFetch("/api/users");
```

## Follow-Ups

- [ ] How would you add cancellation?
- [ ] How would you add retry?
- [ ] How would you cache?
- [ ] How would you handle changing `url`?
- [ ] How would you prevent stale responses?

---

# SECTION 23 --- Rules of Hooks

- [ ] Only call hooks at the top level.
- [ ] Don't call hooks inside loops.
- [ ] Don't call hooks inside conditions.
- [ ] Don't call hooks inside nested functions.
- [ ] Hooks can be called from React components.
- [ ] Hooks can be called from custom hooks.

Explain **why** hooks must be called in a consistent order.

---

# SECTION 24 --- Immutability

Understand how to update:

## Object

``` jsx
setUser(prev => ({
  ...prev,
  name: "Rinkesh"
}));
```

## Array

``` jsx
setUsers(prev =>
  prev.map(user =>
    user.id === id
      ? { ...user, active: true }
      : user
  )
);
```

## Delete

``` jsx
setUsers(prev =>
  prev.filter(user => user.id !== id)
);
```

Be able to explain why direct mutation is problematic.

---

# SECTION 25 --- Practical React Coding #1: Todo App

Build a Todo app from scratch.

Requirements:

- [ ] Add todo
- [ ] Delete todo
- [ ] Toggle completed
- [ ] Filter all/active/completed
- [ ] Controlled input
- [ ] Stable keys
- [ ] Immutable state updates

### Follow-Ups

- How would you persist todos?
- How would you debounce saving?
- How would you optimize a large todo list?
- How would you split components?

---

# SECTION 26 --- Practical React Coding #2: Search

Build:

``` text
Input
 ↓
Debounce
 ↓
API
 ↓
Loading
 ↓
Results
```

Requirements:

- [ ] controlled input
- [ ] debounce
- [ ] API request
- [ ] loading
- [ ] error
- [ ] empty result
- [ ] stale request protection

### Follow-Ups

- Why debounce?
- Why not call the API on every keystroke?
- What if request A finishes after request B?
- How would you cancel A?
- How would you cache previous searches?

---

# SECTION 27 --- Practical React Coding #3: Modal

Build:

``` jsx
<Modal
  open={open}
  onClose={handleClose}
/>
```

Requirements:

- [ ] open/close
- [ ] close button
- [ ] backdrop click
- [ ] Escape key
- [ ] cleanup event listener
- [ ] reusable API

### Follow-Up

> "How would you render this outside the normal DOM hierarchy?"

Expected concept: **Portal**.

---

# SECTION 28 --- Practical React Coding #4: Pagination

Build a paginated user list.

Requirements:

- [ ] page state
- [ ] API request
- [ ] next
- [ ] previous
- [ ] loading
- [ ] error
- [ ] disable invalid buttons

Then answer:

> "How would you implement infinite scrolling instead?"

---

# SECTION 29 --- React Performance

Know these concepts:

- [ ] unnecessary re-renders
- [ ] `React.memo`
- [ ] `useMemo`
- [ ] `useCallback`
- [ ] component splitting
- [ ] stable keys
- [ ] virtualization --- basic concept
- [ ] lazy loading
- [ ] code splitting
- [ ] avoiding unnecessary state
- [ ] avoiding unnecessary effects

## Interview Question

> "A React page is slow. What would you investigate first?"

Answer with a debugging process, not just "useMemo".

---

# SECTION 30 --- Common React Mistakes

Be able to identify:

- [ ] Mutating state directly.
- [ ] Using array index as key for dynamic lists.
- [ ] Missing effect dependencies.
- [ ] Infinite effect loops.
- [ ] Fetching data incorrectly in effects.
- [ ] Unnecessary effects.
- [ ] Overusing `useMemo`.
- [ ] Overusing `useCallback`.
- [ ] Using Context for everything.
- [ ] Putting too much state in one component.
- [ ] Prop drilling unnecessarily.
- [ ] Ignoring loading/error/empty states.
- [ ] Creating unstable object/function props unnecessarily.
- [ ] Forgetting cleanup for subscriptions/timers/listeners.

---

# SECTION 31 --- React Output / Behavior Questions

Do these **without running first**.

## Q1 --- State Updates

``` jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

What is the result?

---

## Q2 --- Functional Updates

``` jsx
const handleClick = () => {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
};
```

What is the result?

---

## Q3 --- Effect

``` jsx
useEffect(() => {
  console.log("effect");
}, []);
```

When does it run?

---

## Q4 --- Effect Dependency

``` jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

When does it run?

---

## Q5 --- Cleanup

``` jsx
useEffect(() => {
  console.log("setup");

  return () => {
    console.log("cleanup");
  };
}, [count]);
```

Explain the order when `count` changes.

---

## Q6 --- useRef

``` jsx
const ref = useRef(0);

ref.current++;

console.log(ref.current);
```

Does this cause a React re-render?

---

## Q7 --- Memoized Child

``` jsx
const Child = React.memo(({ user }) => {
  console.log("render");
  return <div>{user.name}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const user = { name: "Rinkesh" };

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        {count}
      </button>

      <Child user={user} />
    </>
  );
}
```

Will `Child` re-render when `count` changes?

Explain why.

---

# SECTION 32 --- Rapid-Fire Theory

Antigravity should ask these randomly:

1. What is React?
2. What is JSX?
3. What is a component?
4. Props vs state?
5. What causes a re-render?
6. What is reconciliation?
7. Why are keys needed?
8. Why shouldn't state be mutated?
9. What is `useState`?
10. What is `useEffect`?
11. When does `useEffect` run?
12. What is the dependency array?
13. What is effect cleanup?
14. Why can an effect run more than once in development?
15. What is `useRef`?
16. `useRef` vs `useState`?
17. What is `useMemo`?
18. What is `useCallback`?
19. What is `React.memo`?
20. `useMemo` vs `useCallback`?
21. `React.memo` vs `useMemo`?
22. What is a stale closure?
23. What is lifting state up?
24. What is controlled vs uncontrolled input?
25. What is Context?
26. When should Context be avoided?
27. What is a custom hook?
28. What are the Rules of Hooks?
29. Why does array index make a bad key?
30. How do you fetch data in React?
31. How do you handle loading/error states?
32. How do you prevent stale API responses?
33. How do you debounce a search input?
34. How do you optimize a slow React component?
35. How do you avoid unnecessary re-renders?
36. What is a Portal?
37. What is lazy loading?
38. What is code splitting?
39. What is an Error Boundary?
40. What is `useReducer`?

---

# 🟡 PRIORITY 2 --- DEEPER REACT

Only start this section after Priority 1 is strong.

# SECTION 33 --- useReducer

- [ ] What problem does `useReducer` solve?
- [ ] `state`
- [ ] `dispatch`
- [ ] `action`
- [ ] `reducer`
- [ ] When is `useReducer` better than `useState`?
- [ ] How does it work with Context?

## Coding

Build a counter:

``` jsx
const initialState = {
  count: 0
};

function reducer(state, action) {
  // implement
}
```

Support:
- increment
- decrement
- reset

---

# SECTION 34 --- useContext + useReducer

Build a small global auth state:

``` text
AuthProvider
 ├── Login
 └── Profile
```

Support:
- login
- logout
- current user

Explain why this can be useful without introducing Redux.

---

# SECTION 35 --- Portals

- [ ] What is a Portal?
- [ ] Why use one for modals?
- [ ] Does the component remain in the React tree?
- [ ] How does event propagation behave?

## Coding

Create a modal using:

``` jsx
createPortal(...)
```

---

# SECTION 36 --- Error Boundaries

- [ ] What is an Error Boundary?
- [ ] What errors does it catch?
- [ ] What errors does it NOT catch?
- [ ] Why are Error Boundaries useful?
- [ ] Basic implementation concept.

Know this conceptually unless the interview specifically asks for implementation.

---

# SECTION 37 --- Lazy Loading & Suspense

- [ ] `React.lazy`
- [ ] `Suspense`
- [ ] Code splitting
- [ ] Loading fallback
- [ ] Why lazy load large components?

Example:

``` jsx
const Dashboard = lazy(() => import("./Dashboard"));
```

---

# SECTION 38 --- forwardRef & useImperativeHandle

Know the purpose of:

``` jsx
forwardRef(...)
```

and:

``` jsx
useImperativeHandle(...)
```

Understand when imperative APIs are appropriate.

Do not spend significant time implementing this unless required.

---

# SECTION 39 --- Advanced Component Patterns

Know conceptually:

- [ ] Compound components.
- [ ] Render props.
- [ ] Higher-order components.
- [ ] Composition.
- [ ] Children as a prop.
- [ ] Component inversion of control.

Be able to explain:

> "Why is composition often preferred over inheritance in React?"

---

# SECTION 40 --- Race Conditions

Understand:

``` text
Request A starts
Request B starts
Request B finishes
Request A finishes
```

Problem:

The old response can overwrite the newer result.

Know how to solve it with:
- [ ] AbortController
- [ ] request IDs
- [ ] cleanup
- [ ] ignoring stale responses

---

# SECTION 41 --- Infinite Scrolling

Design:

``` text
scroll
 ↓
detect near bottom
 ↓
fetch next page
 ↓
append results
```

Consider:
- [ ] duplicate requests
- [ ] loading state
- [ ] end of data
- [ ] errors
- [ ] stale requests
- [ ] virtualization

---

# SECTION 42 --- Optimistic UI

Understand:

``` text
User action
 ↓
Update UI immediately
 ↓
API request
 ↓
Success → keep update
Failure → rollback
```

Be able to explain a practical example such as liking a post.

---

# 🟢 PRIORITY 3 --- LOW PRIORITY

Skip unless the interviewer/job specifically requires these.

# SECTION 43 --- React Internals

Know only at a high level:

- [ ] Fiber
- [ ] reconciliation internals
- [ ] scheduling
- [ ] render phase
- [ ] commit phase
- [ ] concurrent rendering

Do not spend half-day preparation time memorizing implementation details.

---

# SECTION 44 --- Server-Side Rendering

Know basic concepts:

- [ ] SSR
- [ ] CSR
- [ ] hydration
- [ ] static generation
- [ ] server components --- high-level awareness

Focus on conceptual differences rather than framework internals.

---

# SECTION 45 --- Advanced Architecture

Only skim:

- [ ] feature-based folder structure
- [ ] reusable component architecture
- [ ] design systems
- [ ] state-management architecture
- [ ] large-scale React performance
- [ ] micro-frontends

---

# SECTION 46 --- Practical Interview Challenges

These should be selected randomly after Priority 1.

## Challenge 1 --- Counter

Build a counter with:
- increment
- decrement
- reset
- step

---

## Challenge 2 --- Todo

Build:
- add
- delete
- toggle
- filter
- edit

---

## Challenge 3 --- Search

Build:
- controlled input
- debounce
- API request
- loading
- error
- empty state

---

## Challenge 4 --- Fetch Hook

Implement:

``` jsx
const {
  data,
  loading,
  error,
  refetch
} = useFetch(url);
```

---

## Challenge 5 --- Modal

Implement:

``` jsx
<Modal
  open={open}
  onClose={close}
/>
```

Support Escape and backdrop click.

---

## Challenge 6 --- Pagination

Implement a paginated API list.

---

## Challenge 7 --- Tabs

Build:

``` text
Profile | Settings | Activity
```

Only render the active tab.

---

## Challenge 8 --- Accordion

Build an accordion.

Requirements:
- open/close
- optionally only one item open
- reusable component

---

## Challenge 9 --- Shopping Cart

Implement:
- add item
- remove item
- quantity
- total
- empty cart

---

## Challenge 10 --- Debounced Search

Implement:

``` jsx
useDebounce(value, delay)
```

Then use it in a search component.

---

# SECTION 47 --- Final Mock Interview

Antigravity should simulate a **30--40 minute React.js interview**.

## Round 1 --- Theory

Ask 6 random questions covering:

- React fundamentals
- state
- rendering
- hooks
- effects
- performance
- Context

## Round 2 --- React Behavior

Give 2 questions involving:

- state updates
- effect dependencies
- cleanup
- memoization
- stale closures

## Round 3 --- Coding

Give ONE realistic problem:

- Todo
- debounce search
- custom `useFetch`
- modal
- pagination
- tabs
- accordion

Do **not** tell me the pattern beforehand.

## Round 4 --- Follow-Ups

Challenge my implementation with:

- edge cases
- re-renders
- stale closures
- cleanup
- performance
- API failures
- race conditions
- component design

## Round 5 --- Score

Score 1--5:

- React fundamentals
- Hooks
- State management
- Rendering understanding
- Practical coding
- Async/API handling
- Performance
- Debugging
- Component design
- Communication
- Edge-case thinking

Then output:

### Strong Areas

### Weak Areas

### Must Revise

---

# 🎯 HALF-DAY FINAL REVISION ORDER

If I have very little time, revise exactly in this order:

## 🔥 Tier A --- Absolutely Know

1. React fundamentals
2. JSX
3. Props vs state
4. Re-rendering
5. State updates
6. Immutability
7. Lists + keys
8. Controlled forms
9. `useState`
10. `useEffect`
11. Dependency arrays
12. Cleanup
13. `useRef`
14. `useMemo`
15. `useCallback`
16. `React.memo`
17. Stale closures
18. Lifting state
19. Context
20. Custom hooks

## 🔥 Tier B --- Must Be Able to Code

21. Counter
22. Todo
23. Form
24. API fetch
25. Debounced search
26. `useFetch`
27. Modal
28. Pagination

## 🟡 Tier C --- If Time Remains

29. `useReducer`
30. Portals
31. Error boundaries
32. Lazy loading
33. Suspense
34. Race conditions
35. Optimistic UI
36. Infinite scrolling

## 🟢 Tier D --- Skip

37. Fiber internals
38. Scheduler internals
39. Advanced reconciliation
40. Complex state architecture
41. Advanced SSR internals

---

# 🧠 Interview Answer Framework

For every major React concept, practice answering:

**1. What is it?**

**2. Why does React need it?**

**3. How does it work?**

**4. When would I use it?**

**5. When would I NOT use it?**

**6. What are the tradeoffs?**

**7. Can I implement a simple version?**

For hooks specifically:

**1. What problem does this hook solve?**

**2. What happens on render?**

**3. What happens when dependencies change?**

**4. Does it cause a re-render?**

**5. What happens during cleanup?**

---

# ⚠️ Weak Areas Log

Antigravity should add mistakes here as I practice.

Examples:

- Confusing render with DOM update.
- Thinking every parent re-render always means expensive DOM changes.
- Mutating state directly.
- Using array index as a key without understanding the consequences.
- Confusing `useMemo` with `useCallback`.
- Thinking `useCallback` prevents a component from rendering by itself.
- Thinking `useRef` updates cause re-renders.
- Missing `useEffect` dependencies.
- Creating infinite effect loops.
- Using `useEffect` for derived values that could be calculated during render.
- Not understanding cleanup timing.
- Confusing controlled and uncontrolled inputs.
- Not understanding stale closures.
- Using Context for state that should remain local.
- Not handling loading/error/empty API states.
- Not considering stale API responses.
- Overusing memoization without measuring performance.

---

# 📝 Final Revision Notes

At the end, write my own **30--60 second explanation** for:

- React
- JSX
- Components
- Props vs state
- Re-rendering
- reconciliation
- keys
- `useState`
- `useEffect`
- dependency arrays
- effect cleanup
- `useRef`
- `useMemo`
- `useCallback`
- `React.memo`
- stale closures
- controlled components
- lifting state
- Context
- custom hooks
- Rules of Hooks
- `useReducer`
- debounced search
- React performance

---

# 🚨 FINAL RULE

I have **half a day**.

Do not let me spend 30 minutes learning an obscure React internal concept while I still cannot confidently:

1. Explain `useEffect`.
2. Explain dependency arrays.
3. Explain `useRef`.
4. Explain `useMemo` vs `useCallback`.
5. Explain `React.memo`.
6. Explain why React re-renders.
7. Build a controlled form.
8. Fetch API data with loading/error states.
9. Build a debounced search.
10. Create a custom hook.
11. Explain stale closures.
12. Handle immutable state updates.

**Interview readiness > question completion.**
