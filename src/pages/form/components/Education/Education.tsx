import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import useFetchDropdown from "../../../../common/hooks/useFetchDropdown";

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
  DoubleInput,
  Textarea,
  AddField,
  Select,
  Option,
} from "../../../../common/styles/FormStyles";
import { DataTypes } from "../../../../common/types";
import { statusChanger } from "../../../../common/utils/statusChanger";

import ErrorSVG from "/assets/error.svg";
import ValidatedSVG from "/assets/validated.svg";

type Props = {
  infoData: DataTypes;
  setInfoData: React.Dispatch<React.SetStateAction<DataTypes>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Education: React.FC<Props> = ({
  infoData,
  setInfoData,
  setStep,
}) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataTypes>({
    mode: "onChange",
    defaultValues: {
      educations: infoData.educations,
    },
  });

  const degreesList = useFetchDropdown();

  const { fields, append } = useFieldArray({
    name: "educations",
    control,
  });

  const addFieldHandler = () => {
    setInfoData({
      ...infoData,
      educations: [
        ...infoData.educations,
        {
          institute: "",
          degree: "",
          due_date: "",
          description: "",
        },
      ],
    });

    append({
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    });
  };

  const onSubmit: SubmitHandler<DataTypes> = (data) => {};

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Field key={field.id}>
          <InputElement>
            <Label>სასწავლებელი</Label>
            <InputDiv>
              <Input
                placeholder="სასწავლებელი"
                {...register(`educations.${index}.institute`, {
                  required: true,
                  minLength: 2,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      educations: infoData.educations.map((education, i) =>
                        i === index
                          ? { ...education, institute: e.target.value }
                          : education
                      ),
                    });
                  },
                })}
                status={statusChanger(
                  errors.educations && errors.educations[index]?.institute,
                  infoData.educations[index].institute
                )}
              />
              {errors.educations && errors.educations[index]?.institute ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={infoData.educations[index].institute === ""}
                />
              )}
            </InputDiv>
            <Hint>მინიმუმ 2 სიმბოლო</Hint>
          </InputElement>

          <DoubleInput>
            <InputElement>
              <Label>ხარისხი</Label>
              <Select
                value={infoData.educations[index].degree}
                status={statusChanger(
                  errors.educations && errors.educations[index]?.degree,
                  infoData.educations[index].degree
                )}
                {...register(`educations.${index}.degree`, {
                  required: true,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      educations: infoData.educations.map((education, i) =>
                        i === index
                          ? { ...education, degree: e.target.value }
                          : education
                      ),
                    });
                  },
                })}
              >
                <Option value="" disabled>
                  აირჩიეთ ხარისხი
                </Option>
                {degreesList
                  ? degreesList.map((degree) => (
                      <Option key={degree.id} value={degree.title}>
                        {degree.title}
                      </Option>
                    ))
                  : null}
              </Select>
            </InputElement>

            <InputElement>
              <Label>დამთავრების რიცხვი</Label>
              <InputDiv>
                <Input
                  type="date"
                  {...register(`educations.${index}.due_date`, {
                    required: true,
                    onChange: (e) => {
                      setInfoData({
                        ...infoData,
                        educations: infoData.educations.map((education, i) =>
                          i === index
                            ? { ...education, due_date: e.target.value }
                            : education
                        ),
                      });
                    },
                  })}
                  status={statusChanger(
                    errors.educations && errors.educations[index]?.due_date,
                    infoData.educations[index].due_date
                  )}
                />
              </InputDiv>
            </InputElement>
          </DoubleInput>

          <InputElement>
            <Label>აღწერა</Label>
            <Textarea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              {...register(`educations.${index}.description`, {
                required: true,
                onChange: (e) => {
                  setInfoData({
                    ...infoData,
                    educations: infoData.educations.map((education, i) =>
                      i === index
                        ? { ...education, description: e.target.value }
                        : education
                    ),
                  });
                },
              })}
              status={statusChanger(
                errors.educations && errors.educations[index]?.description,
                infoData.educations[index].description
              )}
            />
          </InputElement>
        </Field>
      ))}
      <AddField type="button" onClick={addFieldHandler}>
        სხვა სასწავლებლის დამატება
      </AddField>
      <PageController isTwoButtons>
        <BackButton onClick={() => setStep(1)}>უკან</BackButton>
        <NextButton>დასრულება</NextButton>
      </PageController>
    </Container>
  );
};
