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
          text: 'Form example',
          name: 'FormExample',
          key: 'form-example',
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
