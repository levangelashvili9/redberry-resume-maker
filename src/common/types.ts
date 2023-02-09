type Jobs = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Universities = {
  name: string;
  degree: string;
  endDate: string;
  description: string;
};

export type DataTypes = {
  name: string;
  surname: string;
  aboutMe: string;
  email: string;
  number: string;
  jobs: Jobs[];
  universities: Universities[];
};
