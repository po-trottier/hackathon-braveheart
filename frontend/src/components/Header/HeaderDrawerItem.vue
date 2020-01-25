<template>
  <v-list-item class="split py-2 selectable">
    <v-list-item-avatar size="64">
      <v-img src="@/assets/thumbnail.png" />
    </v-list-item-avatar>
    <div>
      <v-list-item-title>
        <span style="font-size: larger;">
          <b class="unselectable">Song title</b>
        </span>
      </v-list-item-title>
      <v-list-item-subtitle>
        <span class="unselectable">Artist</span>
      </v-list-item-subtitle>
    </div>
  </v-list-item>
</template>

<script>
export default {
  name: 'HeaderDrawerItem',
};
</script>

<style scoped>
  .split {
    border-bottom: 1px solid #dbdbdb;
  }
</style>
