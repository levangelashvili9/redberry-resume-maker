import {
  BackButton,
  Container,
  NextButton,
  PageController,
} from "./Pagination.styled";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: React.FC<Props> = ({ step, setStep }) => {
  return (
    <Container>
      {step === 0 ? (
        <PageController>
          <NextButton onClick={() => setStep(1)}>შემდეგი</NextButton>
        </PageController>
      ) : null}
      {step === 1 ? (
        <PageController isTwoButtons>
          <BackButton onClick={() => setStep(0)}>უკან</BackButton>
          <NextButton onClick={() => setStep(2)}>შემდეგი</NextButton>
        </PageController>
      ) : null}
      {step === 2 ? (
        <PageController isTwoButtons>
          <BackButton onClick={() => setStep(1)}>უკან</BackButton>
          <NextButton>დასრულება</NextButton>
        </PageController>
      ) : null}
    </Container>
  );
};
