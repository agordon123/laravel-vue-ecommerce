import {createRouter,createWebHistory} from 'vue-router';
import Dashboard from "../views/Dashboard.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Login from "../views/Login.vue";
import AppLayout from "../components/AppLayout.vue";
const routes = [
    {
    path:'/app',
    name:'app',
    component:AppLayout,
        children:[
            {
                path:'dashboard',
                name:'app.dashboard',
                component:Dashboard
            }
        ]
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword
    }
        ];
const router = createRouter(
    {
        history:createWebHistory(), ///domain.com/users
        routes
    }
)
export default router;
