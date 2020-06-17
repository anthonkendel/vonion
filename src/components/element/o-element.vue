<template>
  <div class="element" :class="{ row: isRow }">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'OElement',
  props: {
    isRow: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.element {
  display: flex;
  flex-direction: column;
  margin: 0 0.2rem 0.8rem;
}

.row {
  flex-direction: row;
}
</style>
