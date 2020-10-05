<template>
  <v-container class="form">
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
              chips
              multiple
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

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Campo</th>
                <th class="text-left">Conteúdo</th>
                <th class="text-left">Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabela" :key="item.campo">
                <td>{{ item.campo }}</td>
                <td>{{ item.Conteúdo }}</td>
                <td>{{ item.Nome }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <Footer @cancelar="cancelar" @salvar="salvar"></Footer>
  </v-container>
</template>
<script lang="ts" src="./layout-novo.component"></script>
<style scoped>
.form {
  margin-bottom: 120px;
}
</style>
