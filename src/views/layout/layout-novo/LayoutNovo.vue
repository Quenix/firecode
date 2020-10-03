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
          <div class="form-group d-flex justify-space-around">
            <label class="text">Nome do Layout</label>
            <input class="input" type="text" />
          </div>

          <div class="form-group mt-6 d-flex justify-space-around">
            <label class="text">Categoria</label>
            <div>
              <v-row>
                <input type="text" class="input" />
              </v-row>
              <v-row>
                <v-chip class="ma-2" close color="primary" outlined>
                  ANS
                </v-chip>
                <v-chip class="ma-2" close color="primary" outlined>
                  Bradesco
                </v-chip>
                <v-chip class="ma-2" close color="primary" outlined>
                  Sul América
                </v-chip>
              </v-row>
            </div>
          </div>

          <div class="form-group mt-10 d-flex justify-space-between">
            <label class="text">Tipo de Layout</label>
            <v-btn color="primary">CSV</v-btn>
            <v-btn>TXT</v-btn>
            <v-btn>XLS</v-btn>
            <v-btn>XML</v-btn>
          </div>

          <div class="form-group mt-6 d-flex justify-space-between">
            <label class="text">Tipo de Layout</label>
            <v-btn>Posicional</v-btn>
            <v-btn color="primary">Delimitado</v-btn>
          </div>

          <div class="form-group mt-6 d-flex justify-space-around">
            <label class="text">Delimitadores de campo</label>
            <input class="input" type="text" />
          </div>

          <div class="form-group mt-6 d-flex justify-space-around">
            <label class="text">Layout de Referência</label>
            <input class="input" type="text" value="Layoutleroy.txt"/>
            <v-btn color="primary ml-5">Carregar</v-btn>
          </div>
        </form>
      </v-col>
    </v-row>
    <Footer></Footer>
  </v-container>
</template>
<script lang="ts" src="./layout-novo.component"></script>
<style scoped>
.input {
  height: 42px;
  border-radius: 3px;
  background-color: #ffffff;
  min-width: 60%;
  border-radius: 3px;
}

.text {
  font-size: 16px;
  font-weight: 600;
  color: #1e1e1e;
}
</style>
