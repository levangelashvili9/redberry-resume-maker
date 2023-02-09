import { FieldError } from "react-hook-form";

export const statusChanger = (error: FieldError | undefined, input: any) => {
  return error ? "error" : input ? "validated" : "default";
};
