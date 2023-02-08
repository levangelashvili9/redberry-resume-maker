import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PersonalInfo } from "./components/PersonalInfo";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Resume } from "../../common/components/Resume";

import {
  Container,
  FormSide,
  ChevronLeft,
  Heading,
  HeadingText,
  PageNumber,
} from "./FormPage.styled";
import { ExperienceTypes, InfoTypes } from "../../common/types";

import ChevronLeftSVG from "/assets/chevron-left.svg";

type Props = {
  file: string;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  infoData: InfoTypes;
  setInfoData: React.Dispatch<React.SetStateAction<InfoTypes>>;
  experienceData: ExperienceTypes;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceTypes>>;
};

export const FormPage: React.FC<Props> = ({
  file,
  setFile,
  infoData,
  setInfoData,
  experienceData,
  setExperienceData,
}) => {
  const [step, setStep] = useState<number>(0);

  const headingList: string[] = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const pageDisplay = (): JSX.Element | null => {
    if (step === 0) {
      return (
        <PersonalInfo
          infoData={infoData}
          setInfoData={setInfoData}
          file={file}
          setFile={setFile}
          setStep={setStep}
        />
      );
    } else if (step === 1) {
      return (
        <Experience
          experienceData={experienceData}
          setExperienceData={setExperienceData}
          setStep={setStep}
        />
      );
    } else if (step === 2) {
      return <Education setStep={setStep} />;
    }
    return null;
  };

  const goBackHandler = () => {
    setInfoData({
      name: "",
      surname: "",
      aboutMe: "",
      email: "",
      number: "",
    });
    setFile("");
  };

  return (
    <Container>
      <FormSide>
        <ChevronLeft>
          <Link to="/" onClick={goBackHandler}>
            <img src={ChevronLeftSVG} alt="" />
          </Link>
        </ChevronLeft>
        <Heading>
          <HeadingText>{headingList[step]}</HeadingText>
          <PageNumber>{step + 1}/3</PageNumber>
        </Heading>
        <React.Fragment>{pageDisplay()}</React.Fragment>
      </FormSide>
      <Resume infoData={infoData} file={file} />
    </Container>
  );
};
