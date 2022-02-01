<template>
  <h3>Simple forms and validation</h3>
  <p>This simple form helps show how our form element components can be used. It also shows how you can perform form validation.</p>
  <p>Use regular HTML5 form validation attributes to mark fields as required, min/max lengths, etc. Apply stylings for valid and invalid inputs by adding the <code>.cu-form--was-validated</code> CSS class to the form container. You'll probably do this after a user tries to submit something, you check their inputs, and the app detects that one or more inputs is invalid. The <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity" target="_blank" rel="noopener noreferrer">checkValidity()</a> method is helpful for that.</p>
  <p>This class uses the <code>:valid</code> and <code>:invalid</code> selectors to highlight which inputs are valid and which are not. This process lets users fill out inputs without immediately seeing invalid/valid styles, and helps show them when an input goes from invalid to valid.</p>
  <p>The example below uses this method, and the button toggles the <code>.cu-form--was-validated</code> class on and off the parent container to show how it works.</p>

  <p>Currently it is:
    <span v-if="isValidated">validated.</span>
    <span v-else>not validated.</span>
  </p>
  <Form :isValidated="isValidated">
    <TextInput
      label="Favorite Food"
      helperText="This field is required"
      invalidText="A response is required here!"
      id="first-text-input"
      required
    />
    <TextInput
      label="Favorite Movie"
      helperText="Must be at least 4 characters"
      id="second-text-input"
      minlength=4
      required
    />
    <CheckboxGroup legend="Checkboxes">
      <Checkbox
        label="First choice"
        id="first-checkbox"
        v-model:checked="firstCheckValue"
        required
      />
      <Checkbox
        label="Second choice"
        id="second-checkbox"
      />
    </CheckboxGroup>
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
    <Select
      id="simple-select"
      label="Dropdown"
      invalidText="This field is required"
      v-model:value="dropDown"
      required
    >
      <SelectOption
        label="- Pick a choice -"
        disabled
      />
      <SelectOption
        value=1
        label="One"
      />
      <SelectOption
        value=2
        label="Two"
      />
      <SelectOption
        value=3
        label="Three"
      />
    </Select>
    <Button @click="submitForm">Submit</Button>
  </Form>
</template>

<script>
import { ref } from 'vue';

import Form from "./Form.vue";
import Button from "../Button/Button.vue";
import TextInput from "../TextInput/TextInput.vue";
import CheckboxGroup from "../Checkbox/CheckboxGroup.vue";
import Checkbox from "../Checkbox/Checkbox.vue";
import Select from "../Select/Select.vue";
import SelectOption from "../Select/SelectOption.vue";
import RadioButton from "../RadioButton/RadioButton.vue";

export default {
  name: 'FormSimple',
  components: {
    Form,
    Button,
    TextInput,
    CheckboxGroup,
    Checkbox,
    Select,
    SelectOption,
    RadioButton,
  },
  setup() {
    const isValidated = ref(false);
    const firstCheckValue = ref(false);
    const dropDown = ref('');
    const radioValue = ref('one');
    const submitForm = () => {
      isValidated.value = !isValidated.value;
    }

    return {
      isValidated,
      firstCheckValue,
      dropDown,
      radioValue,
      submitForm,
    }
  },
};
</script>
