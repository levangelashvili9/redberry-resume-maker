import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { DataTypes } from "../../../../common/types";
import { statusChanger } from "../../../../common/utils/statusChanger";

import {
  Container,
  DoubleInput,
  Input,
  ErrorImg,
  Hint,
  InputElement,
  Label,
  UploadPic,
  UploadPicText,
  UploadPicButton,
  Textarea,
  PageController,
  NextButton,
  InputDiv,
  ValidatedImg,
} from "../../../../common/styles/FormStyles";

import ErrorSVG from "/assets/error.svg";
import ValidatedSVG from "/assets/validated.svg";

type Props = {
  infoData: DataTypes;
  setInfoData: React.Dispatch<React.SetStateAction<DataTypes>>;
  file: string;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PersonalInfo: React.FC<Props> = ({
  infoData,
  setInfoData,
  setStep,
  file,
  setFile,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataTypes>({
    mode: "onChange",
  });

  const [fileError, setFileError] = useState<string>("");

  const convert2base64 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result?.toString();
        result && setFile(result);
      };

      reader.readAsDataURL(file);
      setFileError("");
    }
  };

  const onSubmit: SubmitHandler<DataTypes> = (data) => {
    file && setStep(1);

    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <DoubleInput>
        <InputElement>
          <Label>სახელი</Label>
          <InputDiv>
            <Input
              placeholder="ანზორ"
              {...register("name", {
                required: true,
                minLength: 2,
                pattern: /^[ა-ჰ]+$/,
                onChange: (e) => {
                  setInfoData({ ...infoData, name: e.target.value });
                },
              })}
              defaultValue={infoData.name}
              status={statusChanger(errors.name, infoData.name)}
            />
            {errors.name ? (
              <ErrorImg src={ErrorSVG} alt="" />
            ) : (
              <ValidatedImg
                src={ValidatedSVG}
                alt=""
                isHidden={infoData.name === ""}
              />
            )}
          </InputDiv>
          <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
        </InputElement>

        <InputElement>
          <Label>გვარი</Label>
          <InputDiv>
            <Input
              placeholder="მუმლაძე"
              {...register("surname", {
                required: true,
                minLength: 2,
                pattern: /^[ა-ჰ]+$/,
                onChange: (e) => {
                  setInfoData({ ...infoData, surname: e.target.value });
                },
              })}
              defaultValue={infoData.surname}
              status={statusChanger(errors.surname, infoData.surname)}
            />
            {errors.surname ? (
              <ErrorImg src={ErrorSVG} alt="" />
            ) : (
              <ValidatedImg
                src={ValidatedSVG}
                alt=""
                isHidden={infoData.surname === ""}
              />
            )}
          </InputDiv>
          <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
        </InputElement>
      </DoubleInput>

      <UploadPic>
        <UploadPicText>პირადი ფოტოს ატვირთვა</UploadPicText>
        <input
          type="file"
          style={{ display: "none" }}
          id="fileUpload"
          onChange={(event) => convert2base64(event)}
        />
        <UploadPicButton htmlFor="fileUpload">ატვირთვა</UploadPicButton>
        <p>{fileError}</p>
      </UploadPic>

      <InputElement>
        <Label>ჩემ შესახებ (არასავალდებულო)</Label>
        <Textarea
          placeholder="ზოგადი ინფო შენ შესახებ"
          {...register("aboutMe", {
            onChange: (e) => {
              setInfoData({ ...infoData, aboutMe: e.target.value });
            },
          })}
          defaultValue={infoData.aboutMe}
        />
      </InputElement>

      <InputElement>
        <Label>ელ.ფოსტა</Label>
        <InputDiv>
          <Input
            placeholder="anzorr666@redberry.ge"
            {...register("email", {
              required: true,
              pattern: /^.*@redberry.ge$/,
              onChange: (e) => {
                setInfoData({ ...infoData, email: e.target.value });
              },
            })}
            defaultValue={infoData.email}
            status={statusChanger(errors.email, infoData.email)}
          />
          {errors.email ? (
            <ErrorImg src={ErrorSVG} alt="" />
          ) : (
            <ValidatedImg
              src={ValidatedSVG}
              alt=""
              isHidden={infoData.email === ""}
            />
          )}
        </InputDiv>
        <Hint>უნდა მთავრდებოდეს @redberry.ge-ით</Hint>
      </InputElement>

      <InputElement>
        <Label>მობილურის ნომერი</Label>
        <InputDiv>
          <Input
            placeholder="+995 551 12 34 56"
            {...register("number", {
              required: true,
              pattern: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
              onChange: (e) => {
                setInfoData({ ...infoData, number: e.target.value });
              },
            })}
            defaultValue={infoData.number}
            status={statusChanger(errors.number, infoData.number)}
          />
          {errors.number ? (
            <ErrorImg src={ErrorSVG} alt="" />
          ) : (
            <ValidatedImg
              src={ValidatedSVG}
              alt=""
              isHidden={infoData.number === ""}
            />
          )}
        </InputDiv>
        <Hint>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Hint>
      </InputElement>

      <PageController>
        <NextButton
          type="submit"
          onClick={() => file || setFileError("Please, select a file")}
        >
          შემდეგი
        </NextButton>
      </PageController>
    </Container>
  );
};
