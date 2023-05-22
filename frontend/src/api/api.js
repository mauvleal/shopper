import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001"
});

const getALLProducts = async () => {
  try {
    const response = await API.get('/products');
    return response;
  } catch (error) {
    return error.response;
  }
};

const getById = async (id) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const upDate = async (id, data) => {
  try {
    const response = await API.put(`/products/${id}`, data );
    return response;
  } catch (error) {
    return error.response;
  }
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
getALLProducts,
getById,
upDate,
};