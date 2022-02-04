import Table from "./Table.vue";
import TableBody from "./TableBody.vue";
import TableCell from "./TableCell.vue";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const headers = [
  {
    key: "location",
    header: "Location",
  },
  {
    key: "private",
    header: "Private Material",
  },
  {
    key: "public",
    header: "Private Material",
  },
];

const rows = [
  {
    id: 1,
    location: "123 Main St.",
    private: "Copper",
    public: "Copper",
  },
  {
    id: 2,
    location: "456 Main St.",
    private: "Lead",
    public: "Lead",
  },
  {
    id: 3,
    location: "7746 Sunnyvale Ave.",
    private: "Unknown",
    public: "Copper",
  },
  {
    id: 4,
    location: "789 Example Dr.",
    private: "Lead",
    public: "Copper",
  },
];

export default {
  title: "Components/Table",
  component: Table,
  subcomponents: {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  },
  argTypes: {
    headers: {
      description: "An array of headers for the table",
    },
    rows: {
      description: "An array of objects, each describes a row of data",
    },
  },
};

const Template = (args) => ({
  components: { Table, TableBody, TableCell, TableHead, TableHeader, TableRow },
  setup() {
    return { args };
  },
  template: `
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader v-for="header in args.headers">
            {{ header.header }}
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow v-for="row in args.rows">
          <TableCell>{{ row.location }}</TableCell>
          <TableCell>{{ row.private }}</TableCell>
          <TableCell>{{ row.public }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  `,
});

export const BasicTable = Template.bind({});
BasicTable.args = {
  headers: headers,
  rows: rows,
};
