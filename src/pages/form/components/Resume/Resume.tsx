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
} from "../../../../common/styles/ResumeStyles";

import EmailSVG from "/assets/email.svg";
import PhoneSVG from "/assets/phone.svg";
import ThirdLogoSVG from "/assets/logo-3.svg";
import { DataTypes } from "../../../../common/types";
import React from "react";
import { areAllValuesEmpty } from "../../../../common/utils/areAllValuesEmpty";

type Props = {
  border?: boolean;
  infoData: DataTypes;
};

export const Resume: React.FC<Props> = ({ border, infoData }) => {
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
          {infoData.phone_number ? (
            <ContactInfo margin={"34px"}>
              <img src={PhoneSVG} alt="" />
              <ContactInfoText>{infoData.phone_number}</ContactInfoText>
            </ContactInfo>
          ) : null}
          {infoData.about_me ? (
            <>
              <Heading>ჩემ შესახებ</Heading>
              <ResumeText>{infoData.about_me}</ResumeText>
            </>
          ) : null}
        </div>
        {infoData.image ? <Photo src={infoData.image} alt="" /> : null}
      </MainSection>

      {areAllValuesEmpty(infoData.experiences) || (
        <ResumeSection>
          <Heading>გამოცდილება</Heading>
          <List>
            {infoData.experiences.map((experience, index) => (
              <div key={index}>
                {experience.position || experience.employer ? (
                  <SubHeading>
                    {experience.position}, {experience.employer}
                  </SubHeading>
                ) : null}
                {experience.start_date || experience.due_date ? (
                  <Date>
                    {experience.start_date} - {experience.due_date}
                  </Date>
                ) : null}
                {experience.description ? (
                  <ResumeText isCapitalized>
                    {experience.description}
                  </ResumeText>
                ) : null}
              </div>
            ))}
          </List>
        </ResumeSection>
      )}

      {areAllValuesEmpty(infoData.educations) || (
        <ResumeSection>
          <Heading>განათლება</Heading>
          <List>
            {infoData.educations.map((education, index) => (
              <div key={index}>
                {education.institute || education.degree_id ? (
                  <SubHeading>
                    {education.institute}, {education.degree_id}
                  </SubHeading>
                ) : null}
                {education.due_date ? <Date>2020-09-23</Date> : null}
                {education.description ? (
                  <ResumeText>{education.description}</ResumeText>
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
