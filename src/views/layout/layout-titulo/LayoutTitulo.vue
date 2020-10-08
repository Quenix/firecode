<template>
  <v-container>
    <v-row>
      <v-col >
        <h2 class="secondary--text">Título do Modelo de Layout</h2>
      </v-col>
      <v-col >
        <v-stepper style="background-color: var(--v-background-base); box-shadow: none !important;">
            <v-stepper-header>
              <v-stepper-step step="1"> Layout </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="2">
                Transformações e Validações
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
      </v-col>
    </v-row>
    <v-row>
      <div class="d-flex justify-space-between">
        <div class="">
          <label class="label">Tipo de Arquivo</label>
          <v-text-field
            label="Tipo de Arquivo"
            value="CSV"
            disabled
            solo
            class="mt-2"
          ></v-text-field>
        </div>

        <div class="ml-10">
          <label class="label">Tipo do Layout</label>
          <v-text-field
            label="Tipo de Layout"
            value="Delimitado"
            disabled
            solo
            class="mt-2"
          ></v-text-field>
        </div>

        <div class="ml-10">
          <label class="label">Delimitador</label>
          <v-text-field
            label="Delimitadores de campo"
            value="|"
            disabled
            class="mt-2"
            solo
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
      <v-col>
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
                <td>
                  <v-text-field class="mt-5" solo :value="item.campo"></v-text-field>
                </td>
                <td>
                  <v-text-field class="mt-5" solo :value="item.Nome">
                  </v-text-field>
                  </td>
                <td>
                  <v-select
                    class="mt-5"
                    :items="item.Tipo"
                    label="Tipo de Arquivo"
                    solo
                  ></v-select>
                </td>
                <td>
                  <v-text-field
                    label="Tamanho"
                    class="mt-5"
                    :value="item.Tamanho"
                    solo
                  ></v-text-field>
                </td>
                <td>
                  <v-btn color="#e63946">
                    <v-icon color="#fff" style="font-size: 19px"
                      >fa-exclamation</v-icon
                    >
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#1aa4d2">
                    <v-icon color="#fff" style="font-size: 19px"
                      >fa-clipboard-check</v-icon
                    >
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#43aa8b">
                    <v-icon color="#fff" style="font-size: 19px"
                      >fa-thumbs-up</v-icon
                    >
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#43aa8b">
                    <v-icon color="#fff" style="font-size: 19px"
                      >fa-thumbs-up</v-icon
                    >
                  </v-btn>
                </td>
                <td>
                  <v-btn color="#823282">
                    <v-icon color="#fff" style="font-size: 21px"
                      >fa-pen-square</v-icon
                    >
                  </v-btn>
                </td>
                <td>
                  <v-btn color="primary"
                    ><v-icon style="font-size: 18px">fa-plus</v-icon></v-btn
                  >
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
<style scoped>
.label {
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1e1e1e;
}
</style>
