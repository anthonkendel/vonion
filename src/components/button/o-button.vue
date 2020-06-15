<template>
  <o-element>
    <button
      class="button"
      :class="{ chive: isChive, 'red-onion': isRedOnion }"
      v-bind="{ type: 'button', ...$attrs }"
      v-on="$listeners"
    >
      <slot name="default" />
    </button>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import Vue from 'vue';

export default Vue.extend({
  name: 'OButton',
  components: {
    OElement,
  },
  props: {
    isChive: Boolean,
    isRedOnion: Boolean,
  },
});
</script>

<style lang="scss" scoped>
$chive: #9fff79;
$red-onion: #be79ff;
$garlic: #fafafa;

.button {
  border-radius: 0px;
  border-width: 1px;
  border: 2px solid #404040;
  font-size: inherit;
  padding: 0.4rem 0.6rem;

  /// Default button a.k.a. garlic button
  background-color: $garlic;

  &:focus {
    outline-offset: 0;
    outline: 3px solid #ffb900;
  }

  &:hover {
    transition: background-color ease-in 100ms;
    background-color: darken($garlic, 5%);
  }

  &:active {
    transition: background-color ease-in 100ms;
    background-color: darken($garlic, 10%);
  }

  /// Chive
  &.chive {
    background-color: $chive;

    &:hover {
      background-color: darken($chive, 5%);
    }

    &:active {
      background-color: darken($chive, 10%);
    }
  }

  /// Red onion
  &.red-onion {
    background-color: $red-onion;

    &:hover {
      background-color: darken($red-onion, 5%);
    }

    &:active {
      background-color: darken($red-onion, 10%);
    }
  }
}
</style>
