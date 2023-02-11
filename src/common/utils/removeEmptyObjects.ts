export function removeEmptyObjects(array: object[]): object[] {
  return array.filter((obj) => {
    return Object.values(obj).some((val) => val !== "" && val !== null);
  });
}
