<template>
  <o-component-demo title="Input" :data="data">
    <o-input v-model="data.firstName" id="firstName">First name</o-input>
    <o-input v-model="data.lastName" id="lastName">Last name</o-input>
    <o-input v-model.number="data.age" id="age" type="number">Age</o-input>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OInput from './o-input.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OInputDemo',
  data() {
    return {
      data: {
        firstName: 'John',
        lastName: 'Doe',
        age: 12,
      },
    };
  },
  components: { OInput, OComponentDemo },
});
</script>
