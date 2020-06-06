<template>
  <div>
    <h2>Components</h2>

    <div class="columns is-multiline">
      <div class="column">
        <o-button-demo />
      </div>

      <div class="column">
        <o-checkbox-demo />
      </div>

      <div class="column">
        <o-input-demo />
      </div>

      <div class="column">
        <o-radio-demo />
      </div>

      <div class="column">
        <o-select-demo />
      </div>

      <div class="column">
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
import { ORadioDemo } from './radio';
import { OSelectDemo } from './select';
import { OTextareaDemo } from './textarea';

export default Vue.extend({
  name: 'OComponents',
  components: {
    OButtonDemo,
    OCheckboxDemo,
    OInputDemo,
    ORadioDemo,
    OSelectDemo,
    OTextareaDemo,
  },
});
</script>
