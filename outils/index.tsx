import { NameObj } from "../types";

export const convertToArray = (string: String): NameObj[] => {
  if (!string) return [];

  const stringToArray = string.split(",");

  return stringToArray.map(el => { return { name: el.trim() } });
}

export const convertToString = (array: NameObj[]): string => {
  if (typeof array === 'undefined') return "";
  if (array.length === 0) return "";

  const planArray = array.map((el: NameObj) => el.name);

  return planArray.join(",");
}