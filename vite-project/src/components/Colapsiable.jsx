import React, { useState } from "react";

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" border-2 m-2 p-2 ">
      <div className="m-2 font-bold text-xl">
        {title}
        <button className=" text-3xl ml-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div>
        {isOpen && (
          <div className=" bg-slate-300 rounded-md p-2">{children}</div>
        )}
      </div>
    </div>
  );
}

export default Collapsible;
