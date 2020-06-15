<template>
  <main id="app" class="main">
    <h1>vonion 🧅</h1>

    <app-nav />

    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import AppNav from './app-nav.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { AppNav },
});
</script>

<style lang="scss">
html {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
}
</style>

<style lang="scss" scoped>
.main {
  max-width: 80rem;
  margin: 0 auto;
}
</style>
