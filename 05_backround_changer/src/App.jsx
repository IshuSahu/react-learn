import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className=" w-screen h-screen duration-500"
    style={{backgroundColor: color}}> 
    </div>

    <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className=" flex flex-wrap justify-center gap-2 shadow-xxl bg-white p-5 rounded-3xl">
        <button className=" text-black p-1 h-10 w-20 rounded-3xl bg-red-600" onClick={()=> setColor("red")}>red</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("orange")} style={{backgroundColor:"orange"}}>orange</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("yellow")} style={{backgroundColor:"yellow"}}>yellow</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("green")} style={{backgroundColor:"green"}}>green</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}}>blue</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("indigo")} style={{backgroundColor:"indigo "}}>indigod</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("violet")} style={{backgroundColor:"violet"}}>violet</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("gray")} style={{backgroundColor:"gray"}}>gray</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("yellow")} style={{backgroundColor:"yellow"}}>yellow</button>
        <button className=" text-black p-1 h-10 w-20 rounded-3xl" onClick={()=> setColor("#967bb6")} style={{backgroundColor:"#967bb6"}}>lavender</button>
      </div>
    </div>
    </>
  )
}

export default App
