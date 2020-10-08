<template>
  <v-app style="background-color: var(--v-background-base)">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
<style> *{ text-transform: none !important; } </style>
