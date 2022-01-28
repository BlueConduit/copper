module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    // a11y docs: https://storybook.js.org/addons/@storybook/addon-a11y/
    "@storybook/addon-a11y",
  ],
};
