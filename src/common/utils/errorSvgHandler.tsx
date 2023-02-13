import { FieldError } from "react-hook-form";
import { ErrorImg, ValidatedImg } from "../styles/FormStyles";

import ErrorSVG from "/assets/error.svg";
import ValidatedSVG from "/assets/validated.svg";

export const errorSvgHandler = (
  error: FieldError | undefined,
  data: string
) => {
  return error ? (
    <ErrorImg src={ErrorSVG} alt="" />
  ) : (
    <ValidatedImg src={ValidatedSVG} alt="" isHidden={data === ""} />
  );
};
