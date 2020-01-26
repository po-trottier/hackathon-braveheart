<template>
  <div>
    <h1>
      Landing
    </h1>
    <v-btn :to="{ name: 'player', params: { playlist: '0' } }">
      Go to Player
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<style scoped>

</style>
