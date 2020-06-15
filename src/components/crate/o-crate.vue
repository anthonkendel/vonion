<template>
  <div class="crate" :class="{ chive: isChive, 'red-onion': isRedOnion }">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OCrate',
  props: {
    isChive: Boolean,
    isRedOnion: Boolean,
  },
});
</script>

<style lang="scss" scoped>
$chive: #9fff79;
$garlic: #fafafa;
$red-onion: #be79ff;

.crate {
  margin: 0 0.2rem 0.2rem;
  border: 1px solid #404040;
  border-radius: 2px;
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
