import styled from "styled-components";

interface StatusProps {
  status?: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: #000000;
`;

export const Input = styled.input<StatusProps>`
  width: 100%;
  height: 48px;

  padding: 0 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #000000;

  border: 1px solid
    ${(props) => {
      switch (props.status) {
        case "validated":
          return "#98E37E";
        case "error":
          return "#EF5050";
        default:
          return "#BCBCBC";
      }
    }};

  border-radius: 4px;

  &:focus {
    /* outline: 2px solid #bcbcbc; */
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Hint = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;

  color: #2e2e2e;
`;
