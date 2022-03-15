<template>
  <span
    >This story waits 1.5 seconds before it loads any data, as a rudimentary way
    to simulate async data fetching.</span
  >
  <template v-if="loading">
    <data-table-sketch :columns="columns" :rowCount="pageSize" />
  </template>
  <template v-else>
    <data-table
      :data="dataSubset"
      :columns="columns"
      @editRow="handleEditRow"
      paginate
      :index="index"
      :pageSize="pageSize"
      :totalSize="totalSize"
      @change-page="getNewPage"
      @change-page-size="changePageSize"
    />
  </template>
</template>

<script>
import DataTable from "./DataTable.vue";
import DataTableSketch from "../DataTableSketch/DataTableSketch.vue";
import data from "./BootstrapData.js";
import { computed, ref } from "vue";
import { onMounted } from "vue";

export default {
  name: "DataTableAsync",
  components: {
    DataTable,
    DataTableSketch,
  },
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

    const loading = ref(true);
    const tableData = ref([]);
    const pageSize = ref(5);
    const index = ref(0);
    // const totalSize = computed(() => tableData.value.length);
    const totalSize = ref(0);
    const dataSubset = computed(() =>
      tableData.value.slice(
        index.value,
        Math.min(index.value + pageSize.value, totalSize.value - 1)
      )
    );

    const getNewPage = (page) => {
      if (page === "prev") {
        if (index.value - pageSize.value < 0) {
          index.value = 0;
        } else {
          index.value = index.value - pageSize.value;
        }
      } else if (page === "next") {
        if (index.value + pageSize.value >= totalSize.value) {
          index.value = totalSize.value - pageSize.value;
        } else {
          index.value = index.value + pageSize.value;
        }
      } else {
        index.value = (page - 1) * pageSize.value;
      }
    };
    const changePageSize = (newPageSize) => {
      console.log(newPageSize);
      pageSize.value = parseInt(newPageSize);
      // updateTableSubset();
    };

    const handleEditRow = (row) => {
      console.log(row);
      window.alert("This is the row you're editing\n" + JSON.stringify(row));
    };

    const getData = () => {
      setTimeout(() => {
        tableData.value = data;
        // simulating getting the number of rows back in an API response
        totalSize.value = 53;
        loading.value = false;
      }, 1500);
    };

    onMounted(() => {
      getData();
    });

    return {
      loading,
      dataSubset,
      columns,
      pageSize,
      totalSize,
      index,
      getNewPage,
      changePageSize,
      handleEditRow,
    };
  },
};
</script>
