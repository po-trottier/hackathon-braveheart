<template>
  <div>
    <v-img
      id="background"
      src="@/assets/cover.png" />
    <v-sheet
      id="overlay"
      color="black"
      style="opacity: 0.6;"
      tile />
    <v-container
      id="player-content"
      class="pa-6">
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="fill-height">
        <v-col class="text-center white--text">
          <h1 style="font-size: 2.5rem;">
            Now Playing
          </h1>
          <h3>{{ playlist.name }}</h3>
          <v-img
            contain
            class="mx-auto my-10 elevation-12"
            height="300"
            width="300"
            :src="song.cover" />
          <h2>{{ song.title }}</h2>
          <h3>{{ song.artistName }}</h3>
          <h4>{{ song.album }}</h4>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PlayerContent',

  computed: {
    ...mapGetters('player', ['song', 'playlist']),
  },
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
    filter: blur(50px);
    -webkit-filter: blur(50px);
  }
  #player-content {
    position: absolute;
    top: 0;
    bottom: 150px;
    left: 0;
    right: 0;
    z-index: 5;
  }
</style>
