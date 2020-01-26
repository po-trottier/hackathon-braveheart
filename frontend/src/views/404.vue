<template>
  <v-sheet
    tile
    color="dark"
    style="height: 100vh; width: 100vw;">
    <div class="center white--text text-center justify-center">
      <h1 class="mb-6">
        404 - Page not found
      </h1>
      <v-btn
        :to="{ name: 'player', params: { playlist: '0' } }"
        x-large
        depressed
        rounded>
        Back to the player
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: '404',
};
</script>

<style scoped>
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
</style>
