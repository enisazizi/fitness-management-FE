import { configureRequest, makeRequest } from "./global";

const addClient = async (data) =>
  await makeRequest(configureRequest("client", data, "POST"));

const editClient = async (data) =>
  await makeRequest(configureRequest("client", data, "PUT"));

const deleteClient = async () =>
  await makeRequest(configureRequest("client", null, "DELETE"));

const getAllClients = async () =>
  await makeRequest(configureRequest("client/all", null, "GET"));

export default Object.freeze({
  addClient,
  editClient,
  deleteClient,
  getAllClients,
});
