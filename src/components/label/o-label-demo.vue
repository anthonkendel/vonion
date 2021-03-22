<template>
  <o-component-demo title="Label">
    <o-label> First name </o-label>
    <o-label> Middle name </o-label>
    <o-label> Last name </o-label>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OLabel from './o-label.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OLabelDemo',
  components: { OLabel, OComponentDemo },
});
</script>
