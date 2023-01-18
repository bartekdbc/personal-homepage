import axios from "axios";

export const getPortfolio = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
