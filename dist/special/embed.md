
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
```

``` json
{"title": "Fodder",
"description": "different file formats for testing helpers"}
```

``` less
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
```

``` json
{"title": "Fodder",
"description": "different file formats for testing helpers"}
```

``` css
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

