<template>
  <v-app>

    <div class="topbar grey lighten-5">
      <TransparentTopbar @toggle-sidedrawer="toggleDrawer" />
    </div>

    <v-navigation-drawer app v-model="drawer">
      <!-- -->
      <h1>Drawer</h1>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-content class="grey lighten-5">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" scoped src="./app.scss"></style>