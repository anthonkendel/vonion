<template>
  <div>
    <h2>Components</h2>

    <o-input-demo />

    <o-textarea-demo />
  </div>
</template>

<script lang="ts">
import { OInputDemo } from './input';
import { OTextareaDemo } from './textarea';
import Vue from 'vue';

export default Vue.extend({
  name: 'OComponents',
  components: {
    OInputDemo,
    OTextareaDemo,
  },
});
</script>
