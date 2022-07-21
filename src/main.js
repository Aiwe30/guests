import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import { createRouter, createWebHistory} from "vue-router";
import { routes } from './routes.js';

const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const vm = createApp(App);
vm.use(pinia);
vm.use(router);
vm.use(PiniaVuePlugin);
vm.mount('#app');

