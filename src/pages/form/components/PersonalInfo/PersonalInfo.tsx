import { useRef, useState } from "react";

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
} from "./PersonalInfo.styled";

export const PersonalInfo = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files?.[0];
    // setSelectedFile(file || null);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <DoubleInput>
        <InputElement>
          <Label>სახელი</Label>
          <Input placeholder="ანზორ" />
          <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
        </InputElement>
        <InputElement>
          <Label>გვარი</Label>
          <Input placeholder="მუმლაძე" />
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
        <Input placeholder="anzorr666@redberry.ge" />
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
