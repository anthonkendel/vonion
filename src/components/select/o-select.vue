<template>
  <div class="o-select">
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <select class="select" v-bind="$attrs" v-on="{ ...$listeners, change: () => undefined }" v-model="vModel" :id="id">
      <slot name="option" />
    </select>
  </div>
</template>

<script lang="ts">
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'OSelect',
  components: { OLabel },
  model: {
    prop: 'vModelValue',
    event: 'change',
  },
  props: {
    id: String,
    vModelValue: [String, Number, Array, Object, Boolean],
  },
  computed: {
    vModel: {
      get(): unknown {
        return this.vModelValue;
      },
      set(value: unknown): void {
        this.$emit('change', value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.o-select {
  margin: 0 0.2rem 0.2rem;

  .select {
    border-radius: 0px;
    border-width: 1px;
    border: 2px solid #404040;
    font-size: inherit;
    padding: 0.4rem 0.6rem;

    &[multiple] {
      padding: 0.3rem 0.3rem;
    }

    &:focus {
      outline-offset: 0;
      outline: 3px solid #ffb900;
    }
  }
}
</style>
