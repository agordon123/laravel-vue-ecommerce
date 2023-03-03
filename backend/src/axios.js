import axios from "axios";
import store from './main';
import router from './router/index.js';
import {getActivePinia,setActivePinia} from "pinia";

const axiosClient=axios.create({
    baseURL:`{import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config =>{
    console.log(config)
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})

axiosClient.interceptors.response.use(response =>{
    return response;
},error => {
    if(error.response.status === 401){
        store.commit('setToken',null)
        router.push({name:'login'}).then(()=>{
            throw error;
        }
       )

    }

})

export default axiosClient;
