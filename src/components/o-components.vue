<template>
  <div>
    <h2>Components</h2>

    <div class="columns">
      <div class="column is-4">
        <o-input-demo />
      </div>

      <div class="column is-4">
        <o-textarea-demo />
      </div>
    </div>
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
