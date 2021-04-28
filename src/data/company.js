import { configureRequest, makeRequest } from "./global";

const getMe = async () =>
  makeRequest(configureRequest("/company/me", null, "GET"));

const editMe = async (data) =>
  makeRequest(configureRequest("/company", data, "PUT"));

const deleteMe = async () =>
  makeRequest(configureRequest("/company", null, "DELETE"));

export default Object.freeze({
  getMe,
  editMe,
  deleteMe,
});
