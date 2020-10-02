<template>
  <v-container>
    <v-row>
      <v-flex xs4>
        <h1>Layouts</h1>
      </v-flex>
      <v-flex xs4>
        <v-btn color="primary">
          <v-icon>mdi-plus</v-icon>Criar modelo de Layout
        </v-btn>
      </v-flex>
    </v-row>

    <v-row>
      <v-flex xs8 mt-6>
        <v-data-table
          :headers="headers"
          :items="layoutList"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
          :loading="loading"
          :loading-text="message"
          item-key="id"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <div class="menu">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Single-line item</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-menu>
          </template>
        </v-data-table>
        <div class="float-right pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-flex>
    </v-row>
  </v-container>
</template>
<script lang="ts" src="./layout.component" />
<style scoped>
.menu {
  min-width: 200px !important;
  background-color: #ffffff;
}
.item:hover{
  background-color: black;
}
</style>
