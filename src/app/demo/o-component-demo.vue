<template>
  <div class="demo">
    <h3>{{ title }}</h3>

    <slot name="default" />

    <div class="demo-controls" v-if="data">
      <h4>Data</h4>
      <div class="data">
        <o-button @click="showData = !showData">{{ showData ? 'hide data' : 'show data' }}</o-button>

        <pre v-show="showData">{{ data }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OComponentDemo',
  props: {
    title: String,
    data: Object,
  },
  data() {
    return {
      showData: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  padding: 1rem 0;

  .demo-controls {
    padding: 1rem 0;
  }
}
</style>
