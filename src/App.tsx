import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { FormPage } from "./pages/form";
import { ResumePage } from "./pages/resume";

import useLocalStorage from "./common/hooks/useLocalStorage";
import { DataTypes } from "./common/types";

function App() {
  const [infoData, setInfoData] = useLocalStorage<DataTypes>("infoData", {
    name: "",
    surname: "",
    about_me: "",
    email: "",
    phone_number: "",
    experiences: [
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ],
    educations: [
      {
        institute: "",
        degree_id: "",
        due_date: "",
        description: "",
      },
    ],
    image: "",
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/form"
        element={<FormPage infoData={infoData} setInfoData={setInfoData} />}
      />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}

export default App;
