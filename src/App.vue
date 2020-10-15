<template>
  <v-app style="background-color: var(--v-background-base)">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import './assets/css/main.css';

export default Vue.extend({
  name: 'App',
});
</script>
<style> *{ text-transform: none !important; }
.scrollbar::-webkit-scrollbar {
  width: .5em;
}

.scrollbar::-webkit-scrollbar-track {
  opacity: 1;
  background-color: #f4f4f4;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--v-primary-base);
  border-radius: 10px;
}
 </style>
