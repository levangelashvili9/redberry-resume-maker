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
  Hint,
  DoubleInput,
  Textarea,
  AddField,
  Select,
  Option,
} from "../../../../common/styles/FormStyles";
import { DataTypes } from "../../../../common/types";
import { statusChanger } from "../../../../common/utils/statusChanger";
import { isRequired } from "../../../../common/utils/isRequired";
import useSubmitData from "../../../../common/hooks/useSubmitData";

import resetData from "../../../../common/utils/resetData";
import { errorSvgHandler } from "../../../../common/utils/errorSvgHandler";

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
  const postData = useSubmitData(infoData);

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
          degree_id: "",
          due_date: "",
          description: "",
        },
      ],
    });

    append({
      institute: "",
      degree_id: "",
      due_date: "",
      description: "",
    });
  };

  const onSubmit: SubmitHandler<DataTypes> = async (data) => {
    await postData();
    resetData(setInfoData, setStep);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Field key={field.id}>
          <InputElement>
            <Label>????????????????????????????????????</Label>
            <InputDiv>
              <Input
                placeholder="????????????????????????????????????"
                {...register(`educations.${index}.institute`, {
                  required: isRequired(infoData.educations[index], index),
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
              {errorSvgHandler(
                errors.educations && errors.educations[index]?.institute,
                infoData.educations[index].institute
              )}
            </InputDiv>
            <Hint>????????????????????? 2 ?????????????????????</Hint>
          </InputElement>

          <DoubleInput>
            <InputElement>
              <Label>?????????????????????</Label>
              <Select
                value={infoData.educations[index].degree_id}
                status={statusChanger(
                  errors.educations && errors.educations[index]?.degree_id,
                  infoData.educations[index].degree_id
                )}
                {...register(`educations.${index}.degree_id`, {
                  required: isRequired(infoData.educations[index], index),
                  onChange: (e) => {
                    setInfoData({
                      ...infoData,
                      educations: infoData.educations.map((education, i) =>
                        i === index
                          ? { ...education, degree_id: e.target.value }
                          : education
                      ),
                    });
                  },
                })}
              >
                <Option value="" disabled>
                  ????????????????????? ?????????????????????
                </Option>
                {degreesList
                  ? degreesList.map((degree) => (
                      <Option key={degree.id} value={degree.id}>
                        {degree.title}
                      </Option>
                    ))
                  : null}
              </Select>
            </InputElement>

            <InputElement>
              <Label>????????????????????????????????? ??????????????????</Label>
              <InputDiv>
                <Input
                  type="date"
                  {...register(`educations.${index}.due_date`, {
                    required: isRequired(infoData.educations[index], index),
                    maxLength: 10,
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
            <Label>??????????????????</Label>
            <Textarea
              placeholder="?????????????????????????????? ??????????????????"
              {...register(`educations.${index}.description`, {
                required: isRequired(infoData.educations[index], index),
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
        ???????????? ???????????????????????????????????? ????????????????????????
      </AddField>
      <PageController isTwoButtons>
        <BackButton type="button" onClick={() => setStep(1)}>
          ????????????
        </BackButton>
        <NextButton>???????????????????????????</NextButton>
      </PageController>
    </Container>
  );
};
