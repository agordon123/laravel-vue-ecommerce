import { createApp } from 'vue'
import {createPinia} from "pinia";
import './index.css'
import router from './router'
import app from "./app.vue";


createApp(app).use(router).use(createPinia).mount('#app');

export default app;
