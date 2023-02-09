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
import { areAllValuesEmpty } from "../../utils/areAllValuesEmpty";

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

      {areAllValuesEmpty(infoData.jobs) || (
        <ResumeSection>
          <Heading>გამოცდილება</Heading>
          <List>
            {infoData.jobs.map((job, index) => (
              <div key={index}>
                {job.position || job.company ? (
                  <SubHeading>
                    {job.position}, {job.company}
                  </SubHeading>
                ) : null}
                {job.startDate || job.endDate ? (
                  <Date>
                    {job.startDate} - {job.endDate}
                  </Date>
                ) : null}
                {job.description ? (
                  <ResumeText isCapitalized>{job.description}</ResumeText>
                ) : null}
              </div>
            ))}
          </List>
        </ResumeSection>
      )}

      {areAllValuesEmpty(infoData.universities) || (
        <ResumeSection>
          <Heading>განათლება</Heading>
          <List>
            {infoData.universities.map((uni, index) => (
              <div key={index}>
                {uni.name || uni.degree ? (
                  <SubHeading>
                    {uni.name}, {uni.degree}
                  </SubHeading>
                ) : null}
                {uni.endDate ? <Date>2020-09-23</Date> : null}
                {uni.description ? (
                  <ResumeText>{uni.description}</ResumeText>
                ) : null}
              </div>
            ))}
          </List>
        </ResumeSection>
      )}
      <LogoImage src={ThirdLogoSVG} alt="" />
    </Container>
  );
};
