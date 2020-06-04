<template>
  <div class="o-select">
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <select
      class="select"
      v-bind="{ ...$attrs }"
      v-on="{ ...$listeners, change: () => undefined }"
      v-model="vModel"
      :id="id"
    >
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
    prop: 'value',
    event: 'change',
  },
  props: ['id', 'value'],
  computed: {
    vModel: {
      get(): unknown {
        return this.value;
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
  margin-bottom: 0.2rem;

  .label {
    display: block;
    font-size: inherit;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .select {
    border-radius: 0px;
    border-width: 1px;
    border: 2px solid #404040;
    font-size: inherit;
    padding: 0.2rem 0.3rem;

    &:focus {
      outline-offset: 0;
      outline: 3px solid #ffb900;
    }
  }
}
</style>
