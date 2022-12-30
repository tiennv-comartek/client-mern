import axios from "axios";

const URL = "https://tiensv-mern1.onrender.com";

export const fetchPosts = () => {
  return axios.get(`${URL}/posts`);
};

export const createPosts = (payload) => {
  return axios.post(`${URL}/posts`, payload);
};

export const updatePosts = (payload) => {
  return axios.post(`${URL}/posts/update`, payload);
};
