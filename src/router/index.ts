import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/views/layout/Layout.vue';
import LayoutNovo from '@/views/layout/layout-novo/LayoutNovo.vue'
import LayoutTitulo from '@/views/layout/layout-titulo/LayoutTitulo.vue';

import RegrasGerais from '@/views/regra/RegrasGerais.vue';

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
  },
  {
    path: '/layout/titulo',
    name: 'LayoutTitulo',
    component: LayoutTitulo
  },
  {
    path: '/regras-gerais',
    name: 'RegrasGerais',
    component: RegrasGerais,
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
