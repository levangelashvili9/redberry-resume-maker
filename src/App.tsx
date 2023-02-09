import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { FormPage } from "./pages/form";
import { ResumePage } from "./pages/resume";

import useLocalStorage from "./common/hooks/useLocalStorage";
import { DataTypes } from "./common/types";

function App() {
  const [file, setFile] = useLocalStorage("file", "");

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
    educations: [{ institute: "", degree: "", due_date: "", description: "" }],
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/form"
        element={
          <FormPage
            file={file}
            setFile={setFile}
            infoData={infoData}
            setInfoData={setInfoData}
          />
        }
      />
      <Route
        path="/resume"
        element={<ResumePage file={file} infoData={infoData} />}
      />
    </Routes>
  );
}

export default App;
