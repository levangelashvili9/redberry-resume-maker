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
import { DataTypes } from "../../common/types";

import ChevronLeftSVG from "/assets/chevron-left.svg";
import useLocalStorage from "../../common/hooks/useLocalStorage";

type Props = {
  infoData: DataTypes;
  setInfoData: React.Dispatch<React.SetStateAction<DataTypes>>;
};

export const FormPage: React.FC<Props> = ({ infoData, setInfoData }) => {
  const [step, setStep] = useLocalStorage<number>("step", 0);

  const headingList: string[] = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const pageDisplay = (): JSX.Element | null => {
    if (step === 0) {
      return (
        <PersonalInfo
          infoData={infoData}
          setInfoData={setInfoData}
          setStep={setStep}
        />
      );
    } else if (step === 1) {
      return (
        <Experience
          infoData={infoData}
          setInfoData={setInfoData}
          setStep={setStep}
        />
      );
    } else if (step === 2) {
      return (
        <Education
          infoData={infoData}
          setInfoData={setInfoData}
          setStep={setStep}
        />
      );
    }
    return null;
  };

  const goBackHandler = () => {
    setInfoData({
      ...infoData,
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
        { institute: "", degree: "", due_date: "", description: "" },
      ],
      image: "",
    });
    setStep(0);
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
      <Resume infoData={infoData} />
    </Container>
  );
};
