# **React Interview Notes with Full Working Code Examples**

| Concept               | Notes / Example                           |
| --------------------- | ----------------------------------------- |
| Props                 | Read-only input, pass data/functions      |
| State                 | Local component state with `useState`     |
| useEffect             | Side effects, API calls, localStorage     |
| useCallback           | Memoize functions                         |
| useRef                | Access DOM, persist value                 |
| Context API           | Global state without prop drilling        |
| Redux                 | Centralized state management              |
| React Router          | SPA routing, `<Outlet>` for nested routes |
| Conditional Rendering | `? :` operator, `&&`                      |
| Lists & Keys          | `key` prop to avoid re-render issues      |
| Forms                 | Controlled / Uncontrolled                 |
| Lifecycle             | Mount / Update / Unmount hooks            |
| React.memo            | Prevent unnecessary re-render             |
| useReducer            | Complex state management                  |
| Lazy & Suspense       | Code splitting, load on demand            |
| Error Boundaries      | Catch runtime errors                      |
| Portals               | Render outside parent DOM                 |
| Synthetic Events      | React event wrapper, cross-browser safe   |


---

## **1. Props**

**Definition:** Props are read-only inputs passed from parent to child components.
**Purpose:** Pass data and functions down the component tree.

**Example:**

```jsx
// Parent.jsx
import React from 'react';
import Child from './Child';

export default function Parent() {
  return <Child name="John" age={25} />;
}

// Child.jsx
import React from 'react';

export default function Child({ name, age }) {
  return <p>Hello, {name}. You are {age} years old.</p>;
}
```

---

## **2. State & useState**

**Definition:** State is data managed inside a component.

**Example: Counter App**

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1); // functional update
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
```

**Notes:**

* Functional updates (`prev => newState`) are safe when new state depends on previous state.

---

## **3. useEffect**

**Purpose:** Handle side effects like API calls, localStorage, subscriptions.

**Example: Persist Todos in localStorage**

```jsx
import React, { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return <div>{todos.map(todo => <p key={todo}>{todo}</p>)}</div>;
}

export default Todos;
```

---

## **4. useCallback**

**Purpose:** Memoize functions to prevent unnecessary re-renders.

**Example: Password Generator**

```jsx
import React, { useState, useCallback, useEffect } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  }, [length]);

  useEffect(() => { generatePassword(); }, [generatePassword]);

  return (
    <div>
      <input type="number" value={length} onChange={e => setLength(+e.target.value)} />
      <p>Password: {password}</p>
      <button onClick={generatePassword}>Regenerate</button>
    </div>
  );
}

export default PasswordGenerator;
```

---

## **5. useRef**

**Purpose:** Access DOM elements or persist values between renders.

**Example: Copy to Clipboard**

```jsx
import React, { useRef } from 'react';

function CopyInput() {
  const inputRef = useRef();

  const copy = () => {
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} defaultValue="Copy me!" />
      <button onClick={copy}>Copy</button>
    </div>
  );
}

export default CopyInput;
```

---

## **6. Context API**

**Purpose:** Share state globally without prop-drilling.

**Example: Theme Context**

```jsx
import React, { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
export function useTheme() {
  return useContext(ThemeContext);
}

// Usage
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
}
```

---

## **7. Redux Example (Simple Todo)**

**Store & Slice**

```jsx
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => state.push(action.payload),
    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload)
  }
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const store = configureStore({ reducer: { todos: todosSlice.reducer } });
```

**App Usage**

```jsx
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, addTodo, deleteTodo } from './store';

function TodoApp() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAdd = () => {
    dispatch(addTodo({ id: Date.now(), text }));
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <Provider store={store}><TodoApp /></Provider>;
}
```

---

## **8. React Router (v6)**

**Purpose:** SPA routing, navigation without reload.

```jsx
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
function NotFound() { return <h2>404 - Not Found</h2>; }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
```

**Key Notes:**

* `<Outlet>` is where nested routes render.
* `useParams()` accesses dynamic route parameters.

---

## **9. Misc Concepts**

* **Functional Updates (`prev`)**

```jsx
setTodos(prev => [...prev, newTodo]);
```

* **useId** → generate unique IDs for inputs/labels

```jsx
const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />
```

* **e.preventDefault()** → prevent default form reload.

---

## ✅ **Quick Hook Reference Table**

| Hook          | Purpose                     |
| ------------- | --------------------------- |
| `useState`    | Local state                 |
| `useEffect`   | Side effects / lifecycle    |
| `useRef`      | DOM access / persist values |
| `useCallback` | Memoize functions           |
| `useContext`  | Consume context             |
| `useId`       | Generate unique IDs         |

---

Absolutely! Let’s cover the **important React concepts we didn’t cover yet**, so you have a **complete 15-min interview-ready checklist**. I’ll keep it concise and include examples/code where relevant.

---

# **Additional React Concepts to Know**

---

## **1. React Lifecycle (Functional vs Class)**

* Functional components use hooks (`useEffect`) to mimic lifecycle methods.
* Class Components Lifecycle:

  * `componentDidMount` → after first render
  * `componentDidUpdate` → after update
  * `componentWillUnmount` → cleanup
* Functional Equivalent:

```jsx
useEffect(() => {
  // Mount + Update
  return () => {
    // Cleanup (unmount)
  };
}, [dependencies]);
```

---

## **2. Conditional Rendering**

* Render UI based on state/props.

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

* Using short-circuit:

```jsx
{todos.length > 0 && <TodoList todos={todos} />}
```

---

## **3. Lists and Keys**

* Always use unique `key` prop for lists.

```jsx
<ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
```

---

## **4. Forms in React**

* Controlled components (state binds input value)

```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

* Uncontrolled components (useRef)

```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

## **5. Higher-Order Components (HOC)**

* Function that takes a component and returns a new component.

```jsx
const withLogger = Component => props => {
  console.log('Rendering', Component.name);
  return <Component {...props} />;
};
```

---

## **6. React Fragments**

* Avoid unnecessary div wrappers.

```jsx
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
```

---

## **7. Error Boundaries**

* Catch runtime errors in component tree.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? <h2>Something went wrong!</h2> : this.props.children; }
}
```

---

## **8. React.memo**

* Prevents re-render if props didn’t change.

```jsx
const Child = React.memo(({ data }) => <p>{data}</p>);
```

---

## **9. Lazy Loading & Suspense**

* Load components on demand (code splitting)

```jsx
import React, { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

---

## **10. Portals**

* Render children outside parent DOM hierarchy.

```jsx
import { createPortal } from 'react-dom';
return createPortal(<Modal />, document.getElementById('modal-root'));
```

---

## **11. useReducer**

* Alternative to `useState` for complex state logic.

```jsx
const initialState = 0;
function reducer(state, action) {
  switch(action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
}
const [count, dispatch] = useReducer(reducer, initialState);
```

---

## **12. React Strict Mode**

* Helps detect unsafe lifecycles, side effects, and deprecated APIs.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

## **13. Synthetic Events**

* React wraps native events for cross-browser compatibility.

```jsx
function handleClick(e) {
  e.preventDefault();
  console.log(e.target.value);
}
```

---

## **14. Key Optimization Tips**

* `React.memo` for pure components.
* `useCallback` / `useMemo` for expensive computations.
* Lazy load components and images.
* Avoid inline functions in render for heavy lists.

---



