<template>
  <o-element>
    <div class="flex-space-between">
      <o-label :for="id">
        <slot name="default" />
      </o-label>

      <o-validation-message :parent="this" />
    </div>

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
import { OValidationMessage } from '../validation-message';
import Vue from 'vue';

export default Vue.extend({
  name: 'OTextarea',
  components: { OElement, OLabel, OValidationMessage },
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
@import '../../styles/main.scss';

.textarea {
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
