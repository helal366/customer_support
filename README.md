# What is JSX, and why is it used?
## Answer: 
#### JSX
```
JSX means JavaScript XML. This looks like HTML, but it’s actually JavaScript.

Example:
const element = <h1>Hello, World!</h1>;

JSX is converted or compiled into regular JavaScript.
The above code becomes something like:

React.createElement("h1", null, "Hello, World!");

So JSX is just a cleaner way to write React.createElement().
```

#### Why JSX is Used
- Makes UI Code Easier to Read
```
Without JSX:

React.createElement("div", null,
  React.createElement("h1", null, "Title")
);

With JSX:

<div>
  <h1>Title</h1>
</div>

Much cleaner 
```

- Allows JavaScript Inside HTML
```
You can use {} to run JS inside UI.

const name = "Faisal";
<h1>Hello {name}</h1>

This is powerful for:
Dynamic content
Conditional rendering
Looping lists
State-based UI
```

- Prevents Some Bugs
```
JSX:

Forces one parent element
Makes UI structure predictable
Encourages component organization
```

# What is the difference between State and Props?
## Answer: 
#### State:
- State is internal data of a component.
- The component itself controls it.
- State is mutable. It can change.
- State is used for dynamic behavior.

#### Props:
- Props are used to pass data from parent to child.
- The parent component controls Props.
- Props are read-only. 
- Props are used for communication between components.

# What is the useState hook, and how does it work?
## Answer:
### useState hook:
```
    In React, useState Hook is that allows functional components to store and manage state.
```
#### Basic Syntax:
```
const [state, setState] = useState(initialValue);
```
- It returns:

* state variable
* function to update that state

##### Example:
```
const [open, setOpen] = useState(false);
open → current state value
setOpen → function to update it
false → initial value
```
#### How It Works Internally

- When the state is called:
```
setOpen(true);
```
- React:

* Updates the state value
* Re-renders the component
* Updates the UI

###### State updates are asynchronous.


# How can you share state between components in React?
## Answer: There are several ways to share state between components, depending on app size and complexity.
### 1. Lift State Up (Most Common & Recommended)
- If two components need the same state:

* Move the state to their closest common parent
* Pass it down via props

- Example
```
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <Button setCount={setCount} />
    </>
  );
}
```
count lives in Parent
Display reads it
Button updates it

* Simple
* Clean
* React best practice

### 2. Props Drilling
- Can be passed props through multiple layers.
* App → Layout → Dashboard → Sidebar → Button

### 3️. Context API (Avoid Prop Drilling)

When many components need access to the same state (like user, theme, language).
```
const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navbar />
    </UserContext.Provider>
  );
}

Now Navbar can access user without passing props manually.

* Good for global data
* Cleaner than deep prop drilling





























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
