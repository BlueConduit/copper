<template>
  <button
    type="button"
    :class="[classes, className]"
    :disabled="isDisabled"
    @click="$emit('click', $event)"
  >
    <!-- @slot Use this slot to put text in the button -->
    <slot></slot>
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Button",

  props: {
    /**
     * Which type of button is this?
     */
    variant: {
      type: String,
      validator: function (value) {
        return ["primary", "secondary", "grey"].indexOf(value) !== -1;
      },
      default: "primary",
    },
    /**
     * Controls if this is a regular or large sized button
     */
    size: {
      type: String,
      validator: function (value) {
        return ["regular", "large"].indexOf(value) !== -1;
      },
      default: "regular",
    },
    /**
     * Use this prop to add custom CSS class names to the Button as needed
     */
    className: {
      type: String,
      default: "",
    },
    /**
     * True if the button is disabled
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["click"],

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "cu-button": true,
        "cu-button-secondary": props.variant === "secondary",
        "cu-button-grey": props.variant === "grey",
        "cu-button--large": props.size === "large",
      })),
    };
  },
};
</script>
