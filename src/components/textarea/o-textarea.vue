<template>
  <div class="o-textarea">
    <label for="id" class="label">
      <slot name="default" />
    </label>
    <textarea
      class="input"
      v-bind="{ rows: 3, ...$attrs }"
      v-on="{ ...$listeners, input: () => undefined }"
      v-model="vModel"
      :id="id"
    ></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OTextarea',
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

  .input {
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
