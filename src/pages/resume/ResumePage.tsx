import { useState } from "react";
import { Link } from "react-router-dom";
import { FinishedResume } from "./components/FinishedResume";

import {
  ChevronImage,
  Container,
  CrossImg,
  SuccessMessage,
  SuccessMessageText,
} from "./ResumePage.styled";

import ChevronLeftSVG from "/assets/chevron-left.svg";
import CrossSVG from "/assets/cross.svg";

export const ResumePage = () => {
  const [messageIsOpen, setMessageIsOpen] = useState<boolean>(true);

  return (
    <Container>
      <Link to="/">
        <ChevronImage src={ChevronLeftSVG} alt="" />
      </Link>
      <FinishedResume border />
      <SuccessMessage messageIsOpen={messageIsOpen}>
        <SuccessMessageText>რეზიუმე წარმატებით გაიგზავნა 🎉</SuccessMessageText>
        <CrossImg
          src={CrossSVG}
          alt=""
          onClick={() => setMessageIsOpen(false)}
        />
      </SuccessMessage>
    </Container>
  );
};
