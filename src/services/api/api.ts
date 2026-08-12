import axios from "axios";
import constant from "./constant";
const axiosInstace = axios.create({
    baseURL:constant.baseURL,
      headers: {
    'Content-Type': 'application/json',
  },
    
})
export {axiosInstace}