import axios from "axios";
const configure = (urlExtention, data, method) => ({
  url: "http://localhost:3030" + urlExtention,
  method,
  data,
  withCredentials: true,
});
//CLIENTS
const addClient = async (data) => {
  try {
    let response = await axios(configure("/client", data, "post"));
    response = response.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};
const login = async (data) => {
  try {
    const response = await axios(configure("/auth/login", data, "post"));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const editClient = async (data) => {
  try {
    const response = await axios(configure("/client", data, "put"));
    return response;
  } catch (error) {
    console.log(error);
  }
};
const deleteClient = async () => {
  try {
    const response = await axios(configure("/client", null, "delete"));
    return response;
  } catch (error) {
    console.log(error);
  }
};
const addNewProduct = async(data)=>{
  try {
    const response = await axios(configure("/product",data,"post"))
    return response.data
  } catch (error) {
    
  }
}
const getAllProducts = async()=>{
  try {
    const response = await axios(configure("/product/all",null,"get"))
    return response.data
  } catch (error) {
    
  }
}






export const api = {
  addClient,
  login,
  editClient,
  deleteClient,
  addNewProduct,
  getAllProducts,

};
