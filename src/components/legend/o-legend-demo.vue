<template>
  <o-component-demo title="Legend">
    <o-legend> Hobbies: </o-legend>
    <o-legend> Animals: </o-legend>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OLegend from './o-legend.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OLegendDemo',
  components: { OLegend, OComponentDemo },
});
</script>
