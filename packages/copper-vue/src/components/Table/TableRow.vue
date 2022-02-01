<template>
  <tr :class="className">
    <slot />
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    /**
     * Use this prop to add custom CSS class names to the TableRow as needed
     */
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
