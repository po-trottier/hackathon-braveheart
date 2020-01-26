<template>
  <div style="display: none;">
    <v-container>
      <h1>
        Welcome to Project::Braveheart
      </h1>
      <v-btn :to="{ name: 'player', params: { playlist: '0' } }">
        Go to Player
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Landing',

  beforeCreate() {
    this.$router.replace({ name: 'player', params: { playlist: '0' } });
  },
};
</script>
