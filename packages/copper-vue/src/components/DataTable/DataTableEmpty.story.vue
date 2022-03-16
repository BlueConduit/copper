<template>
  <div class="cu-stack-xl">
    <div class="cu-stack">
      <p>Base empty table</p>
      <data-table :data="data" :columns="columns" sortable paginate />
    </div>

    <div class="cu-stack">
      <p>
        Empty table with a custom empty state using the
        <code>#empty-state</code> slot
      </p>
      <data-table :data="data" :columns="columns" sortable>
        <template #empty-state>
          <div class="custom-empty-state">
            <div>Oh geez, Rick, looks like we messed up</div>
            <Button>Try again!</Button>
          </div>
        </template>
      </data-table>
    </div>
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";
import Button from "../Button/Button.vue";

import { ref } from "vue";

export default {
  name: "DataTableEmpty",
  components: {
    Button,
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

<style scoped>
.custom-empty-state {
  margin: 1.5rem auto;
  padding: 1rem;
  max-width: 600px;
  background-color: coral;
  border-radius: 0.25rem;
}
.custom-empty-state div {
  font-size: 24px;
}
</style>
