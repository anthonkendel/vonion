<template>
  <o-component-demo title="Radio" :data="data">
    <o-radio v-model="data.fruit" id="radio-fruit-apple" name="fruit" value="APPLE">Apple</o-radio>
    <o-radio v-model="data.fruit" id="radio-fruit-banana" name="fruit" :value="{ value: 'BANANA' }">Banana</o-radio>
    <o-radio v-model="data.fruit" id="radio-fruit-cucumber" name="fruit" :value="['CUCUMBER']">Cucumber</o-radio>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../demo';
import ORadio from './o-radio.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'ORadioDemo',
  data() {
    return {
      data: {
        fruit: 'APPLE',
      },
    };
  },
  components: { ORadio, OComponentDemo },
});
</script>
