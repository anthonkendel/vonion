<template>
  <o-element>
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <select class="select" v-bind="$attrs" v-on="{ ...$listeners, change: () => undefined }" v-model="vModel" :id="id">
      <slot name="option" />
    </select>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'OSelect',
  components: { OElement, OLabel },
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
@import '../../styles/main.scss';

.select {
  border-radius: 4px;
  border: 2px solid $black-garlic;
  font-family: inherit;
  font-size: inherit;
  padding: 0.4rem 0.6rem;

  &:focus {
    outline-offset: 0;
    outline: 3px solid $yellow-onion;
  }
}
</style>
