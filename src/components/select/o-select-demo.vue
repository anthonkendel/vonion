<template>
  <o-component-demo title="Select" :data="data">
    <o-select v-model="data.country" id="country">
      Country
      <template v-slot:option>
        <option value="SWEDEN">Sweden</option>
        <option value="DENMARK">Denmark</option>
        <option value="FINLAND">Finland</option>
        <option value="NORWAY">Norway</option>
      </template>
    </o-select>

    <o-select v-model="data.pet" id="pet" multiple size="3">
      Pet
      <template v-slot:option>
        <option value="DOG">Dog</option>
        <option value="CAT">Cat</option>
        <option value="BIRD">Bird</option>
        <option value="CUCUMBER">Cucumer</option>
        <option value="HORSE">Horse</option>
      </template>
    </o-select>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../demo';
import OSelect from './o-select.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OInputDemo',
  data() {
    return {
      data: {
        country: 'SWEDEN',
        pet: ['DOG', 'BIRD'],
      },
    };
  },
  components: { OSelect, OComponentDemo },
});
</script>
