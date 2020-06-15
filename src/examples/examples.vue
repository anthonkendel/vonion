<template>
  <div>
    <h2>Examples</h2>
    <examples-nav />

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import ExamplesNav from './examples-nav.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Examples',
  components: { ExamplesNav },
});
</script>
