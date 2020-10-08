<template>
  <v-container>
    <v-row>
      <v-btn color="primary" @click="redirectRegrasGerais"> Regras Gerais </v-btn>
    </v-row>
    <v-row class="mt-6">
      <v-btn color="primary" @click="redirectModelosDeLayout"> Modelos de Layout </v-btn>
    </v-row>
    <v-row class="mt-6">
      <v-btn color="primary" @click="redirectColetores"> Coletores </v-btn>
    </v-row>
  </v-container>
</template>
<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

@Component
export default class Home extends Vue {
  redirectRegrasGerais() {
    router.push('/regras-gerais');
  }

  redirectModelosDeLayout() {
    router.push('/layout');
  }

  redirectColetores() {
    router.push('/coletores');
  }
}
</script>
<style scoped></style>
