import { action } from "@storybook/addon-actions";

import Checkbox from "./Checkbox.vue";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};

const CheckboxStory = (args) => ({
  components: { Checkbox },
  setup() {
    return {
      args,
      onClick: action("onClicked"),
    };
  },
  template: `
    <form>
      <Checkbox
        v-bind="args"
        @update-checked="onClick"
      />
    </form>
  `,
});

export const SingleCheckbox = CheckboxStory.bind({});
SingleCheckbox.args = {
  label: "Single Checkbox",
  id: "single",
  checked: false,
};

export const DisabledCheckbox = CheckboxStory.bind({});
DisabledCheckbox.args = {
  ...SingleCheckbox.args,
  label: "Disabled Checkbox",
  disabled: true,
};
