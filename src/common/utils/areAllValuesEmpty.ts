export const areAllValuesEmpty = (array: { [key: string]: any }[]) =>
  array.every((obj) => Object.values(obj).every((value) => !value));
