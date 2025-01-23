import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);

  // const passwordGenerator = () => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (numberAllow) str += "0123456789";
  //   if (charAllow) str += "!@#$%&_-|~>?/";

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length);
  //     pass += str.charAt(char);
  //   }
  //   setPassword(pass);
  // };
  // useEffect(() => {
  //   passwordGenerator();
  // }, [length, numberAllow, charAllow]);

  // This is for memoiazation or for Optimization
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%&_-|~>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]); //setPassowrd is optional to remeber in calllback, if u use only password you we false into the infinite loop

  // This is for Changes like koi chnages ho to useEffect run krdo
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  console.log("Child rendered");
  return (
    <>
      <div className=" w-full max-w-md mx-auto h-max shadow-md rounded-lg  px-4 m-8 text-orange-600">
        <h1 className=" text-4xl m-8 text-center">Password Generator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4 font-bold text-black ">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-2 bg-white "
            placeholder="Password"
            readOnly
            ref={passwordRef} // Here we are taking ref of useRef to use for a copy fun
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={copyPasswordtoClipboard}
          >
            Copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={20}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={numberAllow}
              className=" cursor-pointer"
              onChange={() => {
                setNumberAllow((prev) => !prev); // Toggle the previous state(useing prev we get access to prepious vale(name can be different))
              }}
            />
            <label>Numbers</label>
          </div>

          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="charInput"
              defaultChecked={charAllow}
              className=" cursor-pointer"
              onChange={() => {
                setCharAllow((prev) => !prev); // Toggle the previous state
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
  The useCallback hook is used here for memoization and optimization purposes. 
  When a function is wrapped inside useCallback, React will memoize the function instance. This means that the function will only be re-created if any of the dependencies specified in the dependency array ([length, numberAllow, charAllow] in this case) change. It store in Cache


  The useEffect hook in this code snippet is used to trigger the passwordGenerator function whenever there's a change in the dependencies specified in the dependency array ([length, numberAllow, charAllow, passwordGenerator]). 
*/
