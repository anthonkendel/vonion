<template>
  <o-form-el>
    <input
      class="checkbox"
      v-bind="$attrs"
      v-on="{ ...$listeners, change: () => undefined }"
      v-model="vModel"
      type="checkbox"
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
  name: 'OCheckbox',
  components: { OFormEl, OLabel },
  model: {
    prop: 'vModelValue',
    event: 'change',
  },
  props: {
    id: String,
    vModelValue: [String, Number, Array, Object, Boolean],
    value: {
      default: true,
      type: [String, Number, Array, Object, Boolean],
    },
  },
  computed: {
    isArrayModel(): boolean {
      return Array.isArray(this.vModelValue);
    },
    vModel: {
      get(): unknown {
        if (this.isArrayModel) {
          return this.vModelValue.some((value: unknown) => JSON.stringify(value) === JSON.stringify(this.value));
        } else {
          return this.vModelValue === this.value;
        }
      },
      set(value: unknown): void {
        if (this.isArrayModel) {
          const array = this.vModelValue.slice();
          const index = array.findIndex((v: unknown) => JSON.stringify(v) === JSON.stringify(this.value));
          if (index >= 0) {
            array.splice(index, 1);
          } else {
            array.push(this.value);
          }
          this.$emit('change', array);
        } else {
          this.$emit('change', value);
        }
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

.checkbox {
  cursor: pointer;
  font-size: inherit;
  margin-right: 0.5rem;

  &:focus {
    outline-offset: 0;
    outline: 3px solid #ffb900;
  }
}
</style>
