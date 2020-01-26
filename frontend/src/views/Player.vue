<template>
  <div id="player">
    <v-sheet
      tile
      color="black"
      class="fill-height">
      <app-header-drawer />
      <app-player-content />
      <app-player-controls />
    </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HeaderDrawer from '@/components/Header/HeaderDrawer.vue';
import PlayerContent from '@/components/Player/PlayerContent.vue';
import PlayerControls from '@/components/Player/PlayerControls.vue';

export default {
  name: 'Player',

  components: {
    appHeaderDrawer: HeaderDrawer,
    appPlayerContent: PlayerContent,
    appPlayerControls: PlayerControls,
  },

  methods: {
    ...mapActions('player', ['setPlaylist']),
  },

  created() {
    this.setPlaylist(this.$route.params.playlist);
  },
};
</script>

<style scoped>
  #player {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
