import axios from 'axios';


const instance = axios.create({
  // The API (Cloud function) URL
  baseURL: "https://amazon-backend-tvfo.onrender.com",
});

export default instance;
