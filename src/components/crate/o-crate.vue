<template>
  <o-element>
    <div class="crate" :class="{ chive: isChive, 'red-onion': isRedOnion }">
      <slot name="default" />
    </div>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import Vue from 'vue';

export default Vue.extend({
  name: 'OCrate',
  components: { OElement },
  props: {
    isChive: Boolean,
    isRedOnion: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
.crate {
  border: 2px solid $black-garlic;
  border-radius: 4px;
  background-color: $garlic;
  padding: 1rem 0.8rem;

  &.chive {
    background-color: $chive;
  }

  &.red-onion {
    background-color: $red-onion;
  }
}
</style>
