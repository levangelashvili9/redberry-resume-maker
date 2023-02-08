import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";

import { FormTypes, Schema } from "../../FormPage.types";

import { Container, Hint, Input, Label } from "./InputElementa.styled";

type Props = {
  label: string;
  placeholder: string;
  inputName: Path<FormTypes>;
  hint: string;
  register: UseFormRegister<FormTypes>;
  // rules: RegisterOptions;
  error?: any;
};

export const InputElementa: React.FC<Props> = ({
  label,
  placeholder,
  inputName,
  hint,
  register,
  // rules,
  error,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        {...register(inputName)}
        status={error ? "error" : "default"}
      />

      <Hint>{hint}</Hint>
    </Container>
  );
};
