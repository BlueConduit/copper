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

Keep in mind that this project uses `pnpm` rather than `npm`. To get started making a contribution from the repo root level run:

```
pnpm install
pnpm prepare ## install husky's Git hooks
pnpm build
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

We rely on `pnpm` and `changesets` to help version and publish our packages. You can read about [changesets here](https://github.com/changesets/changesets) and using [pnpm with changesets here.](https://pnpm.io/using-changesets) It also helps create Changelogs. The process looks like this:

```
## Make code changes 
```
Create changesets and commit them. Read more about that [here](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).
```
pnpm changeset
## Commit the changes from that command
```

When the changes have been merged into `main` and we're ready to release them
```
pnpm changeset version
pnpm install 
## Commit changes with message like 'chore: release'

## see package.json for what this script does
pnpm release
```

We no longer rely on `Lerna` to handle versioning and publishing our packages. 

## Commit Linting

We rely on [`commitlint`](https://github.com/conventional-changelog/commitlint) to enforce standards on all our commit messages, and on [`husky`](https://typicode.github.io/husky/#/) to enable the git hooks to check them after each commit that's made. These hooks should be setup after `npm install`. 

We're using the [convential config](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) for `commitlint`, see its docs for details on how to format your commit messages. 
