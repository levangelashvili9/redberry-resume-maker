import { Link } from "react-router-dom";

import { Button, Container, ImgContainer, SecondLogo } from "./Home.styled";

import LogoSVG from "/assets/logo.svg";
import SecondLogoSVG from "/assets/logo-2.svg";

export const Home = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={LogoSVG} alt="" />
      </ImgContainer>
      <Link to="/form">
        <Button>რეზიუმეს დამატება</Button>
      </Link>
      <SecondLogo src={SecondLogoSVG} alt="" />
    </Container>
  );
};
