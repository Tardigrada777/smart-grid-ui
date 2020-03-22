<template>
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list shaped min-height="900px">
      <v-subheader>SmartGrid UI</v-subheader>
      <v-list-item-group v-model="item" color="blue">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts" src="./DrawerMenu.ts"></script>
<style scoped lang="scss" src="./drawer-menu.scss"></style>