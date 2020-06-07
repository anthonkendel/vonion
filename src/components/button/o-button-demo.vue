<template>
  <o-component-demo title="Button">
    <o-button>Click me!</o-button>
    <o-button is-chive>No, click me!</o-button>
    <o-button is-red-onion>I'm nice and silent.</o-button>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../demo';
import OButton from './o-button.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OButtonDemo',
  components: { OButton, OComponentDemo },
});
</script>
