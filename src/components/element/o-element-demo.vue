<template>
  <o-component-demo title="Element">
    <o-element>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore
      alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore
      deleniti.
    </o-element>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OElement from './o-element.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OElementDemo',
  components: { OElement, OComponentDemo },
});
</script>
