import {
  PageController,
  BackButton,
  NextButton,
} from "../../../../common/styles/FormStyles";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Experience: React.FC<Props> = ({ setStep }) => {
  return (
    <div>
      Experience
      <PageController isTwoButtons>
        <BackButton onClick={() => setStep(0)}>უკან</BackButton>
        <NextButton onClick={() => setStep(2)}>შემდეგი</NextButton>
      </PageController>
    </div>
  );
};
