import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const FormSide = styled.div`
  width: 1098px;
  height: 100%;
  background: #f9f9f9;

  padding: 50px 150px 65px 150px;
`;

export const ChevronLeft = styled.div`
  position: absolute;
  top: 57px;
  left: 62px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  padding-bottom: 12px;
  border-bottom: 1px solid #1a1a1a;

  margin-bottom: 77px;
`;

export const HeadingText = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #1a1a1a;
`;

export const PageNumber = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #1a1a1a;
`;
