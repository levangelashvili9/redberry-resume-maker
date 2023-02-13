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
import React from "react";

type Props = {
  border?: boolean;
  state: any;
};

export const FinishedResume: React.FC<Props> = ({ border, state }) => {
  return (
    <Container border={border}>
      <MainSection>
        <div>
          <FullName>
            {state.name} {state.surname}
          </FullName>
          <ContactInfo margin={"10px"}>
            <img src={EmailSVG} alt="" />
            <ContactInfoText>{state.email}</ContactInfoText>
          </ContactInfo>
          <ContactInfo margin={"34px"}>
            <img src={PhoneSVG} alt="" />
            <ContactInfoText>{state.phone_number}</ContactInfoText>
          </ContactInfo>
          <Heading>ჩემ შესახებ</Heading>
          <ResumeText>{state.about_me}</ResumeText>
        </div>
        <Photo
          src={"https://resume.redberryinternship.ge" + state.image}
          alt=""
        />
      </MainSection>

      <ResumeSection>
        <Heading>გამოცდილება</Heading>
        <List>
          {state.experiences.map((experience: any, index: number) => (
            <div key={index}>
              <SubHeading>
                {experience.position}, {experience.employer}
              </SubHeading>
              <Date>
                {experience.start_date} - {experience.due_date}
              </Date>
              <ResumeText isCapitalized>{experience.description}</ResumeText>
            </div>
          ))}
        </List>
      </ResumeSection>

      <ResumeSection>
        <Heading>განათლება</Heading>
        <List>
          {state.educations.map((education: any, index: number) => (
            <div key={index}>
              <SubHeading>
                {education.institute}, {education.degree}
              </SubHeading>
              {education.due_date ? <Date>2020-09-23</Date> : null}
              <ResumeText>{education.description}</ResumeText>
            </div>
          ))}
        </List>
      </ResumeSection>
      <LogoImage src={ThirdLogoSVG} alt="" />
    </Container>
  );
};
