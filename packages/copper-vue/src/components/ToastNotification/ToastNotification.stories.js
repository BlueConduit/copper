import ToastNotification from "./ToastNotification.vue";

export default {
  title: "Components/Toast Notification",
  component: ToastNotification,
  argTypes: {
    variant: {
      options: ["info", "warning", "success", "error"],
      control: { type: "select" },
    },
    className: {
      control: { type: "text" },
    },
    headerClassName: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    ToastNotification,
  },
  setup() {
    return { args };
  },
  template: `
    <ToastNotification v-bind="args">
      <template v-slot:header>
        {{args.variant}} notification header
      </template>
      <template v-slot:message>
        This is the {{args.variant}} notification message
      </template>
    </ToastNotification>
  `,
});

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  className: "",
  headerClassName: "",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  className: "",
  headerClassName: "",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  className: "",
  headerClassName: "",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  className: "",
  headerClassName: "",
};
