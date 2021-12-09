export const convertToArray = (string) => {
  console.log("string", string);
  const stringToArray = string.split(",");
  console.log("stringToArray", stringToArray);

  return stringToArray.map(el => { return { name: el } });
}

export const convertToString = (array) => {
  if (typeof array === 'undefined') return false;
  if (array.length === 0) return "";
  console.log(array);
  const planArray = array.map(el => el.name);
  console.log("planArray", planArray);

  return planArray.join(",");
}