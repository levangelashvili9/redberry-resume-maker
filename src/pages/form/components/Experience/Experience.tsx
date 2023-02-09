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
      jobs: infoData.jobs,
    },
  });

  const { fields, append } = useFieldArray({
    name: "jobs",
    control,
  });

  const addFieldHandler = () => {
    setInfoData({
      ...infoData,
      jobs: [
        ...infoData.jobs,
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });

    append({
      position: "",
      company: "",
      startDate: "",
      endDate: "",
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
                {...register(`jobs.${index}.position`, {
                  required: true,
                  minLength: 2,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      jobs: infoData.jobs.map((job, i) =>
                        i === index ? { ...job, position: e.target.value } : job
                      ),
                    });
                  },
                })}
                status={statusChanger(
                  errors.jobs && errors.jobs[index]?.position,
                  infoData.jobs[index].position
                )}
              />
              {errors.jobs && errors.jobs[index]?.position ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={infoData.jobs[index].position === ""}
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
                {...register(`jobs.${index}.company`, {
                  required: true,
                  minLength: 2,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      jobs: infoData.jobs.map((job, i) =>
                        i === index ? { ...job, company: e.target.value } : job
                      ),
                    });
                  },
                })}
                status={statusChanger(
                  errors.jobs && errors.jobs[index]?.company,
                  infoData.jobs[index].company
                )}
              />
              {errors.jobs && errors.jobs[index]?.company ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={infoData.jobs[index].company === ""}
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
                  {...register(`jobs.${index}.startDate`, {
                    required: true,
                    onChange: (e) => {
                      setInfoData({
                        ...infoData,
                        jobs: infoData.jobs.map((job, i) =>
                          i === index
                            ? { ...job, startDate: e.target.value }
                            : job
                        ),
                      });
                    },
                  })}
                  status={statusChanger(
                    errors.jobs && errors.jobs[index]?.startDate,
                    infoData.jobs[index].startDate
                  )}
                />
              </InputDiv>
            </InputElement>

            <InputElement>
              <Label>დამთავრების რიცხვი</Label>
              <InputDiv>
                <Input
                  type="date"
                  {...register(`jobs.${index}.endDate`, {
                    required: true,
                    onChange: (e) => {
                      setInfoData({
                        ...infoData,
                        jobs: infoData.jobs.map((job, i) =>
                          i === index
                            ? { ...job, endDate: e.target.value }
                            : job
                        ),
                      });
                    },
                  })}
                  status={statusChanger(
                    errors.jobs && errors.jobs[index]?.endDate,
                    infoData.jobs[index].endDate
                  )}
                />
              </InputDiv>
            </InputElement>
          </DoubleInput>

          <InputElement>
            <Label>აღწერა</Label>
            <Textarea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              {...register(`jobs.${index}.description`, {
                required: true,
                onChange: (e) => {
                  setInfoData({
                    ...infoData,
                    jobs: infoData.jobs.map((job, i) =>
                      i === index
                        ? { ...job, description: e.target.value }
                        : job
                    ),
                  });
                },
              })}
              status={statusChanger(
                errors.jobs && errors.jobs[index]?.description,
                infoData.jobs[index].description
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
