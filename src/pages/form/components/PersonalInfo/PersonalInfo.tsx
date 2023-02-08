import { useEffect, useState } from "react";

import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { FormTypes, Schema } from "../../FormPage.types";
import { zodResolver } from "@hookform/resolvers/zod";

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
  data: FormTypes;
  setData: React.Dispatch<React.SetStateAction<FormTypes>>;
  file: string;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PersonalInfo: React.FC<Props> = ({
  data,
  setData,
  setStep,
  file,
  setFile,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: zodResolver(Schema),
    mode: "onChange",
  });

  const [fileError, setFileError] = useState<string>("");

  useEffect(() => {
    const subscription = watch((values) => {
      setData({
        ...data,
        name: values.name || "",
        surname: values.surname || "",
        aboutMe: values.aboutMe || "",
        email: values.email || "",
        number: values.number || "",
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

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

  const statusChanger = (
    error: FieldError | undefined,
    inputName: keyof typeof data
  ) => {
    return error ? "error" : data[inputName] ? "validated" : "default";
  };

  const onSubmit: SubmitHandler<FormTypes> = (dataFromInputs) => {
    file && setStep(1);

    console.log(dataFromInputs);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <DoubleInput>
        <InputElement>
          <Label>სახელი</Label>
          <InputDiv>
            <Input
              placeholder="ანზორ"
              {...register("name")}
              status={statusChanger(errors.name, "name")}
            />
            {errors.name ? (
              <ErrorImg src={ErrorSVG} alt="" />
            ) : (
              <ValidatedImg
                src={ValidatedSVG}
                alt=""
                isHidden={data.name === ""}
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
              {...register("surname")}
              status={statusChanger(errors.surname, "surname")}
            />
            {errors.surname ? (
              <ErrorImg src={ErrorSVG} alt="" />
            ) : (
              <ValidatedImg
                src={ValidatedSVG}
                alt=""
                isHidden={data.surname === ""}
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
          {...register("aboutMe")}
        />
      </InputElement>

      <InputElement>
        <Label>ელ.ფოსტა</Label>
        <InputDiv>
          <Input
            placeholder="anzorr666@redberry.ge"
            {...register("email")}
            status={statusChanger(errors.email, "email")}
          />
          {errors.email ? (
            <ErrorImg src={ErrorSVG} alt="" />
          ) : (
            <ValidatedImg
              src={ValidatedSVG}
              alt=""
              isHidden={data.email === ""}
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
            {...register("number")}
            status={statusChanger(errors.number, "number")}
          />
          {errors.number ? (
            <ErrorImg src={ErrorSVG} alt="" />
          ) : (
            <ValidatedImg
              src={ValidatedSVG}
              alt=""
              isHidden={data.number === ""}
            />
          )}
        </InputDiv>
        <Hint>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Hint>
      </InputElement>

      <PageController>
        <NextButton
          type="submit"
          onClick={() => file || setFileError("Please, upload photo")}
        >
          შემდეგი
        </NextButton>
      </PageController>
    </Container>
  );
};
