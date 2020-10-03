<template>
  <v-row justify="center">
    <v-dialog :value="show" persistent max-width="590">
      <v-card>
        <v-card-title class="headline">
          <slot name="header"> Confirmar ação </slot>
        </v-card-title>
        <v-card-text>
          <slot name="helper">
            Texto de ajuda para explicar o que acontece por padrão em uma ação
            de Dialog.
          </slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="$emit('close')">
            Cancelar
          </v-btn>
          <v-btn color="primary" text @click="$emit('close')">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts" src="./dialog.component"></script>
<style></style>
