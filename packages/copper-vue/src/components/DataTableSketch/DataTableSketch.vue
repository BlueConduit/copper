<template>
  <Table>
    <table-head>
      <table-row>
        <table-header v-for="(column, index) in columns" :key="index">
          {{ column.label }}
        </table-header>
      </table-row>
    </table-head>
    <table-body>
      <table-row v-for="n in rowCount" :key="n">
        <table-cell v-for="(column, col_index) in columns" :key="col_index">
          <span></span>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
</template>

<script>
import Table from "../Table/Table.vue";
import TableBody from "../Table/TableBody.vue";
import TableCell from "../Table/TableCell.vue";
import TableHead from "../Table/TableHead.vue";
import TableHeader from "../Table/TableHeader.vue";
import TableRow from "../Table/TableRow.vue";

export default {
  components: {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  },

  name: "DataTableSketch",

  props: {
    /**
     * Should be an array of objects that specifies the meta data about the
     * columns in this table.
     * @example
     * ```
     * const columns = [
     *   {
     *     id: 'unique-column-id',
     *     label: 'Human readable label',
     *   }
     * ]
     * ```
     */
    columns: {
      type: Array,
      required: true,
    },

    rowCount: {
      type: Number,
      default: 5,
    },
  },
};
</script>
