import axios from "axios";

const API_URL = "http://ec2-xx-xxx-xx-xx.compute.amazonaws.com/api"; // Reemplázalo con tu URL

const api = {
  getItems: () => axios.get(`${API_URL}/items`),
  addItem: (item) => axios.post(`${API_URL}/items`, item),
  deleteItem: (id) => axios.delete(`${API_URL}/items/${id}`),
};

export default api;
