import {createRouter, createWebHistory} from "vue-router";
import AppLayout from '../components/AppLayout.vue'
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
/*
import Products from "../views/Products/Products.vue";
import Users from "../views/Users/Users.vue";
import Customers from "../views/Customers/Customers.vue";
import CustomerView from "../views/Customers/CustomerView.vue";
import Orders from "../views/Orders/Orders.vue";
import OrderView from "../views/Orders/OrderView.vue";

 */
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";
import useAuthStore from "../store/AuthStore.js";
import GuestLayout from "../components/GuestLayout.vue";
import App from "../App.vue";
/*
import Report from "../views/Reports/Report.vue";
import OrdersReport from "../views/Reports/OrdersReport.vue";
import CustomersReport from "../views/Reports/CustomersReport.vue";
*/
const routes = [
    {
        path: '/app',
        name: 'login',
        Component: GuestLayout,
        children: [
            {
                path: 'app/login',
                name: 'login',
                component: Login,
                meta: {
                    isAuthenticated: false
                }
            },
            {
                path: '/request-password',
                name: 'requestPassword',
                component: RequestPassword,
                meta: {
                    isAuthenticated: false
                }
            },
            {
                path: '/reset-password/:token',
                name: 'resetPassword',
                component: ResetPassword,
                meta: {
                    isAuthenticated: false
                }
            },
            ],
    },
    {
        path:'/app/home',
        name:'home',
        Component: AppLayout,
        meta:{
           isAuthenticated:true,
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            /*
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
            {
                path: 'users',
                name: 'app.users',
                component: Users
            },
            {
                path: 'customers',
                name: 'app.customers',
                component: Customers
            },
            {
                path: 'customers/:id',
                name: 'app.customers.view',
                component: CustomerView
            },
            {
                path: 'orders',
                name: 'app.orders',
                component: Orders
            },
            {
                path: 'orders/:id',
                name: 'app.orders.view',
                component: OrderView
            },
            {
                path: '/report',
                name: 'reports',
                component: Report,
                meta: {
                    requiresAuth: true
                },
                children: [
                    {
                        path: 'orders/:date?',
                        name: 'reports.orders',
                        component: OrdersReport
                    },
                    {
                        path: 'customers/:date?',
                        name: 'reports.customers',
                        component: CustomersReport
                    }
                ]
            },*/
        ]
    },

    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record=>record.meta.isAuthenticated)) {
        if(!useAuthStore().user)
        next({name: 'login'})
    } else if (useAuthStore().user && useAuthStore().token) {
        next({name: 'app/dashboard'})
    } else {
        next();
    }

})

export default router;
