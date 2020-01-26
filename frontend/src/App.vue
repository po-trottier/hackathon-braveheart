<template>
  <v-app>
    <router-view name="header" />
    <v-content>
      <transition name="fade">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 50%
  }
</style>
