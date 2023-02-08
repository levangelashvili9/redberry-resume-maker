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
import { FormTypes } from "./FormPage.types";

import ChevronLeftSVG from "/assets/chevron-left.svg";

export const FormPage = () => {
  const [step, setStep] = useState<number>(0);
  const [file, setFile] = useState("");
  const [data, setData] = useState<FormTypes>({
    name: "",
    surname: "",
    aboutMe: "",
    email: "",
    number: "",
  });
  const headingList: string[] = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const pageDisplay = (): JSX.Element | null => {
    if (step === 0) {
      return (
        <PersonalInfo
          data={data}
          setData={setData}
          file={file}
          setFile={setFile}
          setStep={setStep}
        />
      );
    } else if (step === 1) {
      return <Experience setStep={setStep} />;
    } else if (step === 2) {
      return <Education setStep={setStep} />;
    }
    return null;
  };

  return (
    <Container>
      <FormSide>
        {file ? <img src={file} alt="" /> : null}
        <ChevronLeft>
          <Link to="/">
            <img src={ChevronLeftSVG} alt="" />
          </Link>
        </ChevronLeft>
        <Heading>
          <HeadingText>{headingList[step]}</HeadingText>
          <PageNumber>{step + 1}/3</PageNumber>
        </Heading>
        <React.Fragment>{pageDisplay()}</React.Fragment>
      </FormSide>
      <Resume />
    </Container>
  );
};
