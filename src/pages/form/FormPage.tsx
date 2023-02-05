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
import { Pagination } from "./components/Pagination";

export const FormPage = () => {
  const [step, setStep] = useState<number>(0);
  const [data, setData] = useState<FormTypes>({
    name: "",
    surname: "",
    email: "",
  });
  const headingList: string[] = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const pageDisplay = (): JSX.Element | null => {
    if (step === 0) {
      return <PersonalInfo data={data} setData={setData} />;
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
        <Pagination step={step} setStep={setStep} />
      </FormSide>
      <Resume border={false} />
    </Container>
  );
};
