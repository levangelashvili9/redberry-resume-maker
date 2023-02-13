import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FinishedResume } from "./components/FinishedResume";

import {
  ChevronImage,
  Container,
  CrossImg,
  SuccessMessage,
  SuccessMessageText,
} from "./ResumePage.styled";

import { useLocation } from "react-router-dom";

import ChevronLeftSVG from "/assets/chevron-left.svg";
import CrossSVG from "/assets/cross.svg";

export const ResumePage = () => {
  const { state } = useLocation();
  const [messageIsOpen, setMessageIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      {state ? (
        <>
          <Link to="/">
            <ChevronImage src={ChevronLeftSVG} alt="" />
          </Link>
          <FinishedResume border state={state} />
          <SuccessMessage messageIsOpen={messageIsOpen}>
            <SuccessMessageText>
              რეზიუმე წარმატებით გაიგზავნა 🎉
            </SuccessMessageText>
            <CrossImg
              src={CrossSVG}
              alt=""
              onClick={() => setMessageIsOpen(false)}
            />
          </SuccessMessage>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};
