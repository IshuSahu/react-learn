import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  //we cannot directly load the object and array into the jsx so we have to make it sepratlyL
  let myobj={
    name: "Ishu",
    age:"21",
    role:"frontend"
  }
  // like this same array:
  let myArr = [1,2,3,4]
  return (
    <>
      <h1 className=' bg-lime-500 rounded-xl p-5 text-black mb-4' >Tailwind Css</h1>
      

      {/* Props */}
      {/* <Card cardName ="Marky" someObj = {myobj} newArr = {myArr}/> */}
      <Card userName ="Marky"  btnText ="click me"/>
      <Card userName ="Anabell" btnText="visit me"/>
    </>
  )
}

export default App
