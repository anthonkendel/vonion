<template>
  <div class="o-radio">
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
  </div>
</template>

<script lang="ts">
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'ORadio',
  components: { OLabel },
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
.o-radio {
  cursor: pointer;
  margin: 0 0.2rem 0.2rem;

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
}
</style>
