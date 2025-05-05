import axios from "axios";
import {ACCESS_TOKEN} from './constants'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

/*api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)*/

api.interceptors.request.use(
    (config) => {
      const publicEndpoints = ['/user/register/', '/user/login/'];
      const isPublic = publicEndpoints.some((url) => config.url?.includes(url));
  
      if (!isPublic) {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );
  

export default api;