<template>
  <fieldset class="cu-form__group">
    <legend>Radio buttons</legend>
      <RadioButton
        label="Choice one"
        id="choice-one"
        name="set-one"
        value="one"
        v-model="radioValue"
      />
      <RadioButton
        label="Choice two"
        id="choice-two"
        name="set-one"
        value="two"
        v-model="radioValue"
      />
      <RadioButton
        label="Disabled choice"
        id="choice-three"
        name="set-one"
        value="three"
        v-model="radioValue"
        disabled
      />
  </fieldset>
</template>

<script>
import { ref } from 'vue';
import RadioButton from "./RadioButton.vue";

export default {
  name: "RadioButtonSimple",
  components: {
    RadioButton,
  },
  setup() {
    const radioValue = ref('one');
    return {
      radioValue,
    }
  }
}
</script>
