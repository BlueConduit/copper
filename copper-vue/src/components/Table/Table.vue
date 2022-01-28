<template>
  <div class="cu-table-wrapper">
    <table class="cu-table" :class="[className]" :aria-label="ariaLabel">
      <!-- @slot Slot for the rest of the table content  -->
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    /**
     * Use this prop to add custom CSS class names to the Table as needed
     */
    className: {
      type: String,
      default: "",
    },
    /**
     * The `aria-label` attribute is used to define a string that labels the table. Use it in cases where a text label is not visible on the screen for a table. If there is visible text labeling the element, use `aria-labelledby` instead.
     */
    ariaLabel: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
