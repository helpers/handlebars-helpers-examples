# glob.md output

# README


## Single file explicit
#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
``` html
[{{link.text}}]({{link.url}})
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```




## Debug Info

``` json
{ dirname: 'dist/inspect',
  filename: 'glob.md',
  pageName: 'glob.md',
  pagename: 'glob.md',
  basename: 'glob',
  src: 'src/templates/content/glob.md.hbs',
  dest: 'dist/inspect/glob.md',
  assets: '../assets',
  ext: '',
  extname: '',
  page: 
   { [Function]
     [length]: 2,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } },
  data: {} }
```

