import styled from "styled-components";

interface PageControllerProps {
  isTwoButtons?: boolean;
}

export const Container = styled.div`
  margin-top: 150px;
`;

export const PageController = styled.div<PageControllerProps>`
  display: flex;
  justify-content: ${(props) =>
    props.isTwoButtons ? "space-between" : "flex-end"};
`;

const Button = styled.button`
  height: 48px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;

  color: #ffffff;

  background: #6b40e3;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const NextButton = styled(Button)`
  width: 151px;
`;

export const BackButton = styled(Button)`
  width: 113px;
`;
