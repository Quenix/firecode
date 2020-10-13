<template>
   <v-container>
    <v-row>
      <v-col >
        <h2 class="secondary--text">Título do Modelo de Layout</h2>
      </v-col>
      <v-col >
        <v-stepper value=2 style="background-color: var(--v-background-base); box-shadow: none !important;">
            <v-stepper-header>
              <v-stepper-step step="1" complete> Layout </v-stepper-step>

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
        <h2 class="secondary--text">Transformações e Validações</h2>
      </v-col>
    </v-row>
   </v-container>
</template>
<script lang="ts" src="./layout-transformacoes.component"></script>
<style scoped></style>
