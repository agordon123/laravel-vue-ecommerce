import { createApp } from 'vue'
import {createPinia} from "pinia";
import './index.css'
import router from './router'
import App from "./App.vue";


const app = createApp(App);
const store = createPinia();


app.use(router).use(store).mount('#app');

export default {app,store};
