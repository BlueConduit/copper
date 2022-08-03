---
"@blueconduit/copper": major
---

Change build process to include scss files

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
