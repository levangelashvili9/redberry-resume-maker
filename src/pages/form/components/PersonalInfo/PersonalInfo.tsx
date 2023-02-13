import { SubmitHandler, useForm } from "react-hook-form";
import { DataTypes } from "../../../../common/types";
import { statusChanger } from "../../../../common/utils/statusChanger";

import {
  Container,
  DoubleInput,
  Input,
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
} from "../../../../common/styles/FormStyles";

import { errorSvgHandler } from "../../../../common/utils/errorSvgHandler";

type Props = {
  infoData: DataTypes;
  setInfoData: React.Dispatch<React.SetStateAction<DataTypes>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PersonalInfo: React.FC<Props> = ({
  infoData,
  setInfoData,
  setStep,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataTypes>({
    mode: "onChange",
  });

  const convert2base64 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result?.toString();
        result && setInfoData({ ...infoData, image: result });
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<DataTypes> = (data) => {
    setStep(1);
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
            {errorSvgHandler(errors.name, infoData.name)}
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
            {errorSvgHandler(errors.surname, infoData.surname)}
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
          accept="image/png, image/jpeg"
          {...register("image", {
            required: infoData.image ? false : true,
            onChange: (event) => {
              convert2base64(event);
            },
          })}
        />
        <UploadPicButton htmlFor="fileUpload">ატვირთვა</UploadPicButton>
        {errors.image && <p>Please, select a file</p>}
      </UploadPic>

      <InputElement>
        <Label>ჩემ შესახებ (არასავალდებულო)</Label>
        <Textarea
          placeholder="ზოგადი ინფო შენ შესახებ"
          {...register("about_me", {
            onChange: (e) => {
              setInfoData({ ...infoData, about_me: e.target.value });
            },
          })}
          defaultValue={infoData.about_me}
        />
      </InputElement>

      <InputElement>
        <Label>ელ.ფოსტა</Label>
        <InputDiv>
          <Input
            placeholder="anzorr666@redberry.ge"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              onChange: (e) => {
                setInfoData({ ...infoData, email: e.target.value });
              },
            })}
            defaultValue={infoData.email}
            status={statusChanger(errors.email, infoData.email)}
          />
          {errorSvgHandler(errors.email, infoData.email)}
        </InputDiv>
        <Hint>უნდა მთავრდებოდეს @redberry.ge-ით</Hint>
      </InputElement>

      <InputElement>
        <Label>მობილურის ნომერი</Label>
        <InputDiv>
          <Input
            placeholder="+995 551 12 34 56"
            {...register("phone_number", {
              required: true,
              pattern: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
              onChange: (e) => {
                setInfoData({ ...infoData, phone_number: e.target.value });
              },
            })}
            defaultValue={infoData.phone_number}
            status={statusChanger(errors.phone_number, infoData.phone_number)}
          />
          {errorSvgHandler(errors.phone_number, infoData.phone_number)}
        </InputDiv>
        <Hint>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Hint>
      </InputElement>

      <PageController>
        <NextButton type="submit">შემდეგი</NextButton>
      </PageController>
    </Container>
  );
};
