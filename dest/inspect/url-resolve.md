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


## Debug Info

``` json
{ dirname: 'dest/inspect',
  filename: 'url-resolve.md',
  pageName: 'url-resolve.md',
  pagename: 'url-resolve.md',
  basename: 'url-resolve',
  src: 'src/templates/url/url-resolve.md.hbs',
  dest: 'dest/inspect/url-resolve.md',
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

