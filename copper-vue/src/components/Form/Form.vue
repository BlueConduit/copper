<template>
  <form
    :class="[formClasses, className]"
    :novalidate="novalidate"
  >
    <slot></slot>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  name: "Form",
  props: {
    /**
     * A string to add custom css classes to the `form` tag
     */
    className: {
      type: String,
      default: '',
    },
    /**
     * Defaults to true, controls where the form is marked as `novalidate`,
     * helps us use :valid/:invalid selectors to style elements.
     */
    novalidate: {
      type: Boolean,
      default: true,
    },
    /**
     * True if the form should be "validated". Set this to true after a user 
     * submits a form but there are some invalid inputs, so that the validation
     * styles are applied. 
     */
    isValidated: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    props = reactive(props);

    const formClasses = computed(() => ({
      "cu-form": true,
      "cu-form--was-validated": props.isValidated,
    }))

    return {
      formClasses,
    }
  }
}
</script>

<style>

</style>
