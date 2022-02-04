<template>
  <Select
    id="simple-select"
    label="Simple Demo Select Input"
    helpterText="Pick an option!"
    v-model:value="selectValue"
  >
    <SelectOption label="- Pick a choice -" disabled />
    <SelectOption value="1" label="One" />
    <SelectOption value="2" label="Two" />
    <SelectOption value="3" label="Three" />
  </Select>
</template>

<script>
import { ref } from "vue";
import Select from "./Select.vue";
import SelectOption from "./SelectOption.vue";

export default {
  name: "SelectSimple",
  components: {
    Select,
    SelectOption,
  },
  setup() {
    const selectValue = ref("");
    return {
      selectValue,
    };
  },
};
</script>
