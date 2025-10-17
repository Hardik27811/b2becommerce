import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000/api",
<<<<<<< HEAD
=======
    // baseURL:"http://192.168.1.58:3000/api",
>>>>>>> f949be4f321e5ff2c6ae3353bdafcc5acd2406bb
    withCredentials:true
})

export default axiosInstance
