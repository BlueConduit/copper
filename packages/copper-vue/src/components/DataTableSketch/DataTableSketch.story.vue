<template>
  <data-table-sketch :columns="columns" :rowCount="5" />
</template>

<script>
import { ref } from "vue";
import DataTableSketch from "./DataTableSketch.vue";
export default {
  name: "DataTableSketchSimple",
  components: { DataTableSketch },
  setup() {
    const columns = ref([]);
    columns.value = [
      {
        id: "id",
        label: "ID",
      },
      {
        id: "status",
        label: "Status",
      },
      {
        id: "address",
        label: "Address",
      },
      {
        id: "prediction",
        label: "Prediction",
      },
    ];

    return {
      columns,
    };
  },
};
</script>

<style></style>
