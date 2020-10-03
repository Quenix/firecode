import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/views/layout/Layout.vue';
import LayoutNovo from '@/views/layout/layout-novo/LayoutNovo.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/layout/novo',
    name: 'LayoutNovo',
    component: LayoutNovo,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
