# copper

<a href="https://www.npmjs.com/package/@blueconduit/copper"><img alt="NPM Status" src="https://img.shields.io/npm/v/@blueconduit/copper?color=%235ca3ea"></a>

Copper's styles are defined in the `src/` directory.

The root file is `src/copper.scss`. It essentially imports all the styles into one place, and is the file that Gulp compiles from Sass into a CSS file.

## Installing in another project

```
npm install @blueconduit/copper
```

## Folder structure

Our styles follow the ITCSS structure. More to come here in the future, but this is the spark notes explanation.

- 01_settings: Contains fundamental values, called Design Tokens, that are reused throughout the styles. These are things like colors, typefaces, spacing values, etc.
- 02_tools: A place for Sass [mixins](https://sass-lang.com/documentation/at-rules/mixin) and [functions](https://sass-lang.com/documentation/at-rules/function), think reusable scripts we can call to create our styles with
- 03_normalize: Simply a place to add our [Normalizing CSS](https://necolas.github.io/normalize.css/) styles, and the first actual styling rules appear here.
- 04_elements: Styling for entire elements. Typography rules are what's here right now.
- 05_layout: Classes built to help layout the UIs we make with Copper.
- 06_components: Styles specifically intended for Copper components
- 07_overrides: Classes that should take precedence over others, will probably be mostly spacing and positioning classes

## Build process

We use Gulp.js to compile our Sass styles into CSS. To run the Gulp build process:

```
npm run build
```

This will compile the Sass into `dist/css/copper.css`, and it will also minify that new file and save it at `dist/css/copper.min.css`.

Either CSS file can be used to get Copper's styles into your project.

## Publishing new package version

Publishing a new version of the package is simple if you have your npm authorization setup as noted in the parent README. This project's `package.json` file is setup to publish whatever files are in the `dist/` directory. Follow these steps when publishing a new version:

- Run `npm run build` to make sure your latest changes are compiled and placed into the local `dist/` directory
- Increment the version number in `package.json` appropriately. [Follow SEMVER versioning guidelines](https://semver.org/).
- Run `npm publish`

This process is simple, but brittle. Look for this to change as this package matures.
