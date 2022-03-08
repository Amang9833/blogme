import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : 'https://bloggingisfree.herokuapp.com/api/'
})
