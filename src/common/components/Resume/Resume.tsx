import {
  ContactInfo,
  ContactInfoText,
  Container,
  FullName,
  ResumeSection,
  ResumeText,
  Heading,
  SubHeading,
  Date,
  Photo,
  MainSection,
  LogoImage,
  List,
} from "./Resume.styled";

import EmailSVG from "/assets/email.svg";
import PhoneSVG from "/assets/phone.svg";
import ThirdLogoSVG from "/assets/logo-3.svg";
import { DataTypes } from "../../types";
import React from "react";

type Props = {
  border?: boolean;
  infoData: DataTypes;
  file: string;
};

export const Resume: React.FC<Props> = ({ border, infoData, file }) => {
  return (
    <Container border={border}>
      <MainSection>
        <div>
          <FullName>
            {infoData.name} {infoData.surname}
          </FullName>
          {infoData.email ? (
            <ContactInfo margin={"10px"}>
              <img src={EmailSVG} alt="" />
              <ContactInfoText>{infoData.email}</ContactInfoText>
            </ContactInfo>
          ) : null}
          {infoData.number ? (
            <ContactInfo margin={"34px"}>
              <img src={PhoneSVG} alt="" />
              <ContactInfoText>{infoData.number}</ContactInfoText>
            </ContactInfo>
          ) : null}
          {infoData.aboutMe ? (
            <>
              <Heading>ჩემ შესახებ</Heading>
              <ResumeText>{infoData.aboutMe}</ResumeText>
            </>
          ) : null}
        </div>
        {file ? <Photo src={file} alt="" /> : null}
      </MainSection>

      <ResumeSection>
        <Heading>გამოცდილება</Heading>
        <List>
          {infoData.jobs.map((job, index) => (
            <div key={index}>
              <SubHeading>
                {infoData.jobs[index].position}, {infoData.jobs[index].company}
              </SubHeading>
              <Date>
                {infoData.jobs[index].startDate} -{" "}
                {infoData.jobs[index].endDate}
              </Date>
              <ResumeText isCapitalized>
                {infoData.jobs[index].description}
              </ResumeText>
            </div>
          ))}
        </List>
      </ResumeSection>
      <ResumeSection>
        <Heading>განათლება</Heading>
        <SubHeading>წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი</SubHeading>
        <Date>2020-09-23</Date>
        <ResumeText>
          ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
          კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
          მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
          ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
        </ResumeText>
      </ResumeSection>
      <LogoImage src={ThirdLogoSVG} alt="" />
    </Container>
  );
};
