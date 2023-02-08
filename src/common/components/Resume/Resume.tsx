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
} from "./Resume.styled";

import EmailSVG from "/assets/email.svg";
import PhoneSVG from "/assets/phone.svg";
import PlaceholderPhoto from "/assets/placeholder-photo.png";
import ThirdLogoSVG from "/assets/logo-3.svg";
import { FormTypes } from "../../../pages/form/FormPage.types";

type Props = {
  border?: boolean;
  data: FormTypes;
  file: string;
};

export const Resume: React.FC<Props> = ({ border, data, file }) => {
  return (
    <Container border={border}>
      <MainSection>
        <div>
          <FullName>
            {data.name} {data.surname}
          </FullName>
          {data.email ? (
            <ContactInfo margin={"10px"}>
              <img src={EmailSVG} alt="" />
              <ContactInfoText>{data.email}</ContactInfoText>
            </ContactInfo>
          ) : null}
          {data.number ? (
            <ContactInfo margin={"34px"}>
              <img src={PhoneSVG} alt="" />
              <ContactInfoText>+995 597 63 45 16</ContactInfoText>
            </ContactInfo>
          ) : null}
          {data.aboutMe ? (
            <>
              <Heading>ჩემ შესახებ</Heading>
              <ResumeText>{data.aboutMe}</ResumeText>
            </>
          ) : null}
        </div>
        {file ? <Photo src={file} alt="" /> : null}
      </MainSection>
      <ResumeSection>
        <Heading>გამოცდილება</Heading>
        <SubHeading>React Native Developer, Microsoft</SubHeading>
        <Date>2020-09-23 - 2020-09-23</Date>
        <ResumeText isCapitalized>
          Experienced Javascript Native Developer with 5 years in the industry.
          proficient withreact. Used problem-solving aptitude to encahge
          application performance by 14%.created data visualisation tools and
          integrated designs.
        </ResumeText>
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
