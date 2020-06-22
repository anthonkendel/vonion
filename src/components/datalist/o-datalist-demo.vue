<template>
  <o-component-demo title="Datalist" :data="data">
    <o-datalist v-model="data.pet" id="pet">
      Pet
      <template v-slot:option>
        <option value="Dog"></option>
        <option value="Cat"></option>
        <option value="Bird"></option>
        <option value="Cucumber"></option>
        <option value="Horse"></option>
      </template>
    </o-datalist>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import ODatalist from './o-datalist.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'ODatalistDemo',
  data() {
    return {
      data: {
        country: '',
        pet: '',
      },
    };
  },
  components: { ODatalist, OComponentDemo },
});
</script>
