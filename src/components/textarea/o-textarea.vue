<template>
  <o-element>
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <textarea
      class="textarea"
      v-bind="{ rows: 4, cols: 40, ...$attrs }"
      v-on="{ ...$listeners, input: () => undefined }"
      v-model="vModel"
      :id="id"
    ></textarea>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'OTextarea',
  components: { OElement, OLabel },
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
.textarea {
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
