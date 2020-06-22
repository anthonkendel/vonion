<template>
  <o-element>
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <input
      class="datalist"
      v-bind="$attrs"
      v-on="{ ...$listeners, change: () => undefined }"
      v-model="vModel"
      :id="id"
      :list="`${id}-datalist`"
    />

    <datalist :id="`${id}-datalist`">
      <slot name="option" />
    </datalist>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'ODatalist',
  components: { OLabel, OElement },
  model: {
    prop: 'vModelValue',
    event: 'change',
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
        this.$emit('change', value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.datalist {
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
