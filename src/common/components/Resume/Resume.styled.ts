import styled from "styled-components";

interface ContainerProps {
  border?: boolean;
}

interface ResumeTextProps {
  isCapitalized?: boolean;
}

interface ContactInfoProps {
  margin: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 68px 80px;

  width: 822px;
  min-height: 1080px;

  border: ${(props) => (props.border ? "0.8px solid #000000" : "none")};
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 20px;
`;

export const FullName = styled.h2`
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;

  margin-bottom: 17px;

  color: #f93b1d;
`;

export const Photo = styled.img`
  width: 246px;
  height: 246px;
  border-radius: 50%;
`;

export const ContactInfo = styled.div<ContactInfoProps>`
  display: flex;
  gap: 11px;

  margin-bottom: ${(props) => props.margin};
`;

export const ContactInfoText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1a1a1a;
`;

export const ResumeSection = styled.div`
  padding-top: 24px;
  padding-bottom: 20px;

  border-bottom: 1px solid #c8c8c8;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 15px;

  color: #f93b1d;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ResumeText = styled.p<ResumeTextProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  text-transform: ${(props) =>
    props.isCapitalized ? "capitalize" : "lowercase"};

  color: #000000;
`;

export const SubHeading = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  margin-bottom: 7px;

  color: #1a1a1a;
`;

export const Date = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin-bottom: 16px;

  color: #919191;
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 78px;
  bottom: 44px;
`;
