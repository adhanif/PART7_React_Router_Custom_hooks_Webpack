import axios from "axios";
const url = `https://studies.cs.helsinki.fi/restcountries/api/name/`;

export const getAll = async (name) => {
  const response = await axios.get(url + name);
  return response.data;
};
