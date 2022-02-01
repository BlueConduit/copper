<template>
  <thead :class="className">
    <slot />
  </thead>
</template>

<script>
export default {
  name: "TableHead",
  props: {
    /**
     * Use this prop to add custom CSS class names to the TableHead as needed
     */
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
