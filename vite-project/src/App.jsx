import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import GreetingPage from "./routing/GreetingPage";
import CardPage from "./routing/CardPage";
import Modal from "./components/Modal";
import ToggleRender from "./routing/ToggleRender";
import CollapsiblePage from "./routing/CollapsiblePage";
import UserefExample from "./routing/userefExample";
import ContextComponent from "./routing/ContextComponent";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap each component in JSX */}
        <Route path="*" element={<GreetingPage />} />
        <Route path="toggle" element={<ToggleRender />} />
        <Route path="card" element={<CardPage />} />
        <Route path="modal" element={<Modal />} />
        <Route path="collapsible" element={<CollapsiblePage />} />
        <Route path="useref" element={<UserefExample/>} />
        <Route path="contextapi" element={<ContextComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}
