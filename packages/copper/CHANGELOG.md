# Change Log

## 2.0.1

### Patch Changes

- ddc3217: Fix file names so builds on Linux work again

## 2.0.0

### Major Changes

- 65093e6: Change build process to include scss files

  ## Breaking Change

  ### What the breaking change is

  This is a significant change to the files that are being included in this package. In addition to the compiled `css` files, `copper` now includes the `scss` files. The top-level `dist` directory has also been removed.

  ### Why change was made

  The change was made to expose things like design token variables to consumers. They are now able to use something like `$primary` to use our primary color instead of the raw hex value in their code.

  ### How to update code

  Previously, importing the `css` files looked like:

  ```js
  import "@blueconduit/copper/dist/css/copper.css";
  ```

  To continue importing the compiled `css` you'll need to update your imports to:

  ```js
  import "@blueconduit/copper/css/copper.css";
  ```

## 1.1.1

### Patch Changes

- 5873882: Fix alignment and height of toast notifs
- 403b6e4: Add validation styles for number text inputs

## 1.1.0

### Minor Changes

- bc876be: Add a loading state to copper and empty state to data tables

## 1.0.8

### Patch Changes

- 726ce36: Moving to pnpm and changesets

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.7 (2022-03-08)

### Bug Fixes

- text input name prop has correct value ([fc45570](https://github.com/BlueConduit/copper/commit/fc4557025f791263c3c6ecfd57ab600d694e8f03))

## 1.0.6 (2022-03-08)

### Bug Fixes

- fix the name prop on TextInput components ([24b459b](https://github.com/BlueConduit/copper/commit/24b459bf93c0138cf060b7269ec9b300facd6285))

## 1.0.5 (2022-02-22)

**Note:** Version bump only for package @blueconduit/copper

## 1.0.4 (2022-02-08)

### Bug Fixes

- actually exports modal component ([c52e3c4](https://github.com/BlueConduit/copper/commit/c52e3c4c0a458beaabc60c84e4627489fc45dc64))

## 1.0.3 (2022-02-04)

**Note:** Version bump only for package @blueconduit/copper

## 1.0.2 (2022-02-04)

**Note:** Version bump only for package @blueconduit/copper
