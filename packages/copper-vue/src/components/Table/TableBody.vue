<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script>
export default {
  name: "TableBody",
  props: {
    /**
     * Use this prop to add custom CSS class names to the TableBody as needed
     */
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
