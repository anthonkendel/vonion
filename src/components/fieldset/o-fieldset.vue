<template>
  <o-element>
    <fieldset class="fieldset" v-bind="$attrs" v-on="$listeners">
      <slot name="default" />
    </fieldset>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import Vue from 'vue';

export default Vue.extend({
  name: 'OFieldset',
  components: { OElement },
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.fieldset {
  border: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid $black-garlic;
  padding-left: 0.5rem;
}
</style>
