# Copper Design System

Welcome to Copper, BlueConduit's design system!

## copper

This package contains the Sass and CSS styles that control how our components should look and behave. It lives in the `packages/copper/` directory.

Import the compiled css file in your project to use it.

```js
import "@blueconduit/copper/dist/css/copper.css";
```

## copper-vue

This package contains the vue implementations of our components. It lives in the `packages/copper-vue/` directory.

Import it into your projects like any other module:

```js
import { Button } from "@blueconduit/copper-vue";
```

## Contributing

To get started making a contribution from the repo root level run:

```
npm install
npm run build
```

This should install all your dependencies, setup your `husky` git hooks (more on `husky` below), and compile the latest code. You should be good to start writing your changes from there.

## Installing

Install the packages as you would any other npm package

```
npm install @blueconduit/copper
```

or to use the Vue components

```
npm install @blueconduit/copper @blueconduit/copper-vue
```

### Note for users of version < 1.0.0

Previously, you were required to configure npm, either with your global config for an `.npmrc` file, to look for these packages in the Github package registry. It probably looked something like this:

```
//npm.pkg.github.com/:_authToken=PERSONAL_ACCESS_TOKEN
@blueconduit:registry=https://npm.pkg.github.com
```

**This is no longer required.** In fact, if you still have this setup in place you won't be able to download the latest package versions on npm. 

## Publishing new package version

We rely on [Lerna](https://lerna.js.org/) to handle versioning and publishing our packages. It also creates our Changelogs. It relies on particular commit messages to automate this process, see the section below for more details.

## Commit Linting

We rely on [`commitlint`](https://github.com/conventional-changelog/commitlint) to enforce standards on all our commit messages, and on [`husky`](https://typicode.github.io/husky/#/) to enable the git hooks to check them after each commit that's made. These hooks should be setup after `npm install`. 

We're using the [convential config](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) for `commitlint`, see its docs for details on how to format your commit messages. 
