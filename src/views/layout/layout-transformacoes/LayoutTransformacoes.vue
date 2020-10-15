<template>
  <v-container style="margin-bottom: 120px;">
    <v-row>
      <v-col>
        <h2 class="secondary--text">Título do Modelo de Layout</h2>
      </v-col>
      <v-col>
        <v-stepper
          value="2"
          style="
            background-color: var(--v-background-base);
            box-shadow: none !important;
          "
        >
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

    <v-row>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(item, i) in tabela" :key="i">
          <v-expansion-panel-header
            >{{ item.campo }} - {{ item.Nome }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-row>
              <v-col lg="6">
                <v-card class="mx-auto" max-width="500">
                  <v-list>
                    <v-toolbar color="secondary" style="color: #fff"
                      >Transformações</v-toolbar
                    >
                    <v-list-item-group v-model="item.transformacoes" multiple>
                      <template v-for="(item, i) in transformacoes">
                        <v-divider
                          v-if="!item"
                          :key="`divider-${i}`"
                        ></v-divider>

                        <v-list-item
                          v-else
                          :key="`item-${i}`"
                          :value="item"
                          active-class="accent"
                        >
                          <template v-slot:default="{ active }">
                            <v-list-item-action>
                              <v-checkbox
                                :input-value="active"
                                color="primary"
                              ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>
              <v-col lg="6">
                <v-card class="mx-auto" max-width="500">
                  <v-list>
                    <v-toolbar color="secondary" style="color: #fff"
                      >Validações</v-toolbar
                    >
                    <v-list-item-group v-model="item.validacoes" multiple>
                      <template v-for="(item, i) in validacoes">
                        <v-divider
                          v-if="!item"
                          :key="`divider-${i}`"
                        ></v-divider>

                        <v-list-item
                          v-else
                          :key="`item-${i}`"
                          :value="item"
                          active-class="accent"
                        >
                          <template v-slot:default="{ active }">
                            <v-list-item-action>
                              <v-checkbox
                                :input-value="active"
                                color="primary"
                              ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col lg="6">
                <div class="mt-6 d-flex justify-end">
                  <v-btn color="secondary" min-width="205" class="mr-6"
                    >Aplicar</v-btn
                  >
                  <v-btn color="primary" max-width="50"
                    ><v-icon>fa-plus</v-icon></v-btn
                  >
                </div>
              </v-col>
              <v-col lg="6">
                <div class="mt-6 d-flex justify-end">
                  <v-btn color="secondary" min-width="205" class="mr-6"
                    >Aplicar</v-btn
                  >
                  <v-btn color="primary" max-width="50"
                    ><v-icon>fa-plus</v-icon></v-btn
                  >
                </div>
                 </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <Footer @cancelar="cancelar" @salvar="salvar"></Footer>
  </v-container>
</template>
<script lang="ts" src="./layout-transformacoes.component"></script>
<style scoped></style>
