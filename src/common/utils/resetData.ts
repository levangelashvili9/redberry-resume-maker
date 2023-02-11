import { DataTypes } from "../types";

const resetData = (
  setInfoData: React.Dispatch<React.SetStateAction<DataTypes>>,
  setStep: React.Dispatch<React.SetStateAction<number>>
) => {
  setInfoData({
    name: "",
    surname: "",
    about_me: "",
    email: "",
    phone_number: "",
    experiences: [
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ],
    educations: [
      { institute: "", degree_id: "", due_date: "", description: "" },
    ],
    image: "",
  });
  setStep(0);
};

export default resetData;
