<template>
  <div class="o-checkbox">
    <input
      class="checkbox"
      v-bind="{ type: 'checkbox', ...$attrs }"
      v-on="{ ...$listeners, change: () => undefined }"
      v-model="vModel"
      :id="id"
    />

    <o-label :for="id" class="label">
      <slot name="default" />
    </o-label>
  </div>
</template>

<script lang="ts">
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'OCheckbox',
  components: { OLabel },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    id: String,
    checked: {
      type: [String, Number, Array, Object, Boolean],
    },
    value: {
      type: [String, Number, Array, Object, Boolean],
      default: true,
    },
  },
  computed: {
    isArrayModel(): boolean {
      return Array.isArray(this.checked);
    },
    vModel: {
      get(): unknown {
        if (this.isArrayModel) {
          return (this.checked as unknown[]).some((value) => JSON.stringify(value) === JSON.stringify(this.value));
        } else {
          return this.checked === this.value;
        }
      },
      set(value: unknown): void {
        if (this.isArrayModel) {
          const array = this.checked.slice();
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
.o-checkbox {
  cursor: pointer;
  margin: 0 0.2rem 0.2rem;

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
}
</style>
