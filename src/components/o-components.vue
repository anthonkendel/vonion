<template>
  <div>
    <h2>Components</h2>

    <o-input-demo />
  </div>
</template>

<script lang="ts">
import { OInputDemo } from './input';
import Vue from 'vue';

export default Vue.extend({
  name: 'OComponents',
  components: {
    OInputDemo,
  },
});
</script>
