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

type Props = {
  border?: boolean;
};

export const Resume: React.FC<Props> = ({ border }) => {
  return (
    <Container border={border}>
      <MainSection>
        <div>
          <FullName>ანზორ მუმლაძე</FullName>
          <ContactInfo margin={"10px"}>
            <img src={EmailSVG} alt="" />
            <ContactInfoText>anzorr666@redberry.ge</ContactInfoText>
          </ContactInfo>
          <ContactInfo margin={"34px"}>
            <img src={PhoneSVG} alt="" />
            <ContactInfoText>+995 597 63 45 16</ContactInfoText>
          </ContactInfo>
          <Heading>ჩემ შესახებ</Heading>
          <ResumeText>
            ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
          </ResumeText>
        </div>
        <Photo>
          <img src={PlaceholderPhoto} alt="" />
        </Photo>
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
