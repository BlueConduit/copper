# Change Log

## 2.1.0

### Minor Changes

- 465bc27: Define simple Tooltip component

### Patch Changes

- Updated dependencies [465bc27]
  - @blueconduit/copper@2.1.0

## 2.0.1

### Patch Changes

- Updated dependencies [ddc3217]
  - @blueconduit/copper@2.0.1

## 2.0.0

### Major Changes

- 9eb748b: Bump copper dependency and update how styles are imported

  ## Breaking Change

  ### What the breaking change is

  This updates to using the latest major version of `copper`, 2.0.0. It also changes `copper` from being a `devDependency` and `peerDependency` to being a `dependency`.

  ### Why change was made

  This is intended to make it easier to install and maintain these two packages. It also makes it possible for `copper-vue` consumers to use Sass variables from `copper`, rather than hard coding the values.

  ### How to update code

  To start using `copper-vue` 2.0.0 you will want to uninstall `copper` from your project:

  ```bash
  npm uninstall @blueconduit/copper
  ```

  Then install the latest version of `copper-vue`:

  ```bash
  npm install @blueconduit/copper-vue@2.0.0
  ```

  This will bring in `copper` as a dependency for you automatically; you no longer have to install the two packages yourself.

  You will also want to update how you're importing the css styles. If you want to keep importing the `css` file then change your import statement to:

  ```js
  import "@blueconduit/copper/css/copper.css";
  ```

  You can also import the Sass styles yourself:

  ```CSS
  // your project's index.scss

  @use "@blueconduit/copper-vue";
  ```

## 1.2.0

### Minor Changes

- 13342f0: Adds a new prop for Data Tables to allow them to be uneditable

## 1.1.0

### Minor Changes

- bc876be: Add a loading state to copper and empty state to data tables

### Patch Changes

- Updated dependencies [bc876be]
  - @blueconduit/copper@1.1.0

## 1.0.8

### Patch Changes

- 726ce36: Moving to pnpm and changesets
- Updated dependencies [726ce36]
  - @blueconduit/copper@1.0.8

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.7 (2022-03-08)

### Bug Fixes

- text input name prop has correct value ([fc45570](https://github.com/BlueConduit/copper/commit/fc4557025f791263c3c6ecfd57ab600d694e8f03))

## 1.0.6 (2022-03-08)

### Bug Fixes

- fix the name prop on TextInput components ([24b459b](https://github.com/BlueConduit/copper/commit/24b459bf93c0138cf060b7269ec9b300facd6285))

## 1.0.5 (2022-02-22)

**Note:** Version bump only for package @blueconduit/copper-vue

## 1.0.4 (2022-02-08)

### Bug Fixes

- actually exports modal component ([c52e3c4](https://github.com/BlueConduit/copper/commit/c52e3c4c0a458beaabc60c84e4627489fc45dc64))

## 1.0.3 (2022-02-04)

**Note:** Version bump only for package @blueconduit/copper-vue

## 1.0.2 (2022-02-04)

**Note:** Version bump only for package @blueconduit/copper-vue
