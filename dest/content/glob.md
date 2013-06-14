

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
<a href="{{relative "src" "output"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../output/assets/css/styles.css"></a> 
```


