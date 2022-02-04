<template>
  <data-table
    :data="dataSubset"
    :columns="columns"
    @editRow="handleEditRow"
    sortable
    :sortModel="sortModel"
    @change-sort="changeSort"
    paginate
    :index="index"
    :pageSize="pageSize"
    :totalSize="totalSize"
    @change-page="getNewPage"
    @change-page-size="changePageSize"
  />
</template>

<script>
import DataTable from "./DataTable.vue";
import data from "./BootstrapData.js";
import { ref } from "vue";

export default {
  name: "DataTableSimple",
  components: {
    DataTable,
  },
  setup() {
    const columns = ref([""]);
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

    // Deep copy of the original array for when we're no longer sorting the table
    const originalData = data.map((a) => ({ ...a }));
    const tableData = ref(data);
    const pageSize = ref(5);
    const index = ref(0);
    const totalSize = ref(tableData.value.length);
    const dataSubset = ref(tableData.value.slice(0, 5)); // should really be a computed() property
    const sortModel = ref({
      column: "",
      direction: "",
    });

    const sortData = () => {
      if (!sortModel.value.column) {
        tableData.value = originalData; // reset to the original bootstrapping data
        updateTableSubset();
        return;
      }

      const compare = (a, b) => {
        const col = sortModel.value.column;
        const compareReturnVal = sortModel.value.direction === "asc" ? 1 : -1;
        if (a[col] < b[col]) {
          return compareReturnVal;
        }
        if (a[col] > b[col]) {
          return compareReturnVal * -1;
        }
        return 0;
      };
      tableData.value.sort(compare);
      updateTableSubset();
    };

    const changeSort = (newSortColumn) => {
      if (sortModel.value.column === newSortColumn) {
        if (sortModel.value.direction === "desc") {
          sortModel.value = {
            column: newSortColumn,
            direction: "asc",
          };
        } else {
          sortModel.value = {
            column: "",
            direction: "",
          };
        }
      } else {
        sortModel.value = {
          column: newSortColumn,
          direction: "desc",
        };
      }
      sortData();
    };

    const updateTableSubset = () => {
      if (index.value < 0) {
        index.value = 0;
      }
      if (index.value >= totalSize.value) {
        index.value = totalSize.value - pageSize.value;
      }
      dataSubset.value = tableData.value.slice(
        index.value,
        index.value + pageSize.value
      );
    };

    const getNewPage = (page) => {
      if (page === "prev") {
        index.value = index.value - pageSize.value;
        updateTableSubset();
      } else if (page === "next") {
        index.value = index.value + pageSize.value;
        updateTableSubset();
      } else {
        index.value = (page - 1) * pageSize.value;
        updateTableSubset();
      }
    };
    const changePageSize = (newPageSize) => {
      console.log(newPageSize);
      pageSize.value = parseInt(newPageSize);
      updateTableSubset();
    };

    const handleEditRow = (row) => {
      console.log(row);
      window.alert("This is the row you're editing\n" + JSON.stringify(row));
    };

    return {
      dataSubset,
      sortModel,
      columns,
      pageSize,
      totalSize,
      index,
      getNewPage,
      changePageSize,
      changeSort,
      handleEditRow,
    };
  },
};
</script>
