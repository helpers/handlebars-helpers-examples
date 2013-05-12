# helper-lib-examples [![Build Status](https://secure.travis-ci.org/assemble/helper-lib-examples.png?branch=master)](http://travis-ci.org/assemble/helper-lib-examples)

> This project demonstrates the amazing things you can accomplish with helpers from helper-lib, and [assemble](https://github.com/assemble/assemble).


## Getting Started

* **[Download this project][download]** and unzip it into a new folder.  
* In the project folder, run `npm install` to install [Assemble][assemble], [Grunt](http://gruntjs.com/) and any other dependencies.
* Once the dependencies are installed you may run `grunt assemble` to build the example project.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile][gruntfile], as well as install and use Grunt plugins. 


## The helpers

[helper-lib](https://github.com/assemble/helper-lib) is the default helper library for [Assemble][assemble], a Grunt plugin that makes it dead simple to build modular sites and components from reusable **templates** and **data**. The helpers in this project can be used with our without Assemble.

If you want to see the types of helpers that are included, you can read over the Table of Contents on the helper-lib repo, but the fastest way to get acquainted with the helpers is to pull down this repo, install the dependencies (`npm install`), and run `grunt build`. Then dive right into the `./src` and `./dest` folders to look around. 


## The "assemble" task

### Overview
In the project's Gruntfile, the example `assemble` task is pre-loaded with paths and options following standard Grunt.js conventions:

```js
grunt.initConfig({
  // The "assemble" task
  assemble: {
    examples: {
      options: {
        flatten: true,
        assets: '<%= assemble.helper-lib-examples.dest %>/assets',
        layout: 'src/templates/layouts/default.hbs',
        partials: 'src/templates/partials/*.hbs',
        data: 'src/data/*.{json,yml}'
      },
      src:  'src/templates/pages/*.hbs',
      dest: 'dist/'
    }
  }
})
```

#### YAML Front-Matter
YAML front-matter is optionally used at the top of each page to define metadata for the page. In order for YAML front-matter to be processed, it must be the first thing at the top of the page, and it must be wrapped properly, with three dashes above and three below:

``` yaml
---
title: YAML Front-Matter Example
---

<h1> {{ title }} </h1>
Page content here ...
```

### Options
Visit [Assemble's documentation][wiki] to learn about the available task and target options as well as how to configure them. Also, if are not yet familiar with Grunt.js, please consider visiting the Grunt documentation to learn more about [configuring tasks][configuring-tasks]. 

#### flatten
Type: `Boolean` (optional)
Default: `false`

Remove anything after (and including) the first "." in the destination path, then append this value. In other words, when they are are generated from different source folders this "flattens" them into the same destination directory. See [building the files object dynamically][files-object] for more information on files formats.


#### layout
Type: `String` (optional)
Default: `undefined`

If set, this defines the layout file to use for that [target][tasks-and-targets]. Unlike Jekyll, Assemble requires a file extension since you are not limited to using a single file type.

Learn more about [options.layouts][layouts]

#### partials
Type: `Object|Array` (optional)
Default: `undefined`

Specifies the Handlebars [partials][] files, or paths to the directories of files to be used. 

Learn more about [options.partials][partials]

#### assets
Type: `String` (optional)
Default: `undefined`

Used with the `\{{assets}}` variable to resolve the relative path from the _dest file_ to the _assets_ folder.


#### data
Type: `Object|Array` (optional)
Default: `src/data`

Retrieves data from any specified `JSON` and/or `YAML` files to populate the templates when rendered. Data gets passed through the `data` object to the options on the assemble task, then to the context in your templates. 

Learn more about [data][data]

### Usage Examples 

Here are some examples of how you can customize the Assemble task for different use cases. Visit the [assemble-examples][] repo to see more example projects.

```js
assemble: {
  // "global" task-level options
  options: {
    flatten: true
    data: 'src/data/global/**/*.{yml,json}' // "global" data
  },

  docs: {
    // target-level options
    options: {
      assets: 'dist/docs/assets',
      layout: 'templates/layouts/docs-layout.hbs'
      partials: [
        'templates/docs/partials/*.hbs',
        'templates/docs/snippets/*.hbs'
      ],
      data: 'src/data/docs/**/*.{yml,json}',
      ext: '.html'
    },
    'docs/': [
      'templates/docs/pages/**/*.md.hbs',
      'templates/docs/pages/**/*.hbs'
    ]
  },

  components: {
    options: {
      assets: 'dist/docs/assets',
      layout: 'templates/layouts/component-layout.hbs'
      partials: [
        'templates/docs/partials/*.hbs',
        'templates/docs/snippets/*.hbs'
      ],
      data: 'src/data/**/*.{yml,json}'
    },
    files: {
      // Here we build "partials" and "snippets" into pages
      // but we still specify these in options.partials since
      // some partials "pull in" other partials. 
      'docs/components/': [
        'templates/partials/**/*.hbs', 
        'templates/snippets/**/*.hbs'
      ]
    }
  },

  blog: {
    options: {
      assets: 'dist/blog/assets',
      layout: 'templates/layouts/blog-layout.hbs'
      partials: [
        'templates/blog/posts/*.md', // posts as partials
        'templates/blog/partials/*.hbs',
        'templates/blog/snippets/*.hbs'
      ],
      data: 'src/data/blog/**/*.{yml,json}'
    },
    src:  ['templates/blog/pages/**/*.md.hbs'], // markdown "templates"
    dest: 'dist/'
  },

  readme: {
    options: {
      data: 'path/to/readme.yml'
    },
    './': ['path/to/readme.md.hbs']
  },

  files_array: [
    { expand: true, flatten: true, cwd: 'path/to/templates', src: ['**/*.hbs'], dest: 'path/to/dest/', ext: '.md' }
  ] 
}
```

## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Use [Assemble][assemble] to build and maintain your gh-pages, blog or documentation. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 2013-05-12    v0.1.0    First commit. 
 

[download]: https://github.com/assemble/assemble-examples-basic/archive/master.zip
[assemble]: https://github.com/assemble/assemble/
[assemble-examples]: https://github.com/assemble/assemble-examples

[wiki]: https://github.com/assemble/assemble/wiki
[layouts]: https://github.com/assemble/assemble/wiki/layouts
[partials]: https://github.com/assemble/assemble/wiki/partials
[data]: https://github.com/assemble/assemble/wiki/data

[gruntfile]: http://gruntjs.com/sample-gruntfile
[configuring tasks]: http://gruntjs.com/configuring-tasks
[tasks-and-targets]: http://gruntjs.com/configuring-tasks#task-configuration-and-targets
[files-object]: http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically