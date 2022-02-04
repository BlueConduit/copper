<template>
  <option :value="value">{{ label }}</option>
</template>

<script>
export default {
  name: "SelectOption",
  props: {
    /**
     * The value for this select option.
     */
    value: {
      type: [String, Number],
      default: "",
    },
    /**
     * A human-readable label for this value.
     */
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
