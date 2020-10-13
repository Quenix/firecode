<template>
  <div class="footer d-flex justify-end align-center">
    <div class="mr-10">
      <v-btn color="" class="mr-10 button" @click="$emit('cancelar')"> Cancelar </v-btn>
      <v-btn color="primary" class="button" @click="$emit('salvar')"> Salvar </v-btn>
    </div>
  </div>
</template>
<script lang="ts" src="./footer.component.ts"></script>
<style scoped>
.footer {
  min-width: 100%;
  min-height: 100px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -1px 10px 0 rgba(0, 0, 0, 0.21);
  z-index: 1;
}
.button{
  min-height: 50px;
  min-width: 200px !important;
}
</style>
