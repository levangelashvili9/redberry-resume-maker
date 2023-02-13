import styled from "styled-components";

interface SuccessMessageProps {
  messageIsOpen: boolean;
}

export const Container = styled.div`
  position: relative;
  padding: 20px 0;

  display: flex;
  justify-content: center;
`;

export const ChevronImage = styled.img`
  position: absolute;
  left: 45px;
  top: 48px;
`;

export const SuccessMessage = styled.div<SuccessMessageProps>`
  display: ${(props) => (props.messageIsOpen ? "block" : "none")};
  position: absolute;

  top: 53px;
  right: 70px;

  width: 427px;
  height: 167px;

  padding: 30px 40px;

  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const SuccessMessageText = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 43px;

  color: #1a1a1a;
`;

export const CrossImg = styled.img`
  position: absolute;
  top: 17px;
  right: 11px;

  cursor: pointer;
`;
