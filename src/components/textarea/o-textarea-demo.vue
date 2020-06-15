<template>
  <o-component-demo title="Textarea" :data="data">
    <o-textarea v-model="data.description" id="description">Description</o-textarea>
    <o-textarea v-model="data.story" id="story" rows="5">Story</o-textarea>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import OTextarea from './o-textarea.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'OTextareaDemo',
  data() {
    return {
      data: {
        description: '',
        story: 'Once upon a time...',
      },
    };
  },
  components: { OTextarea, OComponentDemo },
});
</script>
