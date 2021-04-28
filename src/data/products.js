import { makeRequest, configureRequest } from "./global";

const newProduct = async (data) => {
  return await makeRequest(configureRequest("/product/", data, "POST"));
};
const getAll = async () => {
  return await makeRequest(configureRequest("/product/all", null, "POST"));
};
const getByID = async (id) => {
  return await makeRequest(configureRequest(`/product/${id}`, null, "GET"));
};
const editByID = async (id, data) => {
  return await makeRequest(configureRequest("/product/all", data, "PUT"));
};
const deleteByID = async (id) => {
  return await makeRequest(configureRequest(`/product/${id}`, null, "PUT"));
};
// const addImage = async (id, data) => {
//   return await makeRequest(configureRequest("/product/all", data, "PUT"));
// };

export default Object.freeze({
  newProduct,
  getAll,
  getByID,
  editByID,
  deleteByID,
});
