import { useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { FormTypes, Schema } from "../../FormPage.types";
import { zodResolver } from "@hookform/resolvers/zod";

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
} from "../../../../common/styles/FormStyles";

type Props = {
  data: FormTypes;
  setData: React.Dispatch<React.SetStateAction<FormTypes>>;
};

export const PersonalInfo: React.FC<Props> = ({ data, setData }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const { register, watch } = useForm<FormTypes>({
    resolver: zodResolver(Schema),
  });

  useEffect(() => {
    const subscription = watch((values) => {
      setData({
        ...data,
        name: values.name || "",
        surname: values.surname || "",
        email: values.email || "",
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <Container>
      <DoubleInput>
        <InputElement>
          <Label>სახელი</Label>
          <Input placeholder="ანზორ" {...register("name")} />
          <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
        </InputElement>
        <InputElement>
          <Label>გვარი</Label>
          <Input placeholder="მუმლაძე" {...register("surname")} />
          <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
        </InputElement>
      </DoubleInput>
      <UploadPic>
        <UploadPicText>პირადი ფოტოს ატვირთვა</UploadPicText>
        <input ref={fileInputRef} type="file" style={{ display: "none" }} />
        <UploadPicButton type="button" onClick={handleFileClick}>
          ატვირთვა
        </UploadPicButton>
      </UploadPic>
      <InputElement>
        <Label>ჩემ შესახებ (არასავალდებულო)</Label>
        <Textarea placeholder="ზოგადი ინფო შენ შესახებ" />
      </InputElement>
      <InputElement>
        <Label>ელ.ფოსტა</Label>
        <Input placeholder="anzorr666@redberry.ge" {...register("email")} />
        <Hint>უნდა მთავრდებოდეს @redberry.ge-ით</Hint>
      </InputElement>
      <InputElement>
        <Label>მობილურის ნომერი</Label>
        <Input placeholder="+995 551 12 34 56" />
        <Hint>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Hint>
      </InputElement>
    </Container>
  );
};
