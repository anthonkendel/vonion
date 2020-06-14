<template>
  <o-component-demo title="Form example" :data="data">
    <form @submit="onSubmit">
      <o-crate is-chive>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum accusamus eligendi molestias laudantium
        rerum tempora in adipisci dolore. Maxime modi accusamus debitis similique aperiam exercitationem, deleniti iusto
        corporis ad.
      </o-crate>

      <o-input v-model="data.firstName" required>First name</o-input>

      <o-input v-model="data.lastName" required>Last name</o-input>

      <o-fieldset>
        <o-legend>Hobbies:</o-legend>
        <o-checkbox v-model="data.hobbies" id="hobbies-ONEWHEEL" value="ONEWHEEL">Onewheel</o-checkbox>
        <o-checkbox v-model="data.hobbies" id="hobbies-HORSES" value="HORSES">Horses</o-checkbox>
        <o-checkbox v-model="data.hobbies" id="hobbies-COMPUTERS" value="COMPUTERS">Computers</o-checkbox>
        <o-checkbox v-model="data.hobbies" id="hobbies-CATS" value="CATS">Cats</o-checkbox>
        <o-checkbox v-model="data.hobbies" id="hobbies-VIDEO_GAMES" value="VIDEO_GAMES">Video games</o-checkbox>
        <o-checkbox v-model="data.hobbies" id="hobbies-BOARD_GAMES" value="BOARD_GAMES">Board games</o-checkbox>
      </o-fieldset>

      <o-textarea required minlength="10" v-model="data.about" cols="100">About</o-textarea>

      <o-select required v-model.number="data.age">
        Age
        <template v-slot:option>
          <option v-for="n of 100" :key="n">{{ n }}</option>
        </template>
      </o-select>

      <o-fieldset>
        <o-legend>Gender:</o-legend>
        <o-radio v-model="data.gender" id="gender-MALE" name="gender" value="MALE">Male</o-radio>
        <o-radio v-model="data.gender" id="gender-FEMALE" name="gender" value="FEMALE">Female</o-radio>
        <o-radio v-model="data.gender" id="gender-UNKNOWN" name="gender" value="UNKNOWN">Unknown</o-radio>
      </o-fieldset>

      <o-button type="submit" is-chive>Submit</o-button>
      <o-button type="button" @click="onClickCancel">Cancel</o-button>
    </form>
  </o-component-demo>
</template>

<script lang="ts">
import { OComponentDemo } from '../../app/demo';
import Vue from 'vue';

export default Vue.extend({
  name: 'FormExample',
  data() {
    return {
      data: {
        firstName: 'John',
        lastName: '',
        hobbies: ['ONEWHEEL', 'COMPUTERS'],
        about: '',
        age: null,
        gender: 'MALE',
      },
    };
  },
  methods: {
    onSubmit(): void {
      alert(`The form was submitted with:\n${JSON.stringify(this.data, null, 2)}`);
    },
    onClickCancel(): void {
      this.$router.replace({ name: 'Examples' });
    },
  },
  components: { OComponentDemo },
});
</script>
