import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://10.0.0.170:5126/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;