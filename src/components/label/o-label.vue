<template>
  <label v-bind="$attrs" v-on="$listeners" class="label">
    <slot name="default" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'OLabel',
});
</script>

<style lang="scss" scoped>
.label {
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
</style>
