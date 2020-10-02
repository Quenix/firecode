import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/views/layout/Layout.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;