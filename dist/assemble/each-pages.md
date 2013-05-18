# Pages Collection and Relative Helper

## Relative
Relative helper outside of the "each pages" block.

``` html
../assets
```

## Each Pages

``` html

From **../currentPage.dest**, to: **this.dest**: each-pages.md

```
``` html

From **../currentPage.dest**, to: **assets**: ../../../assets

```
``` html

From **../currentPage.dest**, to: **"dist/assets"**: ../assets

```
``` html

From **../currentPage.dest**, to: **"src/content"**: ../../src/content

```
