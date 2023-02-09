import { useState, useEffect } from "react";

type Degree = {
  id: number;
  title: string;
};

const useFetchDropdown = () => {
  const [degreesList, setDegreesList] = useState<Degree[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await response.json();
      setDegreesList(data);
    };
    fetchData();
  }, []);

  return degreesList;
};

export default useFetchDropdown;
