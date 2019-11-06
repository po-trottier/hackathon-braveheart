<template>
  <v-app-bar
    id="header"
    app
    flat
    height="75"
    color="white">
    <v-container>
      <v-row
        no-gutters
        align="center"
        class="narrow">
        <div class="py-1 d-flex align-center">
          <v-img
            contain
            width="48"
            alt="Braveheart Logo"
            src="@/assets/logo.svg"
            class="shrink" />
          <v-divider
            vertical
            class="mx-3" />
          <span class="mono">Project::Braveheart</span>
        </div>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderBar',
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
