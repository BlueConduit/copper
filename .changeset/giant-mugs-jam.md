---
"@blueconduit/copper-vue": major
---

Bump copper dependency and update how styles are imported

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
