import axios from "axios";
const configure = (urlExtention, data, method) => ({
  url: "http://localhost:3030" + urlExtention,
  method,
  data,
  withCredentials: true,
});
//CLIENTS

const getOnlineClients = async()=>{
  try {
    let res = await axios(configure("/api/activity/all",null,"get"))
    return res
  } catch (error) {
    console.log(error)
  }
}
const getClients = async()=>{
  try {
    let res = await axios(configure("/api/client/all",null,"get"))
    return res.data
  } catch (error) {
    console.log(error)
  }
}
const addClient = async (data) => {
  try {
    let response = await axios(configure("/api/client", data, "post"));
    response = response.data;
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};
const login = async (data) => {
  try {
    const response = await axios(configure("/api/auth/login", data, "post"));
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
    const response = await axios(configure("/api/product",data,"post"))
    return response
  } catch (error) {
    console.log(error)
  }
}
const addProductPhoto = async(data,id)=>{
  try {
    const response = await axios(configure(`/api/product/${id}/image/upload`,data,"post"))
    return response
  } catch (error) {
    console.log(error)
  }
}
const getAllProducts = async()=>{
  try {
    const response = await axios(configure("/api/product/all",null,"get"))
    return response.data
  } catch (error) {
    
  }
}
const getProduct = async(id)=>{
  try {
    const response = await axios(configure(`/api/product/${id}`,null,"get"))
    return response.data
  } catch (error) {
    console.log(error)
  }
}
const editProduct = async(data,id)=>{
  try {
    const response = await axios(configure(`/api/product/${id}`,data,"put"))
    return response
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async(id)=>{
  try {
    const response = await axios(configure(`/api/product/${id}`,null,"delete"))
    return response
  } catch (error) {
    console.log(error)
  }
}

const makePayment = async(id,data)=>{
  try {
    const response = await axios(configure(`/api/client/${id}`,data,"post"))
    return response
  } catch (error) {
    console.log(error)
  }
}




export const api = {
  addClient,
  login,
  editClient,
  deleteClient,
  addNewProduct,
  getAllProducts,
  addProductPhoto,
  getProduct,
  editProduct,
  deleteProduct,
  getClients,
  makePayment,
  getOnlineClients,

};
