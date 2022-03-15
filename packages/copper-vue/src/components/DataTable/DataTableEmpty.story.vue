<template>
  <data-table :data="data" :columns="columns" sortable />
</template>

<script>
import DataTable from "./DataTable.vue";
import { ref } from "vue";

export default {
  name: "DataTableEmpty",
  components: {
    DataTable,
  },
  setup() {
    const columns = ref([]);
    const data = ref([]);
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
      data,
      columns,
    };
  },
};
</script>
