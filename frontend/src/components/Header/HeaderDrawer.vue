<template>
  <v-navigation-drawer
    v-model="opened"
    width="350"
    app
    clipped
    stateless
    style="z-index: 10;"
    :class="{'elevation-6': opened}">
    <v-sheet
      tile
      elevation="5"
      color="light"
      class="pinned">
      <v-row
        no-gutters
        align="center"
        justify="center"
        style="height: 70px;">
        <h2 class="text-center ma-0">
          Coming Up...
        </h2>
      </v-row>
    </v-sheet>
    <v-list style="margin-top: 65px;">
      <app-header-drawer-item
        v-for="item in 10"
        :key="item.id" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HeaderDrawerItem from './HeaderDrawerItem.vue';

export default {
  name: 'HeaderDrawer',

  computed: {
    ...mapGetters('drawer', ['isOpened']),

    opened: {
      get() {
        return this.isOpened;
      },
      set(val) {
        this.setDrawerOpened(val);
      },
    },
  },

  methods: {
    ...mapActions('drawer', ['setDrawerOpened']),
  },

  components: {
    appHeaderDrawerItem: HeaderDrawerItem,
  },
};
</script>

<style>
  .pinned {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }
</style>
