import {
  PageController,
  BackButton,
  NextButton,
} from "../../../../common/styles/FormStyles";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Education: React.FC<Props> = ({ setStep }) => {
  return (
    <div>
      Education
      <PageController isTwoButtons>
        <BackButton onClick={() => setStep(1)}>უკან</BackButton>
        <NextButton>დასრულება</NextButton>
      </PageController>
    </div>
  );
};
