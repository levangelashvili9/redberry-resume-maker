import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url("/assets/bg.png");
`;

export const ImgContainer = styled.div`
  border-bottom: 1px solid #000;
  padding: 25px 0;
  margin: 0 75px;
`;

export const Button = styled.button`
  width: 464px;
  height: 60px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #fff;

  background: #1a1a1a;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  z-index: 2;
  transition: all 0.1s;

  &:hover {
    background: #313131;
  }
`;

export const SecondLogo = styled.img`
  position: absolute;
  top: 43%;
  left: 55%;

  z-index: 1;
`;
