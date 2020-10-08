<template>
  <v-container>
    <v-row>
      <v-col xs="12" lg="4">
        <h1 class="secondary--text">Modelos de Layout</h1>
      </v-col>
      <v-col lg="4">
        <v-btn class="float-right" color="primary" @click="criarLayout" min-height="52">
          <v-icon style="font-size: 17px;" class="mr-2">fa-plus</v-icon>Criar Modelo de Layout
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="layoutList">
      <v-col xs="12" lg="12">
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
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      @click="handleAction(item)"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </v-menu>
          </template>
        </v-data-table>
        <div class="float-right pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col lg="8">
        <Empty :message="emptyMessage"></Empty>
      </v-col>
    </v-row>

    <Dialog :show="dialog" @close="handleDialog">
      <template slot="header"> Excluir Modelo de Layout </template>
      <template slot="helper">
        Tem certeza que deseja excluir este layout?
      </template>
    </Dialog>
  </v-container>
</template>
<script lang="ts" src="./layout.component" />
<style scoped></style>
