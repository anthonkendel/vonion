<template>
  <div class="form-el">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'OFormEl',
});
</script>

<style lang="scss" scoped>
.form-el {
  margin: 0 0.2rem 0.2rem;
}
</style>
