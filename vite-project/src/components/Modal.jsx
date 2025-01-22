import React from "react";

function Modal({ isOpen, onClose, children }) {
  return !isOpen ? null : (
    <div className=" fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.5) flex items-center] ">
      <div className=" flex flex-col bg-white p-5 border-2">
        <button
          className="h-15 w-50 bg-orange-300 p-5 m-5 border-2 border-b-gray-200 rounded-lg text-lg font-semibold"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

// function Modal({ isOpen, onClose, children }) {
//   return !isOpen ? null : (
//     <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center transition-opacity duration-2000">
//       <div
//         className="flex flex-col bg-white p-5 border-2 transform transition-transform duration-2000"
//         style={{ animation: "fadeIn 2s forwards" }}
//       >
//         <button
//           className="h-15 w-50 bg-orange-300 p-5 m-5 border-2 border-gray-200 rounded-lg text-lg font-semibold"
//           onClick={onClose}
//         >
//           Close
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }

export default Modal;
