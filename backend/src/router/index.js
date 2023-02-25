import {createRouter,createWebHistory} from 'vue-router';
import Dashboard from "../views/Dashboard.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Login from "../views/Login.vue";
import AppLayout from "../components/AppLayout.vue";
import notfound from "../views/NotFound.vue";
import store from "../store/index.js";
import NotFound from "../views/NotFound.vue";


const routes = [
    {
    path:'/app',
    name:'app',
    component:AppLayout,
        meta:{
        requiresAuth:true
        },
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
      component: Login,
        meta:{
          requiresGuest:true
        }
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta:{
            requiresGuest: true
        }
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword
    },
    {
        path: '/pathMatch(.*)',
        name:'notfound',
        component: NotFound
    }];
const router = createRouter(
    {
        history:createWebHistory(), ///domain.com/users
        routes
    })
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'login'})
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({name: 'app.dashboard'})
    } else {
        next();
    }
})

export default router;
