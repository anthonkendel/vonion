<template>
  <o-form-el>
    <input
      class="radio"
      v-bind="$attrs"
      v-on="{ ...$listeners, change: () => undefined }"
      v-model="vModel"
      type="radio"
      :id="id"
      :value="value"
    />

    <o-label :for="id" class="label">
      <slot name="default" />
    </o-label>
  </o-form-el>
</template>

<script lang="ts">
import { OFormEl } from '../form-el';
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'ORadio',
  components: { OFormEl, OLabel },
  model: {
    prop: 'vModelValue',
    event: 'change',
  },
  props: {
    id: String,
    vModelValue: [String, Number, Array, Object, Boolean],
    value: {
      required: true,
      type: [String, Number, Array, Object, Boolean],
    },
  },
  computed: {
    vModel: {
      get(): unknown {
        return this.vModelValue;
      },
      set(): void {
        this.$emit('change', this.value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.label {
  cursor: pointer;
  display: inline-block;
}

.radio {
  cursor: pointer;
  font-size: inherit;
  margin-right: 0.5rem;

  &:focus {
    outline-offset: 0;
    outline: 3px solid #ffb900;
  }
}
</style>
