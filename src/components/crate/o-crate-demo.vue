<template>
  <o-component-demo title="Crate" :data="data">
    <o-crate>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore
      alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore
      deleniti.
    </o-crate>
    <o-crate is-chive>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore
      alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore
      deleniti.
    </o-crate>
    <o-crate is-red-onion>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore
      alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore
      deleniti.
    </o-crate>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OCrate from './o-crate.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OCrateDemo',
  data() {
    return {
      data: {},
    };
  },
  components: { OCrate, OComponentDemo },
});
</script>
