# Copper Design System

Here it is, the first readme for version 0 of Copper, BlueConduit's design system.

## Packages

### copper

This package contains the Sass and CSS styles that control how our components should look and behave. It lives in the `copper/` directory.

Import the compiled css file in your project to use it.

```js
import "@blueconduit/copper/dist/css/copper.css";
```

## copper-vue

This package contains the vue implementations of our components. It lives in the `copper-vue/` directory.

Import it into your projects like any other module:

```js
import { Button } from "@blueconduit/copper-vue";
```

## Installing

You (or your build environment) need to authenticate to Github Packages in order to download any of the packages here. You can do that by configuring the global npm config or by creating a `.npmrc` file in the root of the project that needs to install the package.

### Global npm config

To set the right values in your npm config use these two commands:
```
npm config set //npm.pkg.github.com/:_authToken PERSONAL_ACCESS_TOKEN
npm config set @blueconduit:registry=https://npm.pkg.github.com
```

Read about your [npm config here](https://docs.npmjs.com/cli/v6/commands/npm-config)

### Using a local .npmrc file

The `.npmrc` file should be at the root of the project you're installing the `copper` packages in and follow this format:

```
//npm.pkg.github.com/:_authToken=PERSONAL_ACCESS_TOKEN
@blueconduit:registry=https://npm.pkg.github.com
```

[Read here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) about how to get a Personal Access Token.

[Read here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) about authenticating to Github Packages.

More instructions will come here about using a global npm config when I (Jackson) get the new MacBook. I will get myself configured and create instructions here everyone else can follow.
