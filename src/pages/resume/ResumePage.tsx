import { useState } from "react";
import { Link } from "react-router-dom";

import { Resume } from "../../common/components/Resume";
import { InfoTypes } from "../../common/types";
import {
  ChevronImage,
  Container,
  CrossImg,
  SuccessMessage,
  SuccessMessageText,
} from "./ResumePage.styled";

import ChevronLeftSVG from "/assets/chevron-left.svg";
import CrossSVG from "/assets/cross.svg";

type Props = {
  file: string;
  infoData: InfoTypes;
};

export const ResumePage: React.FC<Props> = ({ file, infoData }) => {
  const [messageIsOpen, setMessageIsOpen] = useState<boolean>(true);

  return (
    <Container>
      <Link to="/">
        <ChevronImage src={ChevronLeftSVG} alt="" />
      </Link>
      <Resume border file={file} infoData={infoData} />
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
