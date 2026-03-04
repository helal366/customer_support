# What is JSX, and why is it used?
### Answer: 
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


























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
