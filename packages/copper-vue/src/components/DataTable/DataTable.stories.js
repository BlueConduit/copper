import DataTableSimple from "./DataTableSimple.story.vue";
import DataTableAsync from "./DataTableAsync.story.vue";
import DataTableEmpty from "./DataTableEmpty.story.vue";

export default {
  title: "Components/Data Table",
};

export const SimpleDataTable = () => DataTableSimple;
export const AsyncDataTable = () => DataTableAsync;
export const EmptyDataTable = () => DataTableEmpty;
