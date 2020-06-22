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
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  margin-bottom: 0.8rem;
}
</style>
