<template>
  <v-row>
    <v-col lg="12">
      <v-card elevation="1">
        <div class="d-flex justify-center pt-6">
          <h3 class="secondary--text">{{ message }}</h3>
        </div>
        <div class="d-flex justify-center main">
          <v-icon size="100" style="opacity: 0.2;">fa-folder-open</v-icon>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./empty.component"></script>
<style scoped>
.main {
  min-height: 400px;
}
</style>
