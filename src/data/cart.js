import { configureRequest, makeRequest } from "./global";

const addProduct = async (productID) =>
  makeRequest(configureRequest(`/cart/add/${productID}`, null, "PUT"));
const removeProduct = async (productID) =>
  makeRequest(configureRequest(`/cart/add/${productID}`, null, "PUT"));
const getTotal = async () =>
  makeRequest(configureRequest("/cart/", null, "GET"));

export default Object.freeze({ addProduct, removeProduct, getTotal });
