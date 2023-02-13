import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataTypes } from "../types";
import { removeEmptyObjects } from "../utils/removeEmptyObjects";

const usePostData = (infoData: DataTypes) => {
  const navigate = useNavigate();

  const postData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: infoData.image,
        responseType: "blob",
      });

      const file = new File([res.data], "image", { type: "image/png" });
      const modifiedData = {
        ...infoData,
        image: file,
        phone_number: infoData.phone_number.replace(/\s/g, ""),
        experiences: removeEmptyObjects(infoData.experiences),
        educations: removeEmptyObjects(
          infoData.educations.map((education) => {
            return {
              ...education,
              degree_id: Number(education.degree_id),
            };
          })
        ),
      };

      const response = await axios.post(
        "https://resume.redberryinternship.ge/api/cvs",
        modifiedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      navigate("/resume", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return postData;
};

export default usePostData;
