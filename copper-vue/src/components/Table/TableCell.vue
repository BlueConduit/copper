<template>
  <td :style="cellStyle">
    <slot />
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    /**
     * An object to specify styles for a specific table cell
     */
    cellStyle: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>
