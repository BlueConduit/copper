<template>
  <Table>
    <table-head>
      <table-row>
        <table-header 
          v-for="(column, index) in columns" 
          :key="index"
          :clickable="sortable"
        >
          <button 
            v-if="sortable"
            class="cu-datatable-sort"
            :class="{
              'cu-datatable-sort--active': column.id === sortModel.column,
              'cu-datatable-sort--asc': sortModel.direction === 'asc',
            }"
            @click="$emit('changeSort', column.id)"
          >
            <span class="cu-datatable-sort__flex" >
              {{ column.label }} 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cu-datatable-sort__icon--unsorted" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cu-datatable-sort__icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
            </span>
          </button>

          <span v-else>
            {{ column.label }}
          </span>

        </table-header>
        <table-header/> 
      </table-row>
    </table-head>
    <table-body>
      <table-row 
        v-for="(row, row_index) in data" 
        :key="row_index"
      >
        <table-cell 
          v-for="(column, col_index) in columns" 
          :key="col_index"
        >
          {{ row[ column['id'] ] }}
        </table-cell>
        <table-cell
          @click="$emit('editRow', {...row})"
          class="cu-datatable__edit-icon"
        >
          <svg width="24" height="24" viewBox="-2 -2 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#1E2329"/>
          </svg>
        </table-cell>
      </table-row>
    </table-body>
  </Table>
  <div class="cu-datatable__pagination" v-if="paginate">
    <div class="cu-datatable__pagination__left-controls">
      <select
        id="pagination-select"
        class="cu-select-input"
        :value="pageSize"
        @change="$emit('changePageSize', $event.target.value)"
      >
        <option value=5>5</option>
        <option value=10>10</option>
        <option value=25>25</option>
      </select>
      <label for="pagination-select">Rows per page</label>
    </div>
    <div class="cu-datatable__pagination__right-controls">
      <span>{{ index+1 }} - {{ rangeUpperBound }} of {{ totalSize }}</span>
      <Button
        variant="grey"
        @click="$emit('changePage', 'prev')"
        :isDisabled="isPrevDisabled"
      >
        Prev
      </Button>
      <span class="cu-datatable__pagination__page-nums">
        <span 
          v-for="(label, index) in pageNumberButtons" 
          :key="index"
        >
          <button
            v-if="label !== '...'"
            @click="$emit('changePage', label)"
            class="cu-datatable__pagination__page-num"
            :class="{
              'cu-datatable__pagination__page-num--active': currentPageNumber === label,

            }"
          >
            {{ label }}
          </button>
          <span v-else>
            {{ label }}
          </span>
        </span>

      </span>
      <Button
        variant="grey"
        @click="$emit('changePage', 'next')"
        :disabled="isNextDisabled"
      >
        Next
      </Button>
    </div>
  </div>
</template>

<script>
import { 
  computed, 
  reactive,
  watchEffect,
} from 'vue';

import Button from "../Button/Button.vue";
import Table from "../Table/Table.vue";
import TableBody from "../Table/TableBody.vue";
import TableCell from "../Table/TableCell.vue";
import TableHead from "../Table/TableHead.vue";
import TableHeader from "../Table/TableHeader.vue";
import TableRow from "../Table/TableRow.vue";


export default {
  components: {
    Button,
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
  },

  name: "DataTable",

  emits: {
    /**
     * Emitted when user clicks the "prev" or "next" button. The payload can 
     * be either 'prev', 'next', or an int to specify a particular page. Use this
     * to appropriately update the page of data the user is shown. 
     */
    changePage: (page) => {
      if (page) {
        if (page === 'next') { 
          return true; 
        }
        if (page === 'prev') { 
          return true; 
        }
        if (parseInt(page)) { 
          return true; 
        }
      }
      console.warn("Invalid event payload, you must specify the page the table should change to. Valid choices are 'next', 'prev', or a specific page number as an int.");
      return false;
    },
    /**
     * Emitted when the user asks to change the size of each page. Choices right now
     * are 5, 10, or 25 rows at a time. 
     */
    changePageSize: (pageSize) => {
      if (parseInt(pageSize)) { 
        return true; 
      }
      console.warn("Invalid event payload, you must specify the new page size as an int.");
      return false;
    },
    /**
     * Emitted when the user clicks a column when the data table is marked 
     * `sortable`. It only contains the unique id of the column name, it's up to
     * the parent component to update the `sortModel` appropriately and sort the
     * data before handing it to this component. 
     */
    changeSort: (column) => {
      if (column) {
        return true;
      }
      return false;
    },

    /**
     * Emitted when a user wants to edit a row in the table. Currently it is
     * emitted when the pencil icon is clicked. The entire row object is sent 
     * in the payload. This way an editing UI can be populated with the current
     * values of the row. 
     */
    editRow: (row) => {
      if (row) {
        return true;
      }
      return false;
    },
  },

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

    /**
     * Should be an array of objects for the data table to display. Each object
     * in the array should correspond to one row in the data table. The keys of 
     * the object should match the `id` values of the `columns` prop. The values
     * of the the object should be that row's data value for each column.
     */
    data: {
      type: Array,
      required: true,
    },

    /**
     * True if users should be able to sort the data table by clicking the 
     * column headers.
     */
    sortable: {
      type: Boolean,
      default: false,
    },

    /**
     * Use to specify which column is currently sorted and which direction it's
     * sorted in. This is for presentational purposes only so that the correct arrow
     * icons and other styles can be added to the sorted column. It's up to the parent component to actually handle sorting that data. 
     */
    sortModel: {
      type: Object,
      default() {
        return {
          column: '',
          direction: '',
        }
      },
    },

    /**
     * True if the table should show the controls for pagination.
     */
    paginate: {
      type: Boolean,
      default: false,
    },

    /**
     * The index of the row that's being displayed at the top of the table. 
     * This helps display the "X-Y of Z" message. Indices start at 0. 
     */
    index: {
      type: Number,
      required: true,
    },

    /**
     * The total number of rows of data for this data table. 
     */
    totalSize: {
      type: Number,
      required: true,
    },

    /**
     * This value should correspond to the current number of rows that should
     * be shown per page. It's up to the parent component to track this value
     * and pass it down to the data table component so that things render as
     * expected. 
     */
    pageSize: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    props = reactive(props);

    const isNextDisabled = computed(() => props.index + props.pageSize >= props.totalSize)
    const isPrevDisabled = computed(() => props.index - props.pageSize < 0);

    const rangeUpperBound = computed(() => {
      let upperBound = props.index + props.pageSize;
      if (upperBound > props.totalSize) {
        upperBound = props.totalSize;
      }
      return upperBound;
    });

    const currentPageNumber = computed(() => Math.floor(props.index / props.pageSize) + 1);
    const lastPageNumber = computed(() => Math.ceil(props.totalSize / props.pageSize) );
    const watchLastPageNumber = watchEffect(() => console.log(props.totalSize));

    const pageNumberButtons = computed(() => {

      let buttonLabels = [];

      // Simple case where we can just show all the page numbers
      if (lastPageNumber.value < 7) {
        for (let label = 1; label <= lastPageNumber.value; label++) {
          buttonLabels.push(label);
        }
        return buttonLabels;
      }

      // Too pages to show all the buttons, so we use some logic to truncate
      // the list
      if (currentPageNumber.value <= 3 || currentPageNumber.value >= lastPageNumber.value-2) {
        buttonLabels = [1, 2, 3, '...', lastPageNumber.value-2, lastPageNumber.value-1, lastPageNumber.value]
      }
      else {
        buttonLabels = [1, '...', currentPageNumber.value-2, currentPageNumber.value-1, currentPageNumber.value, currentPageNumber.value+1, currentPageNumber.value+2, '...', lastPageNumber.value]
      }

      return buttonLabels;
    })

    return {
      isNextDisabled,
      isPrevDisabled,
      rangeUpperBound,
      currentPageNumber,
      lastPageNumber,
      watchLastPageNumber,
      pageNumberButtons,
    }
  }
}
</script>
