<template>
  <div id="controls">
    <v-sheet
      tile
      color="light"
      class="fill-height">
      <v-row
        no-gutters
        align="center"
        style="height: 150px;">
        <v-col>
          <app-player-controls-buttons />
          <app-player-controls-seek-bar />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import PlayerControlsButtons from './PlayerControlsButtons.vue';
import PlayerControlsSeekBar from './PlayerControlsSeekBar.vue';

export default {
  name: 'PlayerControls',

  components: {
    appPlayerControlsButtons: PlayerControlsButtons,
    appPlayerControlsSeekBar: PlayerControlsSeekBar,
  },
};
</script>

<style scoped>
  #controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    overflow: hidden !important;
  }
</style>
