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

