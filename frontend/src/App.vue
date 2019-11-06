<template>
  <v-app>
    <router-view name="header" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
