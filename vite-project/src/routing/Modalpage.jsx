import React, { useState } from "react";
import Modal from "../components/Modal";
import "../index.css";
function Modalpage() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    //  Modal/ Sidebar

    <div className="">
      <button
        className="h-15 w-60 bg-orange-300 p-5 m-5 border-2 border-b-gray-200 rounded-lg text-lg font-semibold"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal onClose={() => setModalOpen(false)} isOpen={isModalOpen}>
        <h2>Modal title</h2>
        <p>This is some content inside the modal.</p>
      </Modal>
    </div>
  );
}

export default Modalpage;
