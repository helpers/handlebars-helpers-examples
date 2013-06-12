# Embed Helper

This layout is used to demonstrate how paths will be constructed in 
different contexts, and using different src-dest arrangements.


# Embed Helper


## Glob files into one "embed"
``` css
.sidebar {
  font-size: 12px;
  background: 'blue';
}

.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: 20px;
  color: #c09853;
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  border-radius: 4px;
}

.alert h4 {
  margin-top: 0;
  color: inherit;
}

.alert hr {
  border-top-color: #f8e5be;
}

.alert > a,
.alert > p > a {
  font-weight: 500;
  color: #a47e3c;
}
```



## Add extension automatically
Extension automatically added when no value is given for second parameter.

``` 
title: Fodder 
description: different file formats for testing helpers. This file has no extension.
```

``` css
.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: 20px;
  color: #c09853;
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  border-radius: 4px;
}

.alert h4 {
  margin-top: 0;
  color: inherit;
}

.alert hr {
  border-top-color: #f8e5be;
}

.alert > a,
.alert > p > a {
  font-weight: 500;
  color: #a47e3c;
}
```

``` hbs
---
title: Fodder 
description: different file formats for testing helpers
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </body>
</html>
```

``` html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fodder</title>
</head>
<body>
  <h1>Fodder</h1>
  <p>different file formats for testing helpers</p>
</body>
</html>

```

``` js
// Assemble Engine Loader
var EngineLoader = options.EngineLoader = assemble.EngineLoader(options);
var engine = null;
EngineLoader.getEngine(function(err, results) {
  if(err) {
    console.log(err);
    return;
  }
  engine = options.engine = results;
});

Handlebars.registerHelper "copy", copy

  Handlebars.registerHelper "dir", dir
  Handlebars.registerHelper "include", include
  Handlebars.registerHelper "expMappingYAML", expMappingYAML
  Handlebars.registerHelper "expMappingJSON", expMappingJSON
  Handlebars.registerHelper "glob", glob
  Handlebars.registerHelper "extract", extract
  Handlebars.registerHelper "chapter", chapter
     Handlebars.registerHelper "toc", toc
  Handlebars.registerHelper "defineSection", defineSection
  Handlebars.registerHelper "renderSection", renderSection
  Handlebars.registerHelper "listHelpers", listHelpers
  Handlebars.registerHelper "partial", partial
```

``` json
{"title": "Fodder",
"description": "different file formats for testing helpers"}
```

``` less
@line-height-base: 20px;
@state-warning-text: #900;
@state-warning-border: #900;
@state-warning-background: #900;
@border-radius-base: 5px;

.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: @line-height-base;
  color: @state-warning-text;
  background-color: @state-warning-background;
  border: 1px solid @state-warning-border;
  border-radius: @border-radius-base;

  // Headings for larger alerts
  h4 {
    margin-top: 0;
    // Specified for the h4 to prevent conflicts of changing @headingsColor
    color: inherit;
  }
  // Match the hr to the border of the alert
  hr {
    border-top-color: darken(@state-warning-border, 5%);
  }
  // Inherit color for immediate links and bolden them some
  > a,
  > p > a {
    font-weight: 500;
    color: darken(@state-warning-text, 10%);
  }
}
```

``` md
#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
&#x60;&#x60;&#x60; html
[{{link.text}}]({{link.url}})
&#x60;&#x60;&#x60;
Example:
&#x60;&#x60;&#x60; handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

&#x60;&#x60;&#x60;
Renders to: 
&#x60;&#x60;&#x60; html
<a href="../../dist/assets/css/styles.css"></a> 
&#x60;&#x60;&#x60;
```
 
``` txt
title: Fodder 
description: different file formats for testing helpers
```

``` yml
title: Fodder 
description: different file formats for testing helpers
```



## Override default extension
"Force" the extension to appear next to code "fences".

``` less
.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: 20px;
  color: #c09853;
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  border-radius: 4px;
}

.alert h4 {
  margin-top: 0;
  color: inherit;
}

.alert hr {
  border-top-color: #f8e5be;
}

.alert > a,
.alert > p > a {
  font-weight: 500;
  color: #a47e3c;
}
```

``` zzz
---
title: Fodder 
description: different file formats for testing helpers
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </body>
</html>
```

``` bbb
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fodder</title>
</head>
<body>
  <h1>Fodder</h1>
  <p>different file formats for testing helpers</p>
</body>
</html>

```

``` javascript
// Assemble Engine Loader
var EngineLoader = options.EngineLoader = assemble.EngineLoader(options);
var engine = null;
EngineLoader.getEngine(function(err, results) {
  if(err) {
    console.log(err);
    return;
  }
  engine = options.engine = results;
});

Handlebars.registerHelper "copy", copy

  Handlebars.registerHelper "dir", dir
  Handlebars.registerHelper "include", include
  Handlebars.registerHelper "expMappingYAML", expMappingYAML
  Handlebars.registerHelper "expMappingJSON", expMappingJSON
  Handlebars.registerHelper "glob", glob
  Handlebars.registerHelper "extract", extract
  Handlebars.registerHelper "chapter", chapter
     Handlebars.registerHelper "toc", toc
  Handlebars.registerHelper "defineSection", defineSection
  Handlebars.registerHelper "renderSection", renderSection
  Handlebars.registerHelper "listHelpers", listHelpers
  Handlebars.registerHelper "partial", partial
```

``` json
{"title": "Fodder",
"description": "different file formats for testing helpers"}
```

``` css
@line-height-base: 20px;
@state-warning-text: #900;
@state-warning-border: #900;
@state-warning-background: #900;
@border-radius-base: 5px;

.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: @line-height-base;
  color: @state-warning-text;
  background-color: @state-warning-background;
  border: 1px solid @state-warning-border;
  border-radius: @border-radius-base;

  // Headings for larger alerts
  h4 {
    margin-top: 0;
    // Specified for the h4 to prevent conflicts of changing @headingsColor
    color: inherit;
  }
  // Match the hr to the border of the alert
  hr {
    border-top-color: darken(@state-warning-border, 5%);
  }
  // Inherit color for immediate links and bolden them some
  > a,
  > p > a {
    font-weight: 500;
    color: darken(@state-warning-text, 10%);
  }
}
```

``` markdown
#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
&#x60;&#x60;&#x60; html
[{{link.text}}]({{link.url}})
&#x60;&#x60;&#x60;
Example:
&#x60;&#x60;&#x60; handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

&#x60;&#x60;&#x60;
Renders to: 
&#x60;&#x60;&#x60; html
<a href="../../dist/assets/css/styles.css"></a> 
&#x60;&#x60;&#x60;
```
 
``` txt
title: Fodder 
description: different file formats for testing helpers
```

``` yaml
title: Fodder 
description: different file formats for testing helpers
```




---

(begin path info...)

### "{{#each pages}}" Links

#### relative path
../assets


[authors](../assets) 
[each-pages](../assets) 
[opt](../assets) 
[roadmap](../assets) 
[travis](../assets) 
[collections](../assets) 
[copy](../assets) 
[glob-extensions](../assets) 
[glob-sortby-content](../assets) 
[glob-sortby-index](../assets) 
[glob-sortby-none](../assets) 
[glob-sortby-path](../assets) 
[glob](../assets) 
[include](../assets) 
[less](../assets) 
[switch](../assets) 
[expand](../assets) 
[inspect](../assets) 
[property](../assets) 
[stringify](../assets) 
[value](../assets) 
[basename](../assets) 
[dirname](../assets) 
[extname](../assets) 
[filename](../assets) 
[relative](../assets) 
[embed](../assets) 
[jsfiddle](../assets) 
[toc](../assets) 
[hyphenate](../assets) 
[occurences](../assets) 
[replace](../assets) 
[url-resolve](../assets)  


### {{#each pages}} "this" context

#### authors.md
this.dirname:  dist/paths
this.filename: authors.md
this.pagename: authors.md
this.basename: authors
this.extname:  
this.ext:      

#### each-pages.md
this.dirname:  dist/paths
this.filename: each-pages.md
this.pagename: each-pages.md
this.basename: each-pages
this.extname:  
this.ext:      

#### opt.md
this.dirname:  dist/paths
this.filename: opt.md
this.pagename: opt.md
this.basename: opt
this.extname:  
this.ext:      

#### roadmap.md
this.dirname:  dist/paths
this.filename: roadmap.md
this.pagename: roadmap.md
this.basename: roadmap
this.extname:  
this.ext:      

#### travis.md
this.dirname:  dist/paths
this.filename: travis.md
this.pagename: travis.md
this.basename: travis
this.extname:  
this.ext:      

#### collections.md
this.dirname:  dist/paths
this.filename: collections.md
this.pagename: collections.md
this.basename: collections
this.extname:  
this.ext:      

#### copy.md
this.dirname:  dist/paths
this.filename: copy.md
this.pagename: copy.md
this.basename: copy
this.extname:  
this.ext:      

#### glob-extensions.md
this.dirname:  dist/paths
this.filename: glob-extensions.md
this.pagename: glob-extensions.md
this.basename: glob-extensions
this.extname:  
this.ext:      

#### glob-sortby-content.md
this.dirname:  dist/paths
this.filename: glob-sortby-content.md
this.pagename: glob-sortby-content.md
this.basename: glob-sortby-content
this.extname:  
this.ext:      

#### glob-sortby-index.md
this.dirname:  dist/paths
this.filename: glob-sortby-index.md
this.pagename: glob-sortby-index.md
this.basename: glob-sortby-index
this.extname:  
this.ext:      

#### glob-sortby-none.md
this.dirname:  dist/paths
this.filename: glob-sortby-none.md
this.pagename: glob-sortby-none.md
this.basename: glob-sortby-none
this.extname:  
this.ext:      

#### glob-sortby-path.md
this.dirname:  dist/paths
this.filename: glob-sortby-path.md
this.pagename: glob-sortby-path.md
this.basename: glob-sortby-path
this.extname:  
this.ext:      

#### glob.md
this.dirname:  dist/paths
this.filename: glob.md
this.pagename: glob.md
this.basename: glob
this.extname:  
this.ext:      

#### include.md
this.dirname:  dist/paths
this.filename: include.md
this.pagename: include.md
this.basename: include
this.extname:  
this.ext:      

#### less.md
this.dirname:  dist/paths
this.filename: less.md
this.pagename: less.md
this.basename: less
this.extname:  
this.ext:      

#### switch.md
this.dirname:  dist/paths
this.filename: switch.md
this.pagename: switch.md
this.basename: switch
this.extname:  
this.ext:      

#### expand.md
this.dirname:  dist/paths
this.filename: expand.md
this.pagename: expand.md
this.basename: expand
this.extname:  
this.ext:      

#### inspect.md
this.dirname:  dist/paths
this.filename: inspect.md
this.pagename: inspect.md
this.basename: inspect
this.extname:  
this.ext:      

#### property.md
this.dirname:  dist/paths
this.filename: property.md
this.pagename: property.md
this.basename: property
this.extname:  
this.ext:      

#### stringify.md
this.dirname:  dist/paths
this.filename: stringify.md
this.pagename: stringify.md
this.basename: stringify
this.extname:  
this.ext:      

#### value.md
this.dirname:  dist/paths
this.filename: value.md
this.pagename: value.md
this.basename: value
this.extname:  
this.ext:      

#### basename.md
this.dirname:  dist/paths
this.filename: basename.md
this.pagename: basename.md
this.basename: basename
this.extname:  
this.ext:      

#### dirname.md
this.dirname:  dist/paths
this.filename: dirname.md
this.pagename: dirname.md
this.basename: dirname
this.extname:  
this.ext:      

#### extname.md
this.dirname:  dist/paths
this.filename: extname.md
this.pagename: extname.md
this.basename: extname
this.extname:  
this.ext:      

#### filename.md
this.dirname:  dist/paths
this.filename: filename.md
this.pagename: filename.md
this.basename: filename
this.extname:  
this.ext:      

#### relative.md
this.dirname:  dist/paths
this.filename: relative.md
this.pagename: relative.md
this.basename: relative
this.extname:  
this.ext:      

#### embed.md
this.dirname:  dist/paths
this.filename: embed.md
this.pagename: embed.md
this.basename: embed
this.extname:  
this.ext:      

#### jsfiddle.md
this.dirname:  dist/paths
this.filename: jsfiddle.md
this.pagename: jsfiddle.md
this.basename: jsfiddle
this.extname:  
this.ext:      

#### toc.md
this.dirname:  dist/paths
this.filename: toc.md
this.pagename: toc.md
this.basename: toc
this.extname:  
this.ext:      

#### hyphenate.md
this.dirname:  dist/paths
this.filename: hyphenate.md
this.pagename: hyphenate.md
this.basename: hyphenate
this.extname:  
this.ext:      

#### occurences.md
this.dirname:  dist/paths
this.filename: occurences.md
this.pagename: occurences.md
this.basename: occurences
this.extname:  
this.ext:      

#### replace.md
this.dirname:  dist/paths
this.filename: replace.md
this.pagename: replace.md
this.basename: replace
this.extname:  
this.ext:      

#### url-resolve.md
this.dirname:  dist/paths
this.filename: url-resolve.md
this.pagename: url-resolve.md
this.basename: url-resolve
this.extname:  
this.ext:      



### {{#each pages}}

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      

#### embed.md
page.dirname:  dist/paths
page.filename: embed.md
page.pagename: embed.md
page.basename: embed
page.extname:  
page.ext:      



### {{#each pages}} "page" context

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           

#### embed.md
dirname:       dist/paths
filename:      embed.md
pagename:      embed.md
basename:      embed
extname:       
ext:           


