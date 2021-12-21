import { genre } from "../types";

export const convertToArray = (string: String): genre[] => {
  if (!string) return [];

  const stringToArray = string.split(",");

  return stringToArray.map(el => { return { name: el.trim() } });
}

export const convertToString = (array: genre[]): string => {
  if (typeof array === 'undefined') return "";
  if (array.length === 0) return "";

  const planArray = array.map((el: genre) => el.name);

  return planArray.join(",");
}