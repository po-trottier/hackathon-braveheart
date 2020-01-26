<template>
  <div style="display: none;">
    <v-container>
      <h1>
        Welcome to you Project::Braveheart Profile
      </h1>
      <v-btn
        depressed
        color="primary">
        Log out
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Profile',

  beforeCreate() {
    this.$router.replace({ name: 'player', params: { playlist: '0' } });
  },
};
</script>

<style scoped>

</style>
