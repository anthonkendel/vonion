<template>
  <div>
    <nav class="slices">
      <router-link class="slice" v-for="route in routes" :key="route.key" :to="{ name: route.name }">
        {{ route.text }}
      </router-link>
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
          text: 'Datalist',
          name: 'Datalist',
          key: 'datalist',
        },
        {
          text: 'Element',
          name: 'Element',
          key: 'element',
        },
        {
          text: 'Fieldset',
          name: 'Fieldset',
          key: 'fieldset',
        },
        {
          text: 'Label',
          name: 'Label',
          key: 'label',
        },
        {
          text: 'Legend',
          name: 'Legend',
          key: 'legend',
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

<style lang="scss" scoped>
.slice {
  padding: 0 0.5rem;
}
</style>
