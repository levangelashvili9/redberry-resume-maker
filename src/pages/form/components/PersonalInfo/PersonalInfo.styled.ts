import styled from "styled-components";

export const Container = styled.div`
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

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #000000;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  &:focus {
    outline: 2px solid #bcbcbc;
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

export const DoubleInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 56px;
`;

export const UploadPic = styled.div`
  display: flex;
  gap: 20px;

  margin: 20px 0;
`;

export const UploadPicText = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #1a1a1a;
`;

export const UploadPicButton = styled.button`
  width: 107px;
  height: 27px;

  color: #fff;
  background: #0e80bf;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  height: 103px;

  padding: 12px 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #000000;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  resize: none;

  &:focus {
    outline: 2px solid #bcbcbc;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;
