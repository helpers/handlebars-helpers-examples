# Embed Helper

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



## Debug Info

``` json
undefined
```

### {{#each pages}} Links
[each-pages.md](dist/inspect/each-pages.md)
[collections.md](dist/inspect/collections.md)
[less.md](dist/inspect/less.md)
[switch.md](dist/inspect/switch.md)
[copy.md](dist/inspect/copy.md)
[extract.md](dist/inspect/extract.md)
[glob-extensions.md](dist/inspect/glob-extensions.md)
[glob-sortby-content.md](dist/inspect/glob-sortby-content.md)
[glob-sortby-index.md](dist/inspect/glob-sortby-index.md)
[glob-sortby-none.md](dist/inspect/glob-sortby-none.md)
[glob-sortby-path.md](dist/inspect/glob-sortby-path.md)
[glob.md](dist/inspect/glob.md)
[include.md](dist/inspect/include.md)
[list-helpers.md](dist/inspect/list-helpers.md)
[match.md](dist/inspect/match.md)
[hightlight.md](dist/inspect/hightlight.md)
[expand.md](dist/inspect/expand.md)
[inspect.md](dist/inspect/inspect.md)
[json.md](dist/inspect/json.md)
[listprops.md](dist/inspect/listprops.md)
[pkg.md](dist/inspect/pkg.md)
[property.md](dist/inspect/property.md)
[stringify.md](dist/inspect/stringify.md)
[value.md](dist/inspect/value.md)
[absolute.md](dist/inspect/absolute.md)
[basename.md](dist/inspect/basename.md)
[directory.md](dist/inspect/directory.md)
[extname.md](dist/inspect/extname.md)
[filename.md](dist/inspect/filename.md)
[relative.md](dist/inspect/relative.md)
[authors.md](dist/inspect/authors.md)
[chapters.md](dist/inspect/chapters.md)
[embed.md](dist/inspect/embed.md)
[jsfiddle.md](dist/inspect/jsfiddle.md)
[roadmap.md](dist/inspect/roadmap.md)
[toc.md](dist/inspect/toc.md)
[travis.md](dist/inspect/travis.md)
[hyphenate.md](dist/inspect/hyphenate.md)
[occurences.md](dist/inspect/occurences.md)
[replace.md](dist/inspect/replace.md)



### "this"
this.dest:     dist\inspect\each-pages.md
this.absolute: 
this.dirname:  
this.filename: each-pages.md
this.pageName: 
this.basename: each-pages.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\collections.md
this.absolute: 
this.dirname:  
this.filename: collections.md
this.pageName: 
this.basename: collections.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\less.md
this.absolute: 
this.dirname:  
this.filename: less.md
this.pageName: 
this.basename: less.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\switch.md
this.absolute: 
this.dirname:  
this.filename: switch.md
this.pageName: 
this.basename: switch.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\copy.md
this.absolute: 
this.dirname:  
this.filename: copy.md
this.pageName: 
this.basename: copy.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\extract.md
this.absolute: 
this.dirname:  
this.filename: extract.md
this.pageName: 
this.basename: extract.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\glob-extensions.md
this.absolute: 
this.dirname:  
this.filename: glob-extensions.md
this.pageName: 
this.basename: glob-extensions.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\glob-sortby-content.md
this.absolute: 
this.dirname:  
this.filename: glob-sortby-content.md
this.pageName: 
this.basename: glob-sortby-content.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\glob-sortby-index.md
this.absolute: 
this.dirname:  
this.filename: glob-sortby-index.md
this.pageName: 
this.basename: glob-sortby-index.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\glob-sortby-none.md
this.absolute: 
this.dirname:  
this.filename: glob-sortby-none.md
this.pageName: 
this.basename: glob-sortby-none.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\glob-sortby-path.md
this.absolute: 
this.dirname:  
this.filename: glob-sortby-path.md
this.pageName: 
this.basename: glob-sortby-path.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\glob.md
this.absolute: 
this.dirname:  
this.filename: glob.md
this.pageName: 
this.basename: glob.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\include.md
this.absolute: 
this.dirname:  
this.filename: include.md
this.pageName: 
this.basename: include.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\list-helpers.md
this.absolute: 
this.dirname:  
this.filename: list-helpers.md
this.pageName: 
this.basename: list-helpers.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\match.md
this.absolute: 
this.dirname:  
this.filename: match.md
this.pageName: 
this.basename: match.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\hightlight.md
this.absolute: 
this.dirname:  
this.filename: hightlight.md
this.pageName: 
this.basename: hightlight.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\expand.md
this.absolute: 
this.dirname:  
this.filename: expand.md
this.pageName: 
this.basename: expand.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\inspect.md
this.absolute: 
this.dirname:  
this.filename: inspect.md
this.pageName: 
this.basename: inspect.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\json.md
this.absolute: 
this.dirname:  
this.filename: json.md
this.pageName: 
this.basename: json.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\listprops.md
this.absolute: 
this.dirname:  
this.filename: listprops.md
this.pageName: 
this.basename: listprops.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\pkg.md
this.absolute: 
this.dirname:  
this.filename: pkg.md
this.pageName: 
this.basename: pkg.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\property.md
this.absolute: 
this.dirname:  
this.filename: property.md
this.pageName: 
this.basename: property.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\stringify.md
this.absolute: 
this.dirname:  
this.filename: stringify.md
this.pageName: 
this.basename: stringify.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\value.md
this.absolute: 
this.dirname:  
this.filename: value.md
this.pageName: 
this.basename: value.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\absolute.md
this.absolute: 
this.dirname:  
this.filename: absolute.md
this.pageName: 
this.basename: absolute.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\basename.md
this.absolute: 
this.dirname:  
this.filename: basename.md
this.pageName: 
this.basename: basename.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\directory.md
this.absolute: 
this.dirname:  
this.filename: directory.md
this.pageName: 
this.basename: directory.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\extname.md
this.absolute: 
this.dirname:  
this.filename: extname.md
this.pageName: 
this.basename: extname.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\filename.md
this.absolute: 
this.dirname:  
this.filename: filename.md
this.pageName: 
this.basename: filename.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\relative.md
this.absolute: 
this.dirname:  
this.filename: relative.md
this.pageName: 
this.basename: relative.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\authors.md
this.absolute: 
this.dirname:  
this.filename: authors.md
this.pageName: 
this.basename: authors.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\chapters.md
this.absolute: 
this.dirname:  
this.filename: chapters.md
this.pageName: 
this.basename: chapters.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\embed.md
this.absolute: 
this.dirname:  
this.filename: embed.md
this.pageName: 
this.basename: embed.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\jsfiddle.md
this.absolute: 
this.dirname:  
this.filename: jsfiddle.md
this.pageName: 
this.basename: jsfiddle.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\roadmap.md
this.absolute: 
this.dirname:  
this.filename: roadmap.md
this.pageName: 
this.basename: roadmap.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\toc.md
this.absolute: 
this.dirname:  
this.filename: toc.md
this.pageName: 
this.basename: toc.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\travis.md
this.absolute: 
this.dirname:  
this.filename: travis.md
this.pageName: 
this.basename: travis.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\hyphenate.md
this.absolute: 
this.dirname:  
this.filename: hyphenate.md
this.pageName: 
this.basename: hyphenate.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\occurences.md
this.absolute: 
this.dirname:  
this.filename: occurences.md
this.pageName: 
this.basename: occurences.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           

### "this"
this.dest:     dist\inspect\replace.md
this.absolute: 
this.dirname:  
this.filename: replace.md
this.pageName: 
this.basename: replace.md
this.extname:  
this.ext:      

### "page"
page.dest:     
page.absolute: 
page.dirname:  
page.filename: 
page.pageName: 
page.basename: 
page.extname:  
page.ext:      

### "root"
dest:          
absolute:      
dirname:       
filename:      
pageName:      embed.md
basename:      
extname:       
ext:           


