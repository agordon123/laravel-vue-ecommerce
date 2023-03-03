import { defineStore } from 'pinia'
import axios from 'axios'
import axiosClient from "../axios.js";
export const useAuthStore = defineStore('Auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        isAuthenticated() {
            return !!this.user;
        },
    },
    actions: {
        async login(email, password) {
            try {
                const response = await axios.postForm(`/login`, {
                    email,
                    password,
                })
                const { user, token } = response.data;

                this.user = user;
                this.token = token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                return true;
            } catch (error) {
                console.error(error)
                return false;
            }
        },

        async logout() {
            try {
                await axios.post('/api/logout');
                this.user = null;
                this.token = null;
                delete axios.defaults.headers.common['Authorization']
            } catch (error) {
                console.error(error);
            }
        },

        async register(name, email, password, password_confirmation) {
            try {
                const response = await axios.post('/register', {
                    name,
                    email,
                    password,
                    password_confirmation,
                })
                const { user, token } = response.data

                this.user = user
                this.token = token
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

                return true
            } catch (error) {
                console.error(error)
                return false
            }
        },

        async fetchUser() {
            try {
                const response = await axios.get('user');
                const { user } = response.data;

                this.user = user;

                return true;
            } catch (error) {
                console.error(error)
                return false;
            }
        },
    },
})
export default useAuthStore;
