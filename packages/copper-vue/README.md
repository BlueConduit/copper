# copper-vue

This is a library of Vue components that implement BlueConduit's Copper design system. It depends on the `@blueconduit/copper` package for its styles. It uses Storybook to document the components and act as a development environment.

This project still needs some reorganizing done, but the Vue components live in the `src/` directory.

## Installing in another project

```
npm install @blueconduit/copper @blueconduit/copper-vue
```

## Build process

We use the Vue CLI tool to help build the components in order to be published. The build command is:

```
npm run build:lib
```

Vue CLI looks at `src/index.js` as the entry point and traces all its imports to know what code to transpile and bundle for us. This gives us a couple outputs in the `dist/` directory.

## Publishing new package version

Publishing a new version of the package is simple if you have your npm authorization setup as noted in the parent README. This project's `package.json` file is setup to publish whatever files are in the `dist/` directory. Follow these steps when publishing a new version:

- Run `npm run build:lib` to make sure your latest changes are compiled and placed into the local `dist/` directory
- Increment the version number in `package.json` appropriately. [Follow SEMVER versioning guidelines](https://semver.org/).
- Run `npm publish`

This process is simple, but brittle. Look for this to change as this package matures.

## Working on this package

### Project setup

```
npm install
```

### Run Storybook

```
npm run storybook
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
