import axios from "axios";

const baseUrl = process.env.API_URL || "http://localhost:3030/api/";

export const makeRequest = async (configure) => {
  try {
    const response = await axios(configure);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const configureRequest = (url, data, method) => ({
  url: baseUrl + url,
  method,
  data,
  withCredentials: true,
});
