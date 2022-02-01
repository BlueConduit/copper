<template>
  <div 
    :class="['cu-form__group', className]"
  >
    <label 
      :for="id" 
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <input
      :type="type" 
      :class="inputClasses" 
      :id="id"
      :required="required"
      :disabled="disabled"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      v-bind="$attrs"
    >

    <!-- A text input can have a separate validation message from its help text.
    We use CSS classes to show or hide the appropriate text based on the current 
    validity of the input. -->
    <!-- Is this a good idea? Not sure yet! Let's try it out and see how good or bad
    it is in practice. -->
    <span
      v-if="helperText"
      :class="helpTextClasses"
    >
      {{ helperText }}
    </span>

    <span 
      v-if="invalidText"
      :class="invalidTextClasses"  
    >
      {{ invalidText }}
    </span>
    <span
      v-else-if="helperText"
      :class="invalidTextClasses"
    >
      {{ helperText }}
    </span>

  </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  name: "TextInput",
  inheritAttrs: false,
  props: {
    /**
     * The current value of the input element, required for a controlled 
     * component. Expects two-way binding with v-model, e.g. `<TextInput v-model:value="myValue"/>`
     */
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     * Set this to true if you want to manually mark the input as "invalid".
     */
    invalid: {
      type: Boolean,
      default: false,
    },
    /**
     * A CSS classname that is applied to the TextInput wrapper div
     */
    className: {
      type: String,
      default: "",
    },
    /**
     * The unique ID of this `input` element
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The name of this `input` element, required for the field to be included
     * when the form is submitted.
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * True if the `input` should be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The text label to use with this `input`
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * A string of text to help the user understand what this field is for. 
     */
    helperText: {
      type: String,
      default: "",
    },
    /**
     * A string to show when the input's value is invalid after validation 
     * was done. If the input is being marked "required" then you should
     * always provide a string here.   
     */
    invalidText: {
      type: String,
      default: "",
    },
    /**
     * Further specify type of text `input` to use, can be: `text`, `email`, or
     * `password`. Default value is `text`.
     */
    type: {
      type: String,
      validator(value) {
        return ['text', 'email', 'password'].includes(value);
      },
      default: 'text',
    },
  },

  setup(props) {
    props = reactive(props);

    const labelClasses = computed(() => ({
      "cu-form__label": true,
      "cu-form__label--invalid": props.invalid,
      "cu-form__label--disabled": props.disabled,
    }));

    const inputClasses = computed(() => ({
      "cu-text-input": true,
      "cu-form--is-invalid": props.invalid,
      "cu-text-input--disabled": props.disabled,
    }));
    
    const helpTextClasses = computed(() => ([
      "cu-form__help-text"
    ]));
    
    const invalidTextClasses = computed(() => [
      'cu-form__invalid-text',
    ]);

    return {
      labelClasses,
      inputClasses,
      helpTextClasses,
      invalidTextClasses,
    }
  }
}
</script>

<style>

</style>
