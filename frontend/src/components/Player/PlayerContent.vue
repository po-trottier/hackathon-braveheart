<template>
  <div>
    <v-img
      id="background"
      src="@/assets/cover.png" />
    <v-sheet
      id="overlay"
      color="black"
      style="opacity: 0.3;"
      tile />
    <v-container style="position: relative; z-index: 5;">
      <h1 class="white--text">
        Player
      </h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PlayerContent',
};
</script>

<style scoped>
  #background, #overlay {
    position: absolute;
    top: 0;
    bottom: 150px;
    left: 0;
    right: 0;
  }
  #background {
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
</style>
