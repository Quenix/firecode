import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/views/layout/Layout.vue';
import LayoutNovo from '@/views/layout/layout-novo/LayoutNovo.vue'
import LayoutTitulo from '@/views/layout/layout-titulo/LayoutTitulo.vue';
import LayoutTransformacoes from '@/views/layout/layout-transformacoes/LayoutTransformacoes.vue';

import RegrasGerais from '@/views/regra/RegrasGerais.vue';
import RegraNova from '@/views/regra/regra-nova/RegraNova.vue';

import Coletores from '@/views/coletores/Coletores.vue';

import Home from '@/views/home/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  //temp debug
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  //*
  //MODELOS DE LAYOUT
  //*
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
    path: '/layout/transformacoes',
    name: 'LayoutTransformacoes',
    component: LayoutTransformacoes
  },
  //*
  //REGRAS GERAIS
  //*
  {
    path: '/regras-gerais',
    name: 'RegrasGerais',
    component: RegrasGerais,
  },
  {
    path: '/regras-gerais/novo',
    name: 'RegraNova',
    component: RegraNova,
  },

  //*
  //COLETORES
  //*
  {
    path: '/coletores',
    name: 'Coletores',
    component: Coletores
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
