export const isRequired = (obj: any, index: number) => {
  if (index !== 0 && Object.values(obj).every((value) => !value)) {
    return false;
  } else if (index !== 0 && Object.values(obj).some((value) => value !== "")) {
    return true;
  } else {
    return true;
  }
};
