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
    <v-row> </v-row>
    <v-row>
      <v-btn
        x-large
        class="float-right"
        color="primary"
        @click="adicionarSubCondicao"
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
