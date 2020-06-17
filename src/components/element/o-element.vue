<template>
  <div class="element">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({ name: 'OElement' });
</script>

<style lang="scss" scoped>
.element {
  margin: 0 0.2rem 0.8rem;
}
</style>
