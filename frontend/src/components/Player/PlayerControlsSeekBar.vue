<template>
  <v-row justify="center">
    <v-slider
      hide-details
      dense
      :max="song.duration"
      v-model="seek"
      class="mx-12 mt-2" />
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PlayerControlsSeekBar',

  computed: {
    ...mapGetters('player', ['progress', 'song']),

    seek: {
      get() {
        return this.progress;
      },
      set(val) {
        this.setSeek(val);
      },
    },
  },

  methods: {
    ...mapActions('player', ['setSeek']),
  },
};
</script>
