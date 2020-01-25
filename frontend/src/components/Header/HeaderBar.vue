<template>
  <v-app-bar
    id="header"
    app
    flat
    clipped-left
    height="90"
    color="white">
    <v-row
      no-gutters
      align="center">
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-spacer />
      <router-link
        :to="{ name: 'player' }"
        class="py-1 align-center">
        <v-img
          contain
          width="48"
          alt="Braveheart Logo"
          src="@/assets/logo.svg"
          class="shrink mx-auto" />
        <span class="mono">Project::Braveheart</span>
      </router-link>
      <v-spacer />
      <v-btn
        icon
        :to="{ name: 'profile' }">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HeaderBar',

  methods: {
    ...mapActions('drawer', ['toggleDrawer']),
  },
};
</script>

<style scoped>
  #header {
    border-bottom: 1px solid #dbdbdb !important;
  }

  .small-search {
    max-width: 350px;
  }
</style>
