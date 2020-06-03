<template>
  <main id="app" class="main">
    <h1>vOnion 🧅</h1>

    <o-components />
  </main>
</template>

<script lang="ts">
import { OComponents } from './components';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { OComponents },
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
