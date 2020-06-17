<template>
  <o-component-demo title="Fieldset">
    <o-fieldset>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore
      alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore
      deleniti.
    </o-fieldset>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OFieldset from './o-fieldset.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OFieldsetDemo',
  components: { OFieldset, OComponentDemo },
});
</script>
