<template>
  <button
    class="o-button button"
    :class="{ chive: isChive, 'red-onion': isRedOnion, garlic: isGarlic }"
    v-bind="{ type: 'button', ...$attrs }"
    v-on="$listeners"
  >
    <slot name="default" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OButton',
  props: {
    isChive: Boolean,
    isRedOnion: Boolean,
    isGarlic: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.o-button.button {
  border-radius: 0px;
  border-width: 1px;
  border: 2px solid #404040;
  font-size: inherit;
  margin: 0 0.2rem 0.2rem;
  padding: 0.4rem 0.6rem;

  /// Default button aka yellow onion button
  background-color: #ffd679;

  &:focus {
    outline-offset: 0;
    outline: 3px solid #ffb900;
  }

  &:hover {
    transition: background-color ease-in 100ms;
    background-color: #ebc670;
  }

  &:active {
    transition: background-color ease-in 100ms;
    background-color: #dab768;
  }

  /// Chive
  &.chive {
    background-color: #9fff79;

    &:hover {
      background-color: #85eb70;
    }

    &:active {
      background-color: #88da68;
    }
  }

  /// Red onion
  &.red-onion {
    background-color: #be79ff;

    &:hover {
      background-color: #a570eb;
    }

    &:active {
      background-color: #9d68da;
    }
  }

  /// Garlic
  &.garlic {
    background-color: #fafafa;

    &:hover {
      background-color: #e6e6e6;
    }

    &:active {
      background-color: #d8d8d8;
    }
  }
}
</style>
