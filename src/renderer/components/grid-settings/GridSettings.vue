<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="grey lighten-5"
      light
      grow
      vertical
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab
        v-for="(setting, i) in settings"
        :key="i"
        :href="`#tab-${i}`"
      >
        {{ setting }}
      </v-tab>

      <v-tab-item
        v-for="(setting, i) in settings"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card
          flat
          tile
          class="grey lighten-5"
          height="550"
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts" src="./GridSettings.ts"></script>
<style scoped lang="scss" src="./grid-settings.scss"></style>