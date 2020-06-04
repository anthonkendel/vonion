<template>
  <div>
    <h3>OInput</h3>

    <h4>Data</h4>
    <pre>{{ data }}</pre>

    <o-input v-model="data.firstName" id="firstName">First name</o-input>
    <o-input v-model="data.lastName" id="lastName">Last name</o-input>
    <o-input v-model.number="data.age" id="age" type="number">Age</o-input>
  </div>
</template>

<script lang="ts">
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
  components: { OInput },
});
</script>
