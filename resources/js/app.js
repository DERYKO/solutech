/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import Notifications from 'vue-notification';

Vue.use(Notifications);
Vue.use(VueRouter)

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
import Signup from './components/Signup.vue'
import AppLayout from './components/App_layout.vue'
import Login from './components/Login.vue'

const routes = [
    {path: '/', component: Login},
    {path: '/register', component: Signup},
    {
        path: '/home', props: true, component: AppLayout, children: [
            {
                path: '/suppliers',
                name: 'app.suppliers',
                component: () => import(/* webpackChunkName: "events" */ './components/Suppliers')
            },
            {
                path: '/products',
                name: 'app.products',
                component: () => import(/* webpackChunkName: "events" */ './components/Products')
            },
            {
                path: '/orders',
                name: 'app.orders',
                component: () => import(/* webpackChunkName: "events" */ './components/Orders')
            },
            {
                path: '/suppliers/edit',
                name: 'app.supplier.edit',
                component: () => import(/* webpackChunkName: "events" */ './components/Supplier-edit'),
            },
            {
                path: '/orders/edit',
                name: 'app.order.edit',
                component: () => import(/* webpackChunkName: "events" */ './components/Order-edit'),
            },
            {
                path: '/product/edit',
                name: 'app.product.edit',
                component: () => import(/* webpackChunkName: "events" */ './components/Product-edit'),
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
});
