# Globbing helper



# Globbing helper


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
<a href="{{relative "src" "dest"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../assets/css/styles.css"></a> 
```




## Debug Info

``` json
{ title: 'Globbing helper',
  dirname: 'dest/inspect',
  filename: 'glob.md',
  pageName: 'glob.md',
  pagename: 'glob.md',
  basename: 'glob',
  src: 'src/templates/content/glob.md.hbs',
  dest: 'dest/inspect/glob.md',
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
  data: { title: 'Globbing helper' } }
```

