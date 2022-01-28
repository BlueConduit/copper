<template>
  <fieldset
    :class="['cu-form__group']"
  >
    <legend> {{ legend }} </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: "CheckboxGroup",
  props: {
    /**
     * The legend for the group of checkboxes, helps screen readers associate
     * checkboxes that have a common label.
     */
    legend: {
      type: String,
      required: true,
    }
  }
}
</script>
