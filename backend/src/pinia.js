import {defineStore} from 'pinia';
import axios from 'axios';
import axiosClient from "./axios.js";
import {commit} from "lodash/seq.js";
import authStore from "./store/AuthStore.js";
export const useStore = defineStore({
    id: 'authStore',
    state: () => ({
        user: [ ],
        token:null,
    }),
    actions: {
        async login(data){
            return axiosClient.post('/login',data).then(({data})=>{
        authStore().user = data.user;
        authStore().token = data.token;
        return data;
        })
    },
    },
    getters: {
    },
});

const state = {
    user: {
        token: sessionStorage.getItem('TOKEN'),
        data: {}
    },
    products: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    users: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    customers: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    countries: [],
    orders: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    toast: {
        show: false,
        message: '',
        delay: 5000
    },
    dateOptions: [
        {key: '1d', text: 'Last Day'},
        {key: '1k', text: 'Last Week'},
        {key: '2k', text: 'Last 2 Weeks'},
        {key: '1m', text: 'Last Month'},
        {key: '3m', text: 'Last 3 Months'},
        {key: '6m', text: 'Last 6 Months'},
        {key: 'all', text: 'All Time'},
    ]
}
// Set up an axios interceptor to automatically add the CSRF token to requests
axios.interceptors.request.use((config) => {
    config.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return config;
});

// Set up an axios interceptor to handle authentication with Laravel Sanctum
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location = '/login';
        }
        return Promise.reject(error);
    }
);

export function getCurrentUser({commit},data){
    return axiosClient.get('/user',data).then((data)=>{
        commit('setUser',data);
        return data;
    })
}
export function login({commit},data){
    return axiosClient.post('/login',data).then(({data})=>{
        commit('setUser',data.user);
        commit('setToken',data.token);
        return data;
    })
}

export default function logout({commit}){
    return axiosClient.post('/logout').then((response)=>{
        commit('setToken',null);
        return response;
    })
}
export function getCountries({commit}){
    return axiosClient.get('countries').then(({data})=>{
        commit('setCountries',data);
    })
}

export function getOrders({commit,state}, {url = null,search='',per_page,sort_field,sort_direction}={}){
    commit('setOrders',[true])
    url=url || '/orders'
    const params = {
        per_page:state.orders.limit,
    }
    return axiosClient.get(url,{
        params:{
            ...params,
            search,per_page,sort_field,sort_direction
        }
    })
        .then((response)=>{
            commit('setOrders',[false,response.data])
        })
        .catch(()=>{
            commit('setOrders',[false]);
        })
}
export function getOrder({commit}, id) {
    return axiosClient.get(`/orders/${id}`)
}

export function getProducts({commit,state},{url = null,search = '',per_page,sort_field,sort_direction}){

}
