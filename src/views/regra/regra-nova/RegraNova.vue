<template>
  <v-container class="form">
    <v-row>
      <v-col xs="12" lg="4">
        <h1 class="secondary--text">Nova Regra</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col lg="2">
            <label class="label">Nome da Regra</label>
          </v-col>
          <v-col lg="5">
            <v-text-field solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="2">
            <label class="label">Mensagem</label>
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
            <label class="label">Tipo de Movimentação</label>
          </v-col>
          <v-col lg="5">
            <v-btn-toggle v-model="tipo_movimentacao" multiple dense>
              <div style="background-color: var(--v-background-base)">
                <v-btn small active-class="primary" min-width="92" class="mr-6"
                  >Implantação</v-btn
                >
                <v-btn small active-class="primary" min-width="92" class="mr-6"
                  >Inclusão</v-btn
                >
                <v-btn small active-class="primary" min-width="92" class="mr-6"
                  >Exclusão</v-btn
                >
                <v-btn small active-class="primary" min-width="92"
                  >Alteração</v-btn
                >
              </div>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col lg="3">
            <label class="label">Tipo de valor padrão</label>
            <v-select
              :items="tipo_valor_padrao"
              label="Tipo de Arquivo"
              solo
            ></v-select>
          </v-col>
          <v-col lg="3">
            <label class="label">Valor</label>
            <v-text-field solo type="number"></v-text-field>
          </v-col>
          <v-col lg="3">
            <label class="label">Descrição</label>
            <v-select :items="tipo_descricao" label="Descrição" solo></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- items -->
    <v-row v-for="index in condicoes" :key="index.id">
      <v-row class="mt-10">
        <v-col lg="12">
          <v-btn-toggle v-model="tipo_movimentacao" dense>
            <div style="background-color: var(--v-background-base)">
              <v-btn small active-class="primary" min-width="92" class="mr-6"
                >E</v-btn
              >
              <v-btn small active-class="primary" min-width="92" class="mr-6"
                >Ou</v-btn
              >
            </div>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row> </v-row>

      <v-row>
        <v-card min-width="100%" class="">
          <v-toolbar color="secondary" style="color: #fff"
            ><v-col cols="10">Condição 1</v-col>
            <v-col cols="2">
              <v-btn outlined color="white" @click="removerCondicao(index)"
                ><v-icon class="mr-4" small>far fa-trash-alt</v-icon>Excluir
                Condição</v-btn
              >
            </v-col></v-toolbar
          >

          <v-row>
            <v-col lg="2">
              <label class="ml-6 label">Fonte de dados</label>
            </v-col>
            <v-col lg="6">
              <v-select
                :items="fonte_dados"
                label="Tipo de Arquivo"
                solo
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="mx-auto">
            <v-col lg="4">
              <v-card class="mx-auto">
                <v-toolbar color="secondary" style="color: #fff"
                  >Campo 1</v-toolbar
                >
                <v-card class="mx-auto" min-height="510">
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <label class="label">Tipo</label>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <v-select dense solo style="max-width: 100%"></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="4">
                      <label class="label">Parâmetro</label>
                    </v-col>
                    <v-col cols="4">
                      <label class="label">Tipo</label>
                    </v-col>
                    <v-col cols="4">
                      <label class="label">Valor</label>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="4">
                      <label>Anos ou dias</label>
                    </v-col>
                    <v-col cols="4">
                      <v-select dense solo></v-select>
                    </v-col>
                    <v-col cols="4">
                      <v-select dense solo></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="4">
                      <label>Data final</label>
                    </v-col>
                    <v-col cols="4">
                      <v-select dense solo></v-select>
                    </v-col>
                    <v-col cols="4">
                      <v-select dense solo></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="4">
                      <label>Data inicial</label>
                    </v-col>
                    <v-col cols="4">
                      <v-select dense solo></v-select>
                    </v-col>
                    <v-col cols="4">
                      <v-select dense solo></v-select>
                    </v-col>
                  </v-row>
                </v-card>
              </v-card>
            </v-col>
            <v-col lg="2">
              <v-card class="mx-auto">
                <v-toolbar color="secondary" style="color: #fff"
                  >Operador</v-toolbar
                >
                <v-card class="mx-auto" min-height="510">
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <label class="label">Operador</label>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <v-select dense solo style="max-width: 100%"></v-select>
                    </v-col>
                  </v-row>
                </v-card>
              </v-card>
            </v-col>
            <v-col lg="3">
              <v-card class="mx-auto">
                <v-toolbar color="secondary" style="color: #fff"
                  >Campo 2</v-toolbar
                >
                <v-card class="mx-auto" min-height="510">
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <label class="label">Tipo</label>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <v-select dense solo style="max-width: 100%"></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="6"><label class="label"> Valor </label> </v-col>
                    <v-col cols="6"><label class="label"> Descrição </label> </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="6">
                      <v-text-field solo type="number"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field solo></v-text-field>
                    </v-col>
                  </v-row>
                </v-card>
              </v-card>
            </v-col>
            <v-col lg="3">
              <v-card class="mx-auto">
                <v-toolbar color="secondary" style="color: #fff"
                  >Campo 3</v-toolbar
                >
                <v-card class="mx-auto" min-height="510">
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <label class="label">Tipo</label>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="12">
                      <v-select dense solo style="max-width: 100%"></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                       <v-col cols="6"><label class="label"> Valor </label> </v-col>
                    <v-col cols="6"><label class="label"> Descrição </label> </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="6">
                      <v-text-field solo type="number"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field solo></v-text-field>
                    </v-col>
                  </v-row>
                </v-card>
              </v-card>
            </v-col>
          </v-row>

          <!-- Sub Condicoes -->
          <v-row
            v-for="sub in index.sub"
            :key="sub"
            class="ml-15"
            style="max-width: 90%"
          >
            <v-row>
              <v-card min-width="100%">
                <v-toolbar color="secondary" style="color: #fff"
                  ><v-col cols="9">Sub-Condição 1</v-col>
                  <v-col cols="3">
                    <v-btn outlined color="white" @click="removerSubCondicao(index, sub)"
                      ><v-icon class="mr-4" small>far fa-trash-alt</v-icon
                      >Excluir Sub-Condição</v-btn
                    >
                  </v-col></v-toolbar
                >

                <v-row>
                  <v-col lg="2">
                    <label class="ml-6">Fonte de dados</label>
                  </v-col>
                  <v-col lg="6">
                    <v-select
                      class="mt-5"
                      :items="fonte_dados"
                      label="Tipo de Arquivo"
                      solo
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row class="mx-auto">
                  <v-col lg="4">
                    <v-card class="mx-auto">
                      <v-toolbar color="secondary" style="color: #fff"
                        >Campo 1</v-toolbar
                      >
                      <v-card class="mx-auto" min-height="510">
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <label>Tipo</label>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <v-select
                              dense
                              solo
                              style="max-width: 100%"
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="4">
                            <label>Parâmetro</label>
                          </v-col>
                          <v-col cols="4">
                            <label>Tipo</label>
                          </v-col>
                          <v-col cols="4">
                            <label>Valor</label>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="4">
                            <label>Anos ou dias</label>
                          </v-col>
                          <v-col cols="4">
                            <v-select dense solo></v-select>
                          </v-col>
                          <v-col cols="4">
                            <v-select dense solo></v-select>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="4">
                            <label>Data final</label>
                          </v-col>
                          <v-col cols="4">
                            <v-select dense solo></v-select>
                          </v-col>
                          <v-col cols="4">
                            <v-select dense solo></v-select>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="4">
                            <label>Data inicial</label>
                          </v-col>
                          <v-col cols="4">
                            <v-select dense solo></v-select>
                          </v-col>
                          <v-col cols="4">
                            <v-select dense solo></v-select>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-col lg="2">
                    <v-card class="mx-auto">
                      <v-toolbar color="secondary" style="color: #fff"
                        >Operador</v-toolbar
                      >
                      <v-card class="mx-auto" min-height="510">
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <label>Operador</label>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <v-select
                              dense
                              solo
                              style="max-width: 100%"
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-col lg="3">
                    <v-card class="mx-auto">
                      <v-toolbar color="secondary" style="color: #fff"
                        >Campo 2</v-toolbar
                      >
                      <v-card class="mx-auto" min-height="510">
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <label>Tipo</label>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <v-select
                              dense
                              solo
                              style="max-width: 100%"
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="6"> Valor </v-col>
                          <v-col cols="6"> Descrição </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="6">
                            <v-text-field solo type="number"></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field solo></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-col lg="3">
                    <v-card class="mx-auto">
                      <v-toolbar color="secondary" style="color: #fff"
                        >Campo 3</v-toolbar
                      >
                      <v-card class="mx-auto" min-height="510">
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <label>Tipo</label>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="12">
                            <v-select
                              dense
                              solo
                              style="max-width: 100%"
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="6"> Valor </v-col>
                          <v-col cols="6"> Descrição </v-col>
                        </v-row>
                        <v-row class="mx-auto">
                          <v-col cols="6">
                            <v-text-field solo type="number"></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field solo></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-row>

          <v-row class="mx-auto float-right mr-5 mb-5 mt-4">
            <v-btn color="primary" outlined @click="adicionarSubCondicao(index)"
              ><v-icon small class="mr-4">fa-plus</v-icon>Adicionar
              Sub-Condição</v-btn
            >
          </v-row>
        </v-card>
      </v-row>
    </v-row>
    <v-row class="mt-10">
      <v-btn
        x-large
        class="float-right"
        color="primary"
        @click="adicionarCondicao"
        min-height="52"
      >
        <v-icon style="font-size: 17px" class="mr-2">fa-plus</v-icon>Nova
        condição
      </v-btn>
    </v-row>
    <Footer @cancelar="cancelar" @salvar="salvar"></Footer>
  </v-container>
</template>
<script lang="ts" src="./regra-nova.component"></script>
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
