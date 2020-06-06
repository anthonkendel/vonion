<template>
  <o-component-demo title="Checkbox" :data="data">
    <o-checkbox v-model="data.apple" id="apple">Apple</o-checkbox>
    <o-checkbox v-model="data.banana" id="banana">Banana</o-checkbox>
    <o-checkbox v-model="data.cucumber" id="cucumber">Cucumber</o-checkbox>

    <strong>Array model</strong>
    <o-checkbox v-model="data.fruits" id="fruits-apple" value="APPLE">Apple</o-checkbox>
    <o-checkbox v-model="data.fruits" id="fruits-banana" :value="{ value: 'BANANA' }">Banana</o-checkbox>
    <o-checkbox v-model="data.fruits" id="fruits-cucumber" :value="['CUCUMBER']">Cucumber</o-checkbox>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../demo';
import OCheckbox from './o-checkbox.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OCheckboxDemo',
  data() {
    return {
      data: {
        apple: true,
        banana: false,
        cucumber: false,
        fruits: [{ value: 'BANANA' }],
      },
    };
  },
  components: { OCheckbox, OComponentDemo },
});
</script>
