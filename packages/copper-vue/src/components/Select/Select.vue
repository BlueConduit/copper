<template>
  <div class="cu-form__group">
    <label :for="id">{{ label }}</label>
    <select
      :name="id"
      :id="id"
      :value="value"
      :class="selectClasses"
      @input="$emit('update:value', $event.target.value)"
      v-bind="$attrs"
    >
      <slot></slot>
    </select>

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
import { reactive, computed } from "vue";
import classNames from "classnames";
export default {
  name: "Select",
  inheritAttrs: false,
  props: {
    /**
     * The unique ID of this `select` input in the DOM
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The text label to use with this `select`
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * True if you need to manually say the `select` is invalid
     */
    invalid: {
      type: Boolean,
      default: false,
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
  },
  setup(props) {
    props = reactive(props);

    const selectClasses = computed(() =>
      classNames("cu-select-input", {
        "cu-form--is-invalid": props.invalid,
      })
    );

    const helpTextClasses = computed(() => ["cu-form__help-text"]);

    const invalidTextClasses = computed(() => ["cu-form__invalid-text"]);

    return {
      selectClasses,
      helpTextClasses,
      invalidTextClasses,
    };
  },
};
</script>
