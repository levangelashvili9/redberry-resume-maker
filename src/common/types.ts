type Experiences = {
  position: string;
  employer: string;
  start_date: string;
  due_date: string;
  description: string;
};

type Educations = {
  institute: string;
  degree_id: string;
  due_date: string;
  description: string;
};

export type DataTypes = {
  name: string;
  surname: string;
  about_me: string;
  email: string;
  phone_number: string;
  experiences: Experiences[];
  educations: Educations[];
  image: string;
};

export type Degree = {
  id: number;
  title: string;
};
