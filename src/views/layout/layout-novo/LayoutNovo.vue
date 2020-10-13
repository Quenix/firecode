<template>
  <v-container class="form">
    <v-row>
      <v-col xs="12" lg="4">
        <h1 class="secondary--text">Novo Modelo de Layout</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
          <v-row>
            <v-col lg="2">
              <label class="label">Nome do Layout</label>
            </v-col>
            <v-col lg="5">
              <v-text-field solo></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="2">
              <label class="label">Categoria</label>
            </v-col>
            <v-col lg="5">
              <v-combobox
                v-model="categoria"
                :items="categorias"
                :search-input.sync="search"
                :hide-no-data="!search"
                hide-selected
                hint="Pressione ENTER para incluir uma nova"
                label="Digite a categoria para incluir ou criar"
                multiple
                persistent-hint
                small-chips
                solo
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        Nenhum reusltado para "<strong>{{ search }}</strong
                        >". Pressione <kbd>enter</kbd> para criar esta categoria
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-combobox>
            </v-col>
          </v-row>
          <v-row class="mt-4">
            <v-col lg="2">
              <label class="label">Tipo do Arquivo</label>
            </v-col>
            <v-col lg="5">
              <v-btn-toggle v-model="tipo_arquivo" dense>
                <div style="background-color: var(--v-background-base)">
                  <v-btn
                    small
                    active-class="primary"
                    min-width="92"
                    class="mr-6"
                    >XLS</v-btn
                  >
                  <v-btn
                    small
                    active-class="primary"
                    min-width="92"
                    class="mr-6"
                    >CSV</v-btn
                  >
                  <v-btn
                    small
                    active-class="primary"
                    min-width="92"
                    class="mr-6"
                    >TXT</v-btn
                  >
                  <v-btn small active-class="primary" min-width="92">XML</v-btn>
                </div>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col lg="2">
              <label class="label">Tipo do Layout</label>
            </v-col>
            <v-col lg="5">
              <v-btn-toggle v-model="tipo_layout" dense>
                <div style="background-color: var(--v-background-base)">
                  <v-btn
                    small
                    active-class="primary"
                    min-width="92"
                    class="mr-6"
                    >Posicional</v-btn
                  >
                  <v-btn
                    small
                    active-class="primary"
                    min-width="92"
                    class="mr-6"
                    >Delimitado</v-btn
                  >
                </div>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col lg="2">
              <label class="label">Delimitadores dos Campos</label>
            </v-col>
            <v-col lg="5">
              <v-text-field solo></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="2">
              <label class="label">Layout de Referência</label>
            </v-col>
            <v-col lg="5">
              <v-file-input accept="image/*" label="File input" solo></v-file-input>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6">
        <span> Visualização </span>
        <v-simple-table class="mt-6">
          <template v-slot:default>
            <thead style="background-color: #28253f;">
              <tr>
                <th style="font-size: 16px; color: #ffffff;" class="text-left">Campo</th>
                <th style="font-size: 16px; color: #ffffff;" class="text-left">Conteúdo</th>
                <th style="font-size: 16px; color: #ffffff;" class="text-left">Nome</th>
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
.label {
  font-size: 16px;
  font-weight: 600;
  color: #1e1e1e;
}
</style>
