# copper-vue

<a href="https://www.npmjs.com/package/@blueconduit/copper-vue"><img alt="NPM Status" src="https://img.shields.io/npm/v/@blueconduit/copper-vue?color=%235ca3ea"></a>

This is a library of Vue components that implement BlueConduit's Copper design system. It depends on the `@blueconduit/copper` package for its styles. It uses Storybook to document the components and act as a development environment.

This project still needs some reorganizing done, but the Vue components live in the `src/` directory.

## Installing in another project

```
npm install @blueconduit/copper @blueconduit/copper-vue
```

### Note for users of version < 1.0.0

See the note in the root level [README](https://github.com/BlueConduit/copper/blob/main/README.md) about updating your `npm` config.


## Build process

We use the Vue CLI tool to help build the components in order to be published. The build command is:

```
pnpm build
```

You probably want to run that command from the root level rather than just this package. From the root level the `pnpm build` script setup will run the build command in every package simultaneously. 

The Vue CLI looks at `src/index.js` as the entry point and traces all its imports to know what code to transpile and bundle for us. This gives us a our outputs in the `dist/` directory.

## Working on this package

### Project setup

**These two commands should be run at the root level**

```
pnpm install
pnpm prepare
```

### Run Storybook

Storybook acts as our development environment

```
pnpm storybook
```

### Run your unit tests

```
pnpm test:unit
```

### Lints and fixes files

```
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
