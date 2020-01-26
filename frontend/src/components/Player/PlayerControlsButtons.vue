<template>
  <v-row
    no-gutters
    justify="center"
    align="center">
    <audio
      id="audio-player"
      @ended="forward"
      onended="forward"
      hidden
      type="audio/ogg" />
    <v-btn
      icon
      @click="backward"
      class="mx-2">
      <v-icon>
        mdi-skip-backward
      </v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      @click="play"
      color="primary"
      class="mx-6">
      <v-icon>
        {{ !playing ? 'mdi-play' : 'mdi-pause' }}
      </v-icon>
    </v-btn>
    <v-btn
      icon
      @click="forward"
      class="mx-2">
      <v-icon>
        mdi-skip-forward
      </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PlayerControlsButtons',

  computed: {
    ...mapGetters('player', ['playing', 'song']),
  },

  methods: {
    ...mapActions('player', ['play', 'forward', 'backward']),
  },
};
</script>
