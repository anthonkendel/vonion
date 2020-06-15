<template>
  <div>
    <nav class="columns">
      <router-link class="column is-narrow" v-for="route in routes" :key="route.key" :to="{ name: route.name }">{{
        route.text
      }}</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppNav',
  data() {
    return {
      routes: [
        {
          text: 'Select',
          name: 'Select',
          key: 'select',
        },
        {
          text: 'Input',
          name: 'Input',
          key: 'input',
        },
        {
          text: 'Textarea',
          name: 'Textarea',
          key: 'textarea',
        },
        {
          text: 'Checkbox',
          name: 'Checkbox',
          key: 'checkbox',
        },
        {
          text: 'Radio',
          name: 'Radio',
          key: 'radio',
        },
        {
          text: 'Button',
          name: 'Button',
          key: 'button',
        },
        {
          text: 'Crate',
          name: 'Crate',
          key: 'crate',
        },

        {
          text: 'Examples',
          name: 'Examples',
          path: '/examples',
        },
      ],
    };
  },
});
</script>
