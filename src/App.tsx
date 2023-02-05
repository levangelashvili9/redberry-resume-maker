import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { FormPage } from "./pages/form";
import { ResumePage } from "./pages/resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}

export default App;
