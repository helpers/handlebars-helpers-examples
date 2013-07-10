# url-parse.md output

This layout is used to demonstrate how paths will be constructed in 
different contexts, and using different src-dest arrangements.

## URL Parse 

### default
Take a URL string, and return an object.

Example: 

``` html
{{url_parse "http://example.com/one"}} 
```
Renders to:
``` html
{
  "protocol": "http:",
  "slashes": true,
  "auth": null,
  "host": "example.com",
  "port": null,
  "hostname": "example.com",
  "hash": null,
  "search": null,
  "query": null,
  "pathname": "/one",
  "path": "/one",
  "href": "http://example.com/one"
} 
```

### second param `yaml`

``` html
{{url_parse "http://foo.com/bar/baz?key=value" "yaml"}}
```
Renders to:
``` html
protocol: "http:"
slashes: true
auth: null
host: "foo.com"
port: null
hostname: "foo.com"
hash: null
search: "?key=value"
query: "key=value"
pathname: "/bar/baz"
path: "/bar/baz?key=value"
href: "http://foo.com/bar/baz?key=value"
parse: 
format: 
resolve: 
resolveObject: 
parseHost: 
```

### second param `json`
``` html
{{url_parse "http://foo.com/bar/baz?key=value" "json"}}
```
Renders to:
``` html
{"protocol":"http:","slashes":true,"auth":null,"host":"foo.com","port":null,"hostname":"foo.com","hash":null,"search":"?key=value","query":"key=value","pathname":"/bar/baz","path":"/bar/baz?key=value","href":"http://foo.com/bar/baz?key=value"}
```

### querystring
Pass true as the third argument to also parse the query string using the querystring module. Defaults to false.

Pass true as the third argument to treat `//foo/bar` as `{ host: 'foo', pathname: '/bar' }` rather than `{ pathname: '//foo/bar' }`. Defaults to false.

``` html
{{url_parse "http://user:pass@host.com:8080/p/a/t/h?query=string#hash" "json" "true"}}
```

Renders to:
``` html
{"protocol":"http:","slashes":true,"auth":"user:pass","host":"host.com:8080","port":"8080","hostname":"host.com","hash":"#hash","search":"?query=string","query":"query=string","pathname":"/p/a/t/h","path":"/p/a/t/h?query=string","href":"http://user:pass@host.com:8080/p/a/t/h?query=string#hash"}
```



---

(begin path info...)

### "{{#each pages}}" Links

#### relative path
../assets


[collections-categories](../assets) 
[collections-tags](../assets) 
[each-pages](../assets) 
[embed](../assets) 
[jsfiddle](../assets) 
[collections](../assets) 
[copy](../assets) 
[extract](../assets) 
[glob-extensions](../assets) 
[glob-sortby-content](../assets) 
[glob-sortby-index](../assets) 
[glob-sortby-none](../assets) 
[glob-sortby-path](../assets) 
[glob](../assets) 
[include](../assets) 
[listDocumented](../assets) 
[listHelpers](../assets) 
[match](../assets) 
[toc](../assets) 
[undocumented](../assets) 
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
[authors](../assets) 
[gitlog](../assets) 
[opt](../assets) 
[roadmap](../assets) 
[travis](../assets) 
[hyphenate](../assets) 
[occurences](../assets) 
[replace](../assets) 
[url-parse](../assets) 
[url-resolve](../assets)  


### {{#each pages}} "this" context

#### collections-categories.md
this.dirname:  dest/paths
this.filename: collections-categories.md
this.pagename: collections-categories.md
this.basename: collections-categories
this.extname:  
this.ext:      

#### collections-tags.md
this.dirname:  dest/paths
this.filename: collections-tags.md
this.pagename: collections-tags.md
this.basename: collections-tags
this.extname:  
this.ext:      

#### each-pages.md
this.dirname:  dest/paths
this.filename: each-pages.md
this.pagename: each-pages.md
this.basename: each-pages
this.extname:  
this.ext:      

#### embed.md
this.dirname:  dest/paths
this.filename: embed.md
this.pagename: embed.md
this.basename: embed
this.extname:  
this.ext:      

#### jsfiddle.md
this.dirname:  dest/paths
this.filename: jsfiddle.md
this.pagename: jsfiddle.md
this.basename: jsfiddle
this.extname:  
this.ext:      

#### collections.md
this.dirname:  dest/paths
this.filename: collections.md
this.pagename: collections.md
this.basename: collections
this.extname:  
this.ext:      

#### copy.md
this.dirname:  dest/paths
this.filename: copy.md
this.pagename: copy.md
this.basename: copy
this.extname:  
this.ext:      

#### extract.md
this.dirname:  dest/paths
this.filename: extract.md
this.pagename: extract.md
this.basename: extract
this.extname:  
this.ext:      

#### glob-extensions.md
this.dirname:  dest/paths
this.filename: glob-extensions.md
this.pagename: glob-extensions.md
this.basename: glob-extensions
this.extname:  
this.ext:      

#### glob-sortby-content.md
this.dirname:  dest/paths
this.filename: glob-sortby-content.md
this.pagename: glob-sortby-content.md
this.basename: glob-sortby-content
this.extname:  
this.ext:      

#### glob-sortby-index.md
this.dirname:  dest/paths
this.filename: glob-sortby-index.md
this.pagename: glob-sortby-index.md
this.basename: glob-sortby-index
this.extname:  
this.ext:      

#### glob-sortby-none.md
this.dirname:  dest/paths
this.filename: glob-sortby-none.md
this.pagename: glob-sortby-none.md
this.basename: glob-sortby-none
this.extname:  
this.ext:      

#### glob-sortby-path.md
this.dirname:  dest/paths
this.filename: glob-sortby-path.md
this.pagename: glob-sortby-path.md
this.basename: glob-sortby-path
this.extname:  
this.ext:      

#### glob.md
this.dirname:  dest/paths
this.filename: glob.md
this.pagename: glob.md
this.basename: glob
this.extname:  
this.ext:      

#### include.md
this.dirname:  dest/paths
this.filename: include.md
this.pagename: include.md
this.basename: include
this.extname:  
this.ext:      

#### listDocumented.md
this.dirname:  dest/paths
this.filename: listDocumented.md
this.pagename: listDocumented.md
this.basename: listDocumented
this.extname:  
this.ext:      

#### listHelpers.md
this.dirname:  dest/paths
this.filename: listHelpers.md
this.pagename: listHelpers.md
this.basename: listHelpers
this.extname:  
this.ext:      

#### match.md
this.dirname:  dest/paths
this.filename: match.md
this.pagename: match.md
this.basename: match
this.extname:  
this.ext:      

#### toc.md
this.dirname:  dest/paths
this.filename: toc.md
this.pagename: toc.md
this.basename: toc
this.extname:  
this.ext:      

#### undocumented.md
this.dirname:  dest/paths
this.filename: undocumented.md
this.pagename: undocumented.md
this.basename: undocumented
this.extname:  
this.ext:      

#### less.md
this.dirname:  dest/paths
this.filename: less.md
this.pagename: less.md
this.basename: less
this.extname:  
this.ext:      

#### switch.md
this.dirname:  dest/paths
this.filename: switch.md
this.pagename: switch.md
this.basename: switch
this.extname:  
this.ext:      

#### expand.md
this.dirname:  dest/paths
this.filename: expand.md
this.pagename: expand.md
this.basename: expand
this.extname:  
this.ext:      

#### inspect.md
this.dirname:  dest/paths
this.filename: inspect.md
this.pagename: inspect.md
this.basename: inspect
this.extname:  
this.ext:      

#### property.md
this.dirname:  dest/paths
this.filename: property.md
this.pagename: property.md
this.basename: property
this.extname:  
this.ext:      

#### stringify.md
this.dirname:  dest/paths
this.filename: stringify.md
this.pagename: stringify.md
this.basename: stringify
this.extname:  
this.ext:      

#### value.md
this.dirname:  dest/paths
this.filename: value.md
this.pagename: value.md
this.basename: value
this.extname:  
this.ext:      

#### basename.md
this.dirname:  dest/paths
this.filename: basename.md
this.pagename: basename.md
this.basename: basename
this.extname:  
this.ext:      

#### dirname.md
this.dirname:  dest/paths
this.filename: dirname.md
this.pagename: dirname.md
this.basename: dirname
this.extname:  
this.ext:      

#### extname.md
this.dirname:  dest/paths
this.filename: extname.md
this.pagename: extname.md
this.basename: extname
this.extname:  
this.ext:      

#### filename.md
this.dirname:  dest/paths
this.filename: filename.md
this.pagename: filename.md
this.basename: filename
this.extname:  
this.ext:      

#### relative.md
this.dirname:  dest/paths
this.filename: relative.md
this.pagename: relative.md
this.basename: relative
this.extname:  
this.ext:      

#### authors.md
this.dirname:  dest/paths
this.filename: authors.md
this.pagename: authors.md
this.basename: authors
this.extname:  
this.ext:      

#### gitlog.md
this.dirname:  dest/paths
this.filename: gitlog.md
this.pagename: gitlog.md
this.basename: gitlog
this.extname:  
this.ext:      

#### opt.md
this.dirname:  dest/paths
this.filename: opt.md
this.pagename: opt.md
this.basename: opt
this.extname:  
this.ext:      

#### roadmap.md
this.dirname:  dest/paths
this.filename: roadmap.md
this.pagename: roadmap.md
this.basename: roadmap
this.extname:  
this.ext:      

#### travis.md
this.dirname:  dest/paths
this.filename: travis.md
this.pagename: travis.md
this.basename: travis
this.extname:  
this.ext:      

#### hyphenate.md
this.dirname:  dest/paths
this.filename: hyphenate.md
this.pagename: hyphenate.md
this.basename: hyphenate
this.extname:  
this.ext:      

#### occurences.md
this.dirname:  dest/paths
this.filename: occurences.md
this.pagename: occurences.md
this.basename: occurences
this.extname:  
this.ext:      

#### replace.md
this.dirname:  dest/paths
this.filename: replace.md
this.pagename: replace.md
this.basename: replace
this.extname:  
this.ext:      

#### url-parse.md
this.dirname:  dest/paths
this.filename: url-parse.md
this.pagename: url-parse.md
this.basename: url-parse
this.extname:  
this.ext:      

#### url-resolve.md
this.dirname:  dest/paths
this.filename: url-resolve.md
this.pagename: url-resolve.md
this.basename: url-resolve
this.extname:  
this.ext:      



### {{#each pages}}

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      

#### url-parse.md
page.dirname:  dest/paths
page.filename: url-parse.md
page.pagename: url-parse.md
page.basename: url-parse
page.extname:  
page.ext:      



### {{#each pages}} "page" context

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           

#### url-parse.md
dirname:       dest/paths
filename:      url-parse.md
pagename:      url-parse.md
basename:      url-parse
extname:       
ext:           


