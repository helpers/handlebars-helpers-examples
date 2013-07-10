# toc.md output

# README Table of Contents

# [helper-lib-examples [![Build Status](https://secure.travis-ci.org/assemble/helper-lib-examples.png?branch=master)](http://travis-ci.org/assemble/helper-lib-examples)](#helper-lib-examples [![Build Status](https://secure.travis-ci.org/assemble/helper-lib-examples.png?branch=master)](http://travis-ci.org/assemble/helper-lib-examples))
## [Getting Started](#Getting Started)
## [The helpers](#The helpers)
## [The "assemble" task](#The "assemble" task)
### [Overview](#Overview)
#### [YAML Front-Matter](#YAML Front-Matter)
### [Options](#Options)
#### [flatten](#flatten)
#### [layout](#layout)
#### [partials](#partials)
#### [assets](#assets)
#### [data](#data)
### [Usage Examples](#Usage Examples)
## [Authors](#Authors)
## [Contributing](#Contributing)
## [Release History](#Release History)



# Helpers

#### [{{embed}}](#{{embed}})
#### [{{gist}}](#{{gist}})
#### [{{jsfiddle}}](#{{jsfiddle}})
##### [Fiddle tabs](#Fiddle tabs)
#### [Fiddle skins](#Fiddle skins)
#### [{{first}}](#{{first}})
#### [{{withFirst}}](#{{withFirst}})
#### [{{last}}](#{{last}})
#### [{{withLast}}](#{{withLast}})
#### [{{after}}](#{{after}})
#### [{{withAfter}}](#{{withAfter}})
#### [{{before}}](#{{before}})
#### [{{withBefore}}](#{{withBefore}})
#### [{{join}}](#{{join}})
#### [{{sort}}](#{{sort}})
#### [{{withSort}}](#{{withSort}})
#### [{{length}}](#{{length}})
#### [{{lengthEqual}}](#{{lengthEqual}})
#### [{{empty}}](#{{empty}})
#### [{{any}}](#{{any}})
#### [{{inArray}}](#{{inArray}})
#### [{{eachIndex}}](#{{eachIndex}})
#### [{{eachProperty}}](#{{eachProperty}})
#### [{{if_eq}}](#{{if_eq}})
#### [{{isnt}}](#{{isnt}})
#### [{{or}}](#{{or}})
#### [{{and}}](#{{and}})
#### [{{unless_eq}}](#{{unless_eq}})
#### [{{if_gt}}](#{{if_gt}})
#### [{{gt}}](#{{gt}})
#### [{{unless_gt}}](#{{unless_gt}})
#### [{{if_gteq}}](#{{if_gteq}})
#### [{{gte}}](#{{gte}})
#### [{{unless_gteq}}](#{{unless_gteq}})
#### [{{lte}}](#{{lte}})
#### [{{unless_lt}}](#{{unless_lt}})
#### [{{unless_lteq}}](#{{unless_lteq}})
#### [{{formatDate}}](#{{formatDate}})
#### [{{now}}](#{{now}})
#### [{{timeago}}](#{{timeago}})
#### [{{include}}](#{{include}})
#### [{{glob}}](#{{glob}})
#### [{{copy}}](#{{copy}})
#### [{{blockquote}}](#{{blockquote}})
#### [{{timeline}}](#{{timeline}})
#### [{{exticon}}](#{{exticon}})
#### [{{ul}}](#{{ul}})
#### [{{ol}}](#{{ol}})
#### [{{br}}](#{{br}})
#### [{{ordinalize}}](#{{ordinalize}})
#### [{{debug}}](#{{debug}})
#### [{{expandJSON}}](#{{expandJSON}})
#### [{{expandYAML}}](#{{expandYAML}})
#### [{{md}}](#{{md}})
#### [{{markdown}}](#{{markdown}})
## [Post of the day](#Post of the day)
#### [{{add}}](#{{add}})
#### [{{subtract}}](#{{subtract}})
#### [{{divide}}](#{{divide}})
#### [{{multiply}}](#{{multiply}})
#### [{{floor}}](#{{floor}})
#### [{{ceil}}](#{{ceil}})
#### [{{round}}](#{{round}})
#### [{{sum}}](#{{sum}})
#### [{{noop}}](#{{noop}})
#### [{{toPrecision}}](#{{toPrecision}})
#### [{{toExponential}}](#{{toExponential}})
#### [{{toInt}}](#{{toInt}})
#### [{{toFloat}}](#{{toFloat}})
#### [{{toAbbr}}](#{{toAbbr}})
#### [{{addCommas}}](#{{addCommas}})
#### [{{relative}}](#{{relative}})
#### [{{extname}}](#{{extname}})
#### [{{dirname}}](#{{dirname}})
#### [{{authors}}](#{{authors}})
### [Travis CI](#Travis CI)
#### [{{travis}}](#{{travis}})
# [[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)](#[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib))
# [[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib)](#[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib))
#### [{{travis-badge}}](#{{travis-badge}})
#### [{{changelog}}](#{{changelog}})
#### [{{embed}}](#{{embed}})
### [README Helpers](#README Helpers)
#### [{{authors}}](#{{authors}})
### [Travis CI](#Travis CI)
#### [{{travis}}](#{{travis}})
# [[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)](#[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib))
# [[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib)](#[helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib))
#### [{{travis-badge}}](#{{travis-badge}})
#### [{{changelog}}](#{{changelog}})
#### [{{jsfiddle}}](#{{jsfiddle}})
##### [Fiddle tabs](#Fiddle tabs)
#### [Fiddle skins](#Fiddle skins)
#### [{{occurrences}}](#{{occurrences}})
#### [{{hyphenate}}](#{{hyphenate}})
#### [{{dashify}}](#{{dashify}})
#### [{{lowercase}}](#{{lowercase}})
#### [{{uppercase}}](#{{uppercase}})
#### [{{capitalizeFirst}}](#{{capitalizeFirst}})
#### [{{capitalizeEach}}](#{{capitalizeEach}})
#### [{{titleize}}](#{{titleize}})
#### [{{sentence}}](#{{sentence}})
#### [{{reverse}}](#{{reverse}})
#### [{{truncate}}](#{{truncate}})
#### [{{center}}](#{{center}})
#### [{{formatPhoneNumber}}](#{{formatPhoneNumber}})
#### [{{url_resolve}}](#{{url_resolve}})
#### [{{url_parse}}](#{{url_parse}})



## Debug Info

``` json
{ dirname: 'dest/inspect',
  filename: 'toc.md',
  pageName: 'toc.md',
  pagename: 'toc.md',
  basename: 'toc',
  src: 'src/templates/content/toc.md.hbs',
  dest: 'dest/inspect/toc.md',
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

