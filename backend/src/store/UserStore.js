import { defineStore } from 'pinia'
import axios from 'axios'
import { User } from '../models/User';
import axiosClient from "../axios.js";
import store from "../main.js";
import router from "../router/index.js";


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
export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        isAuthenticated() {
            return !!this.user
        },
    },
    actions: {
        async fetchUser() {
            try {
                const response = await axios.get('/api/user/')
                const userData = response.data
                const user = new User(userData)
                this.user = user

                return true
            } catch (error) {
                console.error(error)
                return false
            }
        },
    },
})

export default useUserStore;
