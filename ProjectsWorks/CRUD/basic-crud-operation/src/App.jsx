// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Users";
import Updateuser from "./Updateuser";
import Createuser from "./Createuser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<Createuser />} />
          <Route path="/update/:id" element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
