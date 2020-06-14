<template>
  <small v-show="isTouched" class="validation-message" :class="{ valid: this.isValid, invalid: !this.isValid }">
    {{ validationMessage }}
  </small>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OValidationMessage',
  props: {
    parent: {
      type: Vue,
      required: true,
    },
  },
  data() {
    return {
      isTouched: false,
      isValid: true,
      validationMessage: '',
    };
  },
  mounted(): void {
    this.setupListeners();
  },
  methods: {
    async setupListeners(): Promise<void> {
      await this.$nextTick();
      // TODO: Handle radio and checkbox
      const el = this.parent.$el.querySelector('input, select, textarea');

      if (el) {
        const handleBlur = () => {
          this.isTouched = true;
          this.handleIsValid();
        };
        const handleInput = () => {
          this.handleIsValid();
          this.isTouched = false;
        };
        const handleChange = () => {
          this.handleIsValid();
          this.isTouched = false;
        };
        el.addEventListener('blur', handleBlur);
        el.addEventListener('input', handleInput);
        el.addEventListener('change', handleChange);
      }
    },
    handleIsValid(): void {
      type FormEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement;
      const el = this.parent.$el.querySelector<FormEl>(':invalid, :valid');
      if (el) {
        this.isValid = el.validity.valid;
        this.validationMessage = el.validationMessage;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.validation-message {
  display: inline;
  font-family: inherit;
  margin: 0 0.5rem 0.2rem 1rem;
  padding-top: 0.2rem;
  position: relative;
}

.invalid {
  color: #ff3e3e;
}

.valid {
  color: #3ea2ff;
}
</style>
