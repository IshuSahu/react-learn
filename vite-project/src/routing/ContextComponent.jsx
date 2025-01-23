import React, { createContext, useContext, useState } from "react";
// step 1 Create a new CountContext
const CountContext = createContext();

// step 2: Create a CountContextProvider
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// step 3: Wrap your app inside the CountContextProvider
function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

// step 4: Consume the context in individual components
function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const ContextComponent = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default ContextComponent;
