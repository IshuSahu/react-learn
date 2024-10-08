import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // this work as whenever counter is reset all the variable with name counter will react on that change
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  // INTERVIEW QUESTION
  // const addValue =() =>{
  //
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  /* setCounter(counter +1) ----> after all it will return only counter +1 becoz useState which is hook
    send the data in form of packages which will evenltuly think that all the setCounter doing same task

    How to Fixed this here we go: using callback inbuild method
    we it came from callback it show that it complete and then came
  */
  // }
  /*
   const addValue =() =>{
    setCounter((counter)=> counter +1)
    setCounter((counter)=> counter +1)
    setCounter((counter)=> counter +1)
  }
   */
  const subValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue} style={{ margin: ".5rem" }}>
        Increase counter {counter}{" "}
      </button>
      <br />
      <button onClick={subValue}>Decrease counter {counter}</button>
    </>
  );
}

export default App;
