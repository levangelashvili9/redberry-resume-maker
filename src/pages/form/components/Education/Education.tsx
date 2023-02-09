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
      universities: infoData.universities,
    },
  });

  const degreesList = useFetchDropdown();

  const { fields, append } = useFieldArray({
    name: "universities",
    control,
  });

  const addFieldHandler = () => {
    setInfoData({
      ...infoData,
      universities: [
        ...infoData.universities,
        {
          name: "",
          degree: "",
          endDate: "",
          description: "",
        },
      ],
    });

    append({
      name: "",
      degree: "",
      endDate: "",
      description: "",
    });
  };

  const onSubmit: SubmitHandler<DataTypes> = (data) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <button onClick={() => console.log(infoData.universities)}>CLICK</button>
      {fields.map((field, index) => (
        <Field key={field.id}>
          <InputElement>
            <Label>სასწავლებელი</Label>
            <InputDiv>
              <Input
                placeholder="სასწავლებელი"
                {...register(`universities.${index}.name`, {
                  required: true,
                  minLength: 2,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      universities: infoData.universities.map((university, i) =>
                        i === index
                          ? { ...university, name: e.target.value }
                          : university
                      ),
                    });
                  },
                })}
                status={statusChanger(
                  errors.universities && errors.universities[index]?.name,
                  infoData.universities[index].name
                )}
              />
              {errors.universities && errors.universities[index]?.name ? (
                <ErrorImg src={ErrorSVG} alt="" />
              ) : (
                <ValidatedImg
                  src={ValidatedSVG}
                  alt=""
                  isHidden={infoData.universities[index].name === ""}
                />
              )}
            </InputDiv>
            <Hint>მინიმუმ 2 სიმბოლო</Hint>
          </InputElement>

          <DoubleInput>
            <InputElement>
              <Label>ხარისხი</Label>
              <Select
                value={infoData.universities[index].degree}
                status={statusChanger(
                  errors.universities && errors.universities[index]?.degree,
                  infoData.universities[index].degree
                )}
                {...register(`universities.${index}.degree`, {
                  required: true,
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      universities: infoData.universities.map((university, i) =>
                        i === index
                          ? { ...university, degree: e.target.value }
                          : university
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
                  {...register(`universities.${index}.endDate`, {
                    required: true,
                    onChange: (e) => {
                      setInfoData({
                        ...infoData,
                        universities: infoData.universities.map(
                          (university, i) =>
                            i === index
                              ? { ...university, endDate: e.target.value }
                              : university
                        ),
                      });
                    },
                  })}
                  status={statusChanger(
                    errors.universities && errors.universities[index]?.endDate,
                    infoData.universities[index].endDate
                  )}
                />
              </InputDiv>
            </InputElement>
          </DoubleInput>

          <InputElement>
            <Label>აღწერა</Label>
            <Textarea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              {...register(`universities.${index}.description`, {
                required: true,
                onChange: (e) => {
                  setInfoData({
                    ...infoData,
                    universities: infoData.universities.map((university, i) =>
                      i === index
                        ? { ...university, description: e.target.value }
                        : university
                    ),
                  });
                },
              })}
              status={statusChanger(
                errors.universities && errors.universities[index]?.description,
                infoData.universities[index].description
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
