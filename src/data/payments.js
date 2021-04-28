import { makeRequest, configureRequest } from "./global";

const newPayment = async (data) =>
  await makeRequest(configureRequest("/payment", data, "POST"));
const getAll = async () =>
  await makeRequest(configureRequest("/payment", null, "GET"));
const getByID = async (id) =>
  await makeRequest(configureRequest(`/${id}`, null, "GET"));

export default Object.freeze({
  newPayment,
  getAll,
  getByID,
});
