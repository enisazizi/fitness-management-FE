import { makeRequest, configureRequest } from "./global";

const checkIn = async () =>
  makeRequest(configureRequest("/activity", null, "GET"));

const checkOut = async (id) =>
  makeRequest(configureRequest(`/activity/${id}`, null, "PUT"));

const type = async (type) =>
  makeRequest(configureRequest(`/activity/${type}`, null, "GET"));

export default Object.freeze({
  checkIn,
  checkOut,
  type,
});
