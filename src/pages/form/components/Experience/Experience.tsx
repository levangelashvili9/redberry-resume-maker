import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";

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

export const Experience: React.FC<Props> = ({
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
      experiences: infoData.experiences,
    },
  });

  const { fields, append } = useFieldArray({
    name: "experiences",
    control,
  });

  const addFieldHandler = () => {
    setInfoData({
      ...infoData,
      experiences: [
        ...infoData.experiences,
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: "",
        },
      ],
    });

    append({
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    });
  };

  const onSubmit: SubmitHandler<DataTypes> = (data) => {
    setStep(2);
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
                {...register(`experiences.${index}.position`, {
                  required: true,
                  minLength: 2,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      experiences: infoData.experiences.map((experience, i) =>
                        i === index
                          ? { ...experience, position: e.target.value }
                          : experience
                      ),
                    });
                  },
                })}
                status={statusChanger(
                  errors.experiences && errors.experiences[index]?.position,
                  infoData.experiences[index].position
                )}
              />
              {errors.experiences && errors.experiences[index]?.position ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={infoData.experiences[index].position === ""}
                />
              )}
            </InputDiv>
            <Hint>მინიმუმ 2 სიმბოლო</Hint>
          </InputElement>

          <InputElement>
            <Label>დამსაქმებელი</Label>
            <InputDiv>
              <Input
                placeholder="დამსაქმებელი"
                {...register(`experiences.${index}.employer`, {
                  required: true,
                  minLength: 2,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      experiences: infoData.experiences.map((experience, i) =>
                        i === index
                          ? { ...experience, employer: e.target.value }
                          : experience
                      ),
                    });
                  },
                })}
                status={statusChanger(
                  errors.experiences && errors.experiences[index]?.employer,
                  infoData.experiences[index].employer
                )}
              />
              {errors.experiences && errors.experiences[index]?.employer ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={infoData.experiences[index].employer === ""}
                />
              )}
            </InputDiv>
            <Hint>მინიმუმ 2 სიმბოლო</Hint>
          </InputElement>

          <DoubleInput>
            <InputElement>
              <Label>დაწყების რიცხვი</Label>
              <InputDiv>
                <Input
                  type="date"
                  {...register(`experiences.${index}.start_date`, {
                    required: true,
                    onChange: (e) => {
                      setInfoData({
                        ...infoData,
                        experiences: infoData.experiences.map((experience, i) =>
                          i === index
                            ? { ...experience, start_date: e.target.value }
                            : experience
                        ),
                      });
                    },
                  })}
                  status={statusChanger(
                    errors.experiences && errors.experiences[index]?.start_date,
                    infoData.experiences[index].start_date
                  )}
                />
              </InputDiv>
            </InputElement>

            <InputElement>
              <Label>დამთავრების რიცხვი</Label>
              <InputDiv>
                <Input
                  type="date"
                  {...register(`experiences.${index}.due_date`, {
                    required: true,
                    onChange: (e) => {
                      setInfoData({
                        ...infoData,
                        experiences: infoData.experiences.map((experience, i) =>
                          i === index
                            ? { ...experience, due_date: e.target.value }
                            : experience
                        ),
                      });
                    },
                  })}
                  status={statusChanger(
                    errors.experiences && errors.experiences[index]?.due_date,
                    infoData.experiences[index].due_date
                  )}
                />
              </InputDiv>
            </InputElement>
          </DoubleInput>

          <InputElement>
            <Label>აღწერა</Label>
            <Textarea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              {...register(`experiences.${index}.description`, {
                required: true,
                onChange: (e) => {
                  setInfoData({
                    ...infoData,
                    experiences: infoData.experiences.map((experience, i) =>
                      i === index
                        ? { ...experience, description: e.target.value }
                        : experience
                    ),
                  });
                },
              })}
              status={statusChanger(
                errors.experiences && errors.experiences[index]?.description,
                infoData.experiences[index].description
              )}
            />
          </InputElement>
        </Field>
      ))}
      <AddField type="button" onClick={addFieldHandler}>
        მეტი გამოცდილების დამატება
      </AddField>
      <PageController isTwoButtons>
        <BackButton type="button" onClick={() => setStep(0)}>
          უკან
        </BackButton>
        <NextButton type="submit">შემდეგი</NextButton>
      </PageController>
    </Container>
  );
};
