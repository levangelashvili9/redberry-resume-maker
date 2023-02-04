import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PersonalInfo } from "./components/PersonalInfo";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

import {
  Container,
  FormSide,
  ChevronLeft,
  Heading,
  HeadingText,
  ResumeSide,
  PageNumber,
} from "./Form.styled";

import ChevronLeftSVG from "/assets/chevron-left.svg";

export const Form = () => {
  const [step, setStep] = useState<number>(0);
  const headingList: string[] = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const pageDisplay = (): JSX.Element | null => {
    if (step === 0) {
      return <PersonalInfo />;
    } else if (step === 1) {
      return <Experience />;
    } else if (step === 2) {
      return <Education />;
    }
    return null;
  };

  return (
    <Container>
      <FormSide>
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
        <button onClick={() => setStep(0)}>1</button>
        <button onClick={() => setStep(1)}>2</button>
        <button onClick={() => setStep(2)}>3</button>
      </FormSide>
      <ResumeSide />
    </Container>
  );
};
