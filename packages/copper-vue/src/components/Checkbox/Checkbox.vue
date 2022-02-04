<template>
  <div :class="wrapperClasses">
    <input
      class="cu-check__input"
      type="checkbox"
      :id="id"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      :value="value"
      @change="$emit('update:checked', $event.target.checked)"
      v-bind="$attrs"
    />
    <label :for="id" :class="labelClasses">{{ label }}</label>

    <span v-if="helperText" :class="helpTextClasses">
      {{ helperText }}
    </span>

    <span v-if="invalidText" :class="invalidTextClasses">
      {{ invalidText }}
    </span>
    <span v-else-if="helperText" :class="invalidTextClasses">
      {{ helperText }}
    </span>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import classNames from "classnames";

export default {
  name: "Checkbox",
  inheritAttrs: false,
  props: {
    /**
     * The label to place on this checkbox. Always required, even if you want to
     * hide the label, because it's needed for screen readers.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * The unique ID to give this checkbox.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The name to give this checkbox in the form it's used in.
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * True if the checkbox should be checked.
     */
    checked: {
      type: Boolean,
      default: false,
    },
    /**
     * True if the checkbox should be disabled.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The value of the checkbox. This DOM API casts this to a string.
     */
    value: {
      type: [String, Number],
      default: "",
    },
  },

  emits: [
    /** Emitted on checking the box */
    "update:checked",
  ],

  setup(props) {
    props = reactive(props);
    return {
      // checked: props.checked,
      wrapperClasses: computed(() =>
        classNames("cu-check", {
          "cu-check--disabled": props.disabled,
        })
      ),
      labelClasses: computed(() => classNames("cu-check__label")),
    };
  },
};
</script>

<style></style>
