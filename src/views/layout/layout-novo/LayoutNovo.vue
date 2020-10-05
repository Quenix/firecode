<template>
  <v-container>
    <v-row>
      <v-col xs="12" lg="4">
        <h1 class="secondary--text">Novo Modelo de Layout</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" lg="6">
        <form>
          <div class="form-group">
            <v-text-field label="Nome" filled></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field label="Categoria" filled></v-text-field>
          </div>

          <div class="form-group">
            <v-select
              :items="tipo_arquivo"
              filled
              label="Tipo de Arquivo"
            ></v-select>
          </div>

          <div class="form-group">
            <v-select
              :items="tipo_layout"
              filled
              label="Tipo de Layout"
            ></v-select>
          </div>

          <div class="form-group">
            <v-text-field label="Delimitadores de campo" filled></v-text-field>
          </div>

          <div class="form-group">
            <v-file-input
              accept="image/*"
              label="Layout de referência"
              filled
            ></v-file-input>
          </div>
        </form>
      </v-col>
    </v-row>
    <Footer @cancelar="cancelar" @salvar="salvar"></Footer>
  </v-container>
</template>
<script lang="ts" src="./layout-novo.component"></script>
<style scoped>
</style>
