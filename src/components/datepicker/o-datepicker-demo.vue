<template>
  <o-component-demo title="Datepicker" :data="data">
    <o-datepicker v-model="data.birthday">Birthday</o-datepicker>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import ODatepicker from './o-datepicker.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'ODatepickerDemo',
  data() {
    return {
      data: {
        birthday: '2020-08-08',
      },
    };
  },
  components: { ODatepicker, OComponentDemo },
});
</script>
