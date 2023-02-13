// import useFetchDropdown from "../../../../../common/hooks/useFetchDropdown";
import { DataTypes, Degree } from "../../../../../common/types";

export const findDegreeTitle = (
  index: number,
  data: DataTypes,
  degreesList: Degree[]
) => {
  // const degreesList = useFetchDropdown();

  const correctDegree = degreesList.find(
    (degree) => String(degree.id) === data.educations[index].degree_id
  );

  return correctDegree?.title;
};
