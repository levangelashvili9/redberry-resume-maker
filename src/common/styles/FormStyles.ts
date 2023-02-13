import styled from "styled-components";

interface StatusProps {
  status?: any;
}

interface ImgProps {
  isHidden: boolean;
}

interface PageControllerProps {
  isTwoButtons?: boolean;
}

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InputElement = styled.div`
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

export const InputDiv = styled.div`
  position: relative;
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
    border: none;
    outline: 2px solid #bcbcbc;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ValidatedImg = styled.img<ImgProps>`
  display: ${(props) => (props.isHidden ? "none" : "block")};

  position: absolute;
  width: 16.5px;
  height: 16.5px;

  top: 14px;
  right: 15px;

  ${Input}:focus ~ & {
    display: none;
  }
`;

export const ErrorImg = styled.img`
  position: absolute;
  width: 16.5px;
  height: 16.5px;

  top: 14px;
  right: -25px;

  ${Input}:focus ~ & {
    display: none;
  }
`;

export const Hint = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;

  color: #2e2e2e;
`;

export const DoubleInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 56px;
`;

export const UploadPic = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin: 20px 0;
`;

export const UploadPicText = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #1a1a1a;
`;

export const UploadPicButton = styled.label`
  width: 107px;
  height: 27px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
  background: #0e80bf;
  border-radius: 4px;
  cursor: pointer;
`;

export const Textarea = styled.textarea<StatusProps>`
  width: 100%;
  height: 103px;

  padding: 12px 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #000000;
  border-radius: 4px;
  resize: none;

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

  &:focus {
    border: none;
    outline: 2px solid #bcbcbc;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const PageController = styled.div<PageControllerProps>`
  margin-top: 150px;

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

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  border-bottom: 1px solid #c1c1c1;
  padding-bottom: 60px;
  margin-bottom: 30px;
`;

export const AddField = styled.button`
  width: 289px;
  height: 48px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  background: #62a1eb;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Select = styled.select<StatusProps>`
  width: 100%;
  height: 48px;
  padding: 0 16px;

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

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:focus {
    border: none;
    outline: 2px solid #bcbcbc;
  }
`;

export const Option = styled.option`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #1a1a1a;
`;
