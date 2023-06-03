import axios from 'axios';

axios.defaults.baseURL = 'https://food-delivery-backend-r64y.onrender.com';

export const fetchShops = async () => {
  const response = await axios.get(`/api/shops`);
  return response.data;
};

export const createOrder = async order => {
  return axios.post(`/api/orders`, order);
};

export const fetchOrderHistory = async (email, phone) => {
  const response = await axios.get(`/api/orders/history`, {
    email,
    phone,
  });
  return response.data;
};