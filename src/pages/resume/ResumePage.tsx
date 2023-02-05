import { Resume } from "../../common/components/Resume";
import { Container } from "./ResumePage.styled";

export const ResumePage = () => {
  return (
    <Container>
      <Resume border={true} />
    </Container>
  );
};
