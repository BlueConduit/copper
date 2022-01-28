// For using the local styles file
import "../../copper/dist/css/copper.css";

// For using styles in the @blueconduit/copper package
// import "@blueconduit/copper/dist/css/copper.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};
