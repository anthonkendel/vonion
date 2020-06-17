<template>
  <legend v-bind="$attrs" v-on="$listeners" class="legend">
    <slot name="default" />
  </legend>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'OLegend',
});
</script>

<style lang="scss" scoped>
.legend {
  display: block;
  font-size: inherit;
  font-weight: 500;
  margin-bottom: 0.2rem;
}
</style>
