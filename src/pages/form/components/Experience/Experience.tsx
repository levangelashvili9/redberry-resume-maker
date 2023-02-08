import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  useForm,
  useFieldArray,
  FieldError,
  SubmitHandler,
} from "react-hook-form";

import {
  Container,
  PageController,
  BackButton,
  NextButton,
  Field,
  InputElement,
  Label,
  InputDiv,
  Input,
  ErrorImg,
  ValidatedImg,
  Hint,
} from "../../../../common/styles/FormStyles";
import { ExperienceTypes, ExperienceSchema } from "../../../../common/types";

import ErrorSVG from "/assets/error.svg";
import ValidatedSVG from "/assets/validated.svg";

type Props = {
  experienceData: ExperienceTypes;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceTypes>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Experience: React.FC<Props> = ({
  experienceData,
  setExperienceData,
  setStep,
}) => {
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<ExperienceTypes>({
    resolver: zodResolver(ExperienceSchema),
    defaultValues: {
      jobs: [{ position: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "jobs",
    control,
  });

  // useEffect(() => {
  //   const subscription = watch((values) => {
  //     setExperienceData({
  //       ...experienceData,
  //     });
  //   });

  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [watch]);

  const statusChanger = (
    error: FieldError | undefined,
    inputName: keyof typeof experienceData
  ) => {
    return error
      ? "error"
      : experienceData[inputName]
      ? "validated"
      : "default";
  };

  const onSubmit: SubmitHandler<ExperienceTypes> = (data) => {
    setStep(2);
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Field key={field.id}>
          <InputElement>
            <Label>თანამდებობა</Label>
            <InputDiv>
              <Input
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                {...register(`jobs.${index}.position`, {
                  onChange: (e) => {
                    setExperienceData({
                      ...experienceData,
                      jobs: experienceData.jobs.map((job, i) =>
                        i === index ? { ...job, position: e.target.value } : job
                      ),
                    });
                  },
                })}
                // status={statusChanger(errors.name, "name")}
              />
              {/* {errors.name ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={experienceData.name === ""}
                />
              )} */}
            </InputDiv>
            <Hint>მინიმუმ 2 სიმბოლო</Hint>
          </InputElement>
        </Field>
      ))}
      <PageController isTwoButtons>
        <BackButton type="button" onClick={() => setStep(0)}>
          უკან
        </BackButton>
        <NextButton type="submit">შემდეგი</NextButton>
      </PageController>
    </Container>
  );
};
