<template>
  <o-form-el>
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <input
      class="input"
      v-bind="{ type: 'text', ...$attrs }"
      v-on="{ ...$listeners, input: () => undefined }"
      v-model="vModel"
      :id="id"
    />
  </o-form-el>
</template>

<script lang="ts">
import { OFormEl } from '../form-el';
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'OInput',
  components: { OLabel, OFormEl },
  model: {
    prop: 'vModelValue',
    event: 'input',
  },
  props: {
    id: String,
    vModelValue: [String, Number],
  },
  computed: {
    vModel: {
      get(): unknown {
        return this.vModelValue;
      },
      set(value: unknown): void {
        this.$emit('input', value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  border-radius: 0px;
  border-width: 1px;
  border: 2px solid #404040;
  font-size: inherit;
  padding: 0.4rem 0.6rem;

  &:focus {
    outline-offset: 0;
    outline: 3px solid #ffb900;
  }
}
</style>
