<template>
  <v-container>
    <v-row>
      <v-col lg="8">
        <h2 class="secondary--text">Título do Modelo de Layout</h2>
      </v-col>
      <v-col lg="4">
        <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <div class="d-flex justify-space-between">
        <div class="">
          <v-text-field
            label="Tipo de Arquivo"
            value="CSV"
            disabled
            filled
          ></v-text-field>
        </div>

        <div class="ml-10">
          <v-text-field
            label="Tipo de Layout"
            value="Delimitado"
            disabled
            filled
          ></v-text-field>
        </div>

        <div class="ml-10">
          <v-text-field
            label="Delimitadores de campo"
            value="|"
            disabled
            filled
          ></v-text-field>
        </div>
      </div>
    </v-row>

    <v-row class="mt-8">
      <v-col lg="8">
        <h2 class="secondary--text">Layout</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Campo</th>
                <th class="text-left">Nome</th>
                <th class="text-left">Tipo</th>
                <th class="text-left">Tamanho</th>
                <th class="text-left">Implantação</th>
                <th class="text-left">Inclusão</th>
                <th class="text-left">Exclusão</th>
                <th class="text-left">Alteração</th>
                <th class="text-left">Descrição</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabela" :key="item.campo">
                <td>{{ item.campo }}</td>
                <td>{{ item.Nome }}</td>
                <td>
                  <v-select
                    :items="item.Tipo"
                    label="Tipo de Arquivo"
                  ></v-select>
                </td>
                <td>
                  <v-text-field
                    label="Tamanho"
                    :value="item.Tamanho"
                  ></v-text-field>
                </td>
                <td>
                  <v-btn color="#e63946">
                    <v-icon color="#fff">mdi-exclamation</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#1aa4d2">
                    <v-icon color="#fff">mdi-bookmark-check-outline</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#43aa8b">
                    <v-icon color="#fff">mdi-thumb-up-outline</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#43aa8b">
                    <v-icon color="#fff">mdi-thumb-up-outline</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#823282">
                    <v-icon color="#fff">mdi-pencil</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn color="primary"><v-icon>mdi-plus</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" src="./layout-titulo.component"></script>
<style scoped></style>
