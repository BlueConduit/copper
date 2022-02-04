<template>
  <div class="cu-check">
    <input
      class="cu-check__input"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <label class="cu-check__label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "RadioButton",
  inheritAttrs: false,
  props: {
    /**
     * The label to place with this radio button.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * The unique ID to give this radio button.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Use this prop to designate the set of radio buttons this button belongs
     * to. Use this to limit the user to only one choice in a given set of
     * buttons.
     */
    name: {
      type: String,
      required: true,
    },
    // checked,
    /**
     * The value of this radio button in the form.
     */
    value: {
      type: [String, Number],
      default: "",
    },
    modelValue: {
      type: String,
    },
  },
  emits: [
    /**
     * Emitted on checking the radio button
     */
    "update:modelValue",
  ],
  setup(props) {
    const isChecked = computed(() => {
      console.log("modelValue, ", props.modelValue);
      console.log("value, ", props.value);
      return props.modelValue === props.value;
    });
    return {
      isChecked,
    };
  },
};
</script>
