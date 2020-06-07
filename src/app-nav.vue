<template>
  <div>
    <nav class="columns">
      <router-link
        class="column is-narrow"
        v-for="component in components"
        :key="component.key"
        :to="{ name: component.name }"
        >{{ component.name }}</router-link
      >
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppNav',
  data() {
    return {
      components: [
        {
          name: 'Select',
          key: 'select',
        },
        {
          name: 'Input',
          key: 'input',
        },
        {
          name: 'Textarea',
          key: 'textarea',
        },
        {
          name: 'Checkbox',
          key: 'checkbox',
        },
        {
          name: 'Radio',
          key: 'radio',
        },
        {
          name: 'Button',
          key: 'button',
        },
      ],
    };
  },
});
</script>
