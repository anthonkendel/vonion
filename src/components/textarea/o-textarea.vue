<template>
  <div class="o-textarea">
    <o-label :for="id">
      <slot name="default" />
    </o-label>

    <textarea
      class="textarea"
      v-bind="{ rows: 4, cols: 20, ...$attrs }"
      v-on="{ ...$listeners, input: () => undefined }"
      v-model="vModel"
      :id="id"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { OLabel } from '../label';
import Vue from 'vue';

export default Vue.extend({
  name: 'OTextarea',
  components: { OLabel },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: ['id', 'value'],
  computed: {
    vModel: {
      get(): unknown {
        return this.value;
      },
      set(value: unknown): void {
        this.$emit('input', value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.o-textarea {
  margin-bottom: 0.2rem;

  .label {
    display: block;
    font-size: inherit;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .textarea {
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
