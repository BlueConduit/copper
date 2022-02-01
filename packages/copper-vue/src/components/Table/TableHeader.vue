<template>
  <th
    scope="col"
    :aria-sort="ariaSort"
    :class="{'cu-table__heading--clickable': clickable}"
  >
    <slot />
  </th>
</template>

<script>
export default {
  /**
   * True if the column header is going to be clickable so the right styles
   * can be shown.
   */
  props: {
    clickable: {
      type: Boolean,
      default: false,
    },

    /**
     * Sets the `aria-sort` property. Use this if the column is being sorted
     * to help users who are using screen readers. 
     */
    ariaSort: {
      type: String,
      validator(value) {
        return ['none', 'ascending', 'descending', ''].includes(value);
      }
    }
  },
};
</script>

<style></style>
