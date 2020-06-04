<template>
  <div>
    <h3>{{ title }}</h3>

    <strong>Data</strong>
    <div class="data">
      <pre v-show="showData">{{ data }}</pre>
      <button @click="showData = !showData">{{ showData ? 'hide data' : 'show data' }}</button>
    </div>

    <slot name="default" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'OComponentDemo',
  props: ['title', 'data'],
  data() {
    return {
      showData: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.data {
  margin-bottom: 0.3rem;
}
</style>
