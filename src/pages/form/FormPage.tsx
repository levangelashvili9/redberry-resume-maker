import React from "react";
import { Link } from "react-router-dom";

import { PersonalInfo } from "./components/PersonalInfo";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";

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
import resetData from "../../common/utils/resetData";

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

  return (
    <Container>
      <FormSide>
        <ChevronLeft>
          <Link to="/" onClick={() => resetData(setInfoData, setStep)}>
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
