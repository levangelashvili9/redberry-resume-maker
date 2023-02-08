import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { FormPage } from "./pages/form";
import { ResumePage } from "./pages/resume";

import useLocalStorage from "./common/hooks/useLocalStorage";
import { ExperienceTypes, InfoTypes } from "./common/types";

function App() {
  const [file, setFile] = useLocalStorage("file", "");

  const [infoData, setInfoData] = useLocalStorage<InfoTypes>("infoData", {
    name: "",
    surname: "",
    aboutMe: "",
    email: "",
    number: "",
  });

  const [experienceData, setExperienceData] = useLocalStorage<ExperienceTypes>(
    "experienceData",
    {
      jobs: [{ position: "" }],
    }
  );

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
            experienceData={experienceData}
            setExperienceData={setExperienceData}
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
