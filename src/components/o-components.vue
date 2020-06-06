<template>
  <div>
    <h2>Components</h2>

    <div class="columns">
      <div class="column is-4">
        <o-button-demo />
      </div>

      <div class="column is-4">
        <o-checkbox-demo />
      </div>

      <div class="column is-4">
        <o-input-demo />
      </div>
    </div>

    <div class="columns">
      <div class="column is-4">
        <o-select-demo />
      </div>

      <div class="column is-4">
        <o-textarea-demo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { OButtonDemo } from './button';
import { OCheckboxDemo } from './checkbox';
import { OInputDemo } from './input';
import { OSelectDemo } from './select';
import { OTextareaDemo } from './textarea';

export default Vue.extend({
  name: 'OComponents',
  components: {
    OButtonDemo,
    OCheckboxDemo,
    OInputDemo,
    OSelectDemo,
    OTextareaDemo,
  },
});
</script>
