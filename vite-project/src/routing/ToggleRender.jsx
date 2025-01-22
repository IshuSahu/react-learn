import React, { useState } from "react";
import "../index.css";
function ToggleRender() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    // Conditional rendering
    <div className=" flex flex-col items-center">
      <button
        className=" h-15 w-50 bg-orange-300 p-5 m-5 border-2 border-b-gray-200 rounded-lg text-lg font-semibold"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
}

export default ToggleRender;
