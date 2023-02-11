import axios from "axios";
import { DataTypes } from "../types";

const usePostData = (infoData: DataTypes) => {
  const postData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: infoData.image,
        responseType: "blob",
      });

      const file = new File([res.data], "image", { type: "image/png" });
      const modifiedData = { ...infoData, image: file };

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
    } catch (error) {
      console.log(error);
    }
  };

  return postData;
};

export default usePostData;
