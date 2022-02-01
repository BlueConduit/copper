import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: {},
    variant: {
      options: ["primary", "secondary", "grey"],
      control: { type: "select" },
    },
    className: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args">
      Button
    </Button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  className: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true,
};
