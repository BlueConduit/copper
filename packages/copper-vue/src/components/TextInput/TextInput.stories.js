import TextInput from "./TextInput.vue";

export default {
  title: "Components/Text Input",
  component: TextInput,
  argTypes: {
    type: {
      options: ["text", "email", "password"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  template: `<TextInput v-bind="args" />`,
});

export const RegularInput = Template.bind({});
RegularInput.args = {
  id: "regular-input",
  name: "regular-input",
  label: "Regular Text Input",
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  id: "invalid-input",
  name: "invalid-input",
  label: "Invalid Input",
  invalid: true,
  invalidText: "Your input was invalid",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: "disabled-input",
  name: "disabled-input",
  label: "Disabled Input",
  disabled: true,
};

const InteractiveTemplate = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  data() {
    return {
      myValue: "",
    };
  },
  template: `
    <TextInput v-bind="args" v-model:value="myValue" />
    <div>{{ myValue }}</div>  
  `,
});

export const InteractiveInput = InteractiveTemplate.bind({});
InteractiveInput.args = {
  id: "interactive",
  name: "interactive",
  label: "An interactive input",
  helperText: "Is this field right?",
};
