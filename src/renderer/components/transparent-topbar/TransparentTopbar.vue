<template>
  <div class="transparent-topbar">
    <v-btn
      class="transparent-topbar__action-btn"
      fab
      small
      text
      @click="clickHandler"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-btn
      class="transparent-topbar__action-btn"
      fab
      small
      text
      color="error"
      @click="close"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts" src="./TransparentTopbar.ts"></script>
<style scoped lang="scss" src="./transparent-topbar.scss"></style>