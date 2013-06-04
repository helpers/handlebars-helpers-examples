# url-resolve.md output

# Node URL Helpers



## URL Resolve

``` html
<a href="{{url_resolve "http://example.com/one" "/two"}}"></a> 
```
Renders to:

``` html
<a href="http://example.com/two"></a> 
```

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


## Debug Info

``` json
{ dirname: 'dist/inspect',
  filename: 'url-resolve.md',
  pageName: 'url-resolve.md',
  pagename: 'url-resolve.md',
  basename: 'url-resolve',
  src: 'src/templates/url/url-resolve.md.hbs',
  dest: 'dist/inspect/url-resolve.md',
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

### "{{#each pages}}" Links


#### relative path
../assets


[each-pages](../assets)  
[travis](../assets)  
[collections](../assets)  
[less](../assets)  
[switch](../assets)  
[copy](../assets)  
[glob-extensions](../assets)  
[glob-sortby-content](../assets)  
[glob-sortby-index](../assets)  
[glob-sortby-none](../assets)  
[glob-sortby-path](../assets)  
[glob](../assets)  
[include](../assets)  
[hightlight](../assets)  
[expand](../assets)  
[inspect](../assets)  
[property](../assets)  
[stringify](../assets)  
[value](../assets)  
[absolute](../assets)  
[basename](../assets)  
[directory](../assets)  
[extname](../assets)  
[filename](../assets)  
[relative](../assets)  
[authors](../assets)  
[embed](../assets)  
[jsfiddle](../assets)  
[roadmap](../assets)  
[toc](../assets)  
[hyphenate](../assets)  
[occurences](../assets)  
[replace](../assets)  
[url-resolve](../assets)  


### {{#each pages}} "this" context

#### each-pages.md
this.dirname:  dist/inspect
this.filename: each-pages.md
this.pagename: each-pages.md
this.basename: each-pages
this.extname:  
this.ext:      

#### travis.md
this.dirname:  dist/inspect
this.filename: travis.md
this.pagename: travis.md
this.basename: travis
this.extname:  
this.ext:      

#### collections.md
this.dirname:  dist/inspect
this.filename: collections.md
this.pagename: collections.md
this.basename: collections
this.extname:  
this.ext:      

#### less.md
this.dirname:  dist/inspect
this.filename: less.md
this.pagename: less.md
this.basename: less
this.extname:  
this.ext:      

#### switch.md
this.dirname:  dist/inspect
this.filename: switch.md
this.pagename: switch.md
this.basename: switch
this.extname:  
this.ext:      

#### copy.md
this.dirname:  dist/inspect
this.filename: copy.md
this.pagename: copy.md
this.basename: copy
this.extname:  
this.ext:      

#### glob-extensions.md
this.dirname:  dist/inspect
this.filename: glob-extensions.md
this.pagename: glob-extensions.md
this.basename: glob-extensions
this.extname:  
this.ext:      

#### glob-sortby-content.md
this.dirname:  dist/inspect
this.filename: glob-sortby-content.md
this.pagename: glob-sortby-content.md
this.basename: glob-sortby-content
this.extname:  
this.ext:      

#### glob-sortby-index.md
this.dirname:  dist/inspect
this.filename: glob-sortby-index.md
this.pagename: glob-sortby-index.md
this.basename: glob-sortby-index
this.extname:  
this.ext:      

#### glob-sortby-none.md
this.dirname:  dist/inspect
this.filename: glob-sortby-none.md
this.pagename: glob-sortby-none.md
this.basename: glob-sortby-none
this.extname:  
this.ext:      

#### glob-sortby-path.md
this.dirname:  dist/inspect
this.filename: glob-sortby-path.md
this.pagename: glob-sortby-path.md
this.basename: glob-sortby-path
this.extname:  
this.ext:      

#### glob.md
this.dirname:  dist/inspect
this.filename: glob.md
this.pagename: glob.md
this.basename: glob
this.extname:  
this.ext:      

#### include.md
this.dirname:  dist/inspect
this.filename: include.md
this.pagename: include.md
this.basename: include
this.extname:  
this.ext:      

#### hightlight.md
this.dirname:  dist/inspect
this.filename: hightlight.md
this.pagename: hightlight.md
this.basename: hightlight
this.extname:  
this.ext:      

#### expand.md
this.dirname:  dist/inspect
this.filename: expand.md
this.pagename: expand.md
this.basename: expand
this.extname:  
this.ext:      

#### inspect.md
this.dirname:  dist/inspect
this.filename: inspect.md
this.pagename: inspect.md
this.basename: inspect
this.extname:  
this.ext:      

#### property.md
this.dirname:  dist/inspect
this.filename: property.md
this.pagename: property.md
this.basename: property
this.extname:  
this.ext:      

#### stringify.md
this.dirname:  dist/inspect
this.filename: stringify.md
this.pagename: stringify.md
this.basename: stringify
this.extname:  
this.ext:      

#### value.md
this.dirname:  dist/inspect
this.filename: value.md
this.pagename: value.md
this.basename: value
this.extname:  
this.ext:      

#### absolute.md
this.dirname:  dist/inspect
this.filename: absolute.md
this.pagename: absolute.md
this.basename: absolute
this.extname:  
this.ext:      

#### basename.md
this.dirname:  dist/inspect
this.filename: basename.md
this.pagename: basename.md
this.basename: basename
this.extname:  
this.ext:      

#### directory.md
this.dirname:  dist/inspect
this.filename: directory.md
this.pagename: directory.md
this.basename: directory
this.extname:  
this.ext:      

#### extname.md
this.dirname:  dist/inspect
this.filename: extname.md
this.pagename: extname.md
this.basename: extname
this.extname:  
this.ext:      

#### filename.md
this.dirname:  dist/inspect
this.filename: filename.md
this.pagename: filename.md
this.basename: filename
this.extname:  
this.ext:      

#### relative.md
this.dirname:  dist/inspect
this.filename: relative.md
this.pagename: relative.md
this.basename: relative
this.extname:  
this.ext:      

#### authors.md
this.dirname:  dist/inspect
this.filename: authors.md
this.pagename: authors.md
this.basename: authors
this.extname:  
this.ext:      

#### embed.md
this.dirname:  dist/inspect
this.filename: embed.md
this.pagename: embed.md
this.basename: embed
this.extname:  
this.ext:      

#### jsfiddle.md
this.dirname:  dist/inspect
this.filename: jsfiddle.md
this.pagename: jsfiddle.md
this.basename: jsfiddle
this.extname:  
this.ext:      

#### roadmap.md
this.dirname:  dist/inspect
this.filename: roadmap.md
this.pagename: roadmap.md
this.basename: roadmap
this.extname:  
this.ext:      

#### toc.md
this.dirname:  dist/inspect
this.filename: toc.md
this.pagename: toc.md
this.basename: toc
this.extname:  
this.ext:      

#### hyphenate.md
this.dirname:  dist/inspect
this.filename: hyphenate.md
this.pagename: hyphenate.md
this.basename: hyphenate
this.extname:  
this.ext:      

#### occurences.md
this.dirname:  dist/inspect
this.filename: occurences.md
this.pagename: occurences.md
this.basename: occurences
this.extname:  
this.ext:      

#### replace.md
this.dirname:  dist/inspect
this.filename: replace.md
this.pagename: replace.md
this.basename: replace
this.extname:  
this.ext:      

#### url-resolve.md
this.dirname:  dist/inspect
this.filename: url-resolve.md
this.pagename: url-resolve.md
this.basename: url-resolve
this.extname:  
this.ext:      


### {{#each pages}}

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      

#### url-resolve.md
page.dirname:  dist/inspect
page.filename: url-resolve.md
page.pagename: url-resolve.md
page.basename: url-resolve
page.extname:  
page.ext:      


### {{#each pages}} "page" context

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           

#### url-resolve.md
dirname:       dist/inspect
filename:      url-resolve.md
pagename:      url-resolve.md
basename:      url-resolve
extname:       
ext:           


