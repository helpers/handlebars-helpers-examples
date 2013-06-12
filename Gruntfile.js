/*
 * helper-lib-examples
 * https://github.com/assemble/helper-lib-examples
 *
 * Copyright (c) 2013 assemble
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        flatten: true,
        data: 'src/data/*.{json,yml}',
        partials: 'src/templates/partials/*.hbs',
        assets: 'output/assets'
      },
      pages: {
        options: {
          layout: 'src/templates/layouts/default-layout.hbs',
        },
        src:  'src/templates/pages/*.hbs',
        dest: 'output/'
      },

      helpers: {
        options: {
          ext: '',
          // Example custom variables, for the {{travis}} helper
          travis: {
            name: 'Assemble',
            branch: 'wip'
          }
        },
        files: [
          { src: ['src/templates/collections/*.md.hbs'], dest: 'output/collections/' },
          { src: ['src/templates/converters/*.md.hbs'],  dest: 'output/converters/' },
          { src: ['src/templates/content/*.md.hbs'],     dest: 'output/content/' },
          { src: ['src/templates/logging/*.md.hbs'],     dest: 'output/logging/'},
          { src: ['src/templates/objects/*.md.hbs'],     dest: 'output/objects/'},
          { src: ['src/templates/path/*.md.hbs'],        dest: 'output/path/'},
          { src: ['src/templates/special/*.md.hbs'],     dest: 'output/special/'},
          { src: ['src/templates/strings/*.md.hbs'],     dest: 'output/strings/' },
          { src: ['src/templates/url/*.md.hbs'],         dest: 'output/url/' }
        ]
      },
      html: {
        options: {
          layout: 'src/templates/layouts/default-layout.hbs'
        },
        files: {
          'output/converters/html/': ['src/templates/converters/*.hbs','!src/templates/converters/*.md.hbs'],
          'output/content/html/':    ['src/templates/content/*.hbs','!src/templates/content/*.md.hbs'],
          'output/html/':            ['src/templates/html/*.hbs', '!src/templates/html/*.md.hbs']
        }
      },
      // This target shows just one way (of many) to render markdown
      // files from templates. The {{inspect}} logging helper is used 
      // in these examples as well.  
      inspect: {
        options: {
          ext: '',
          partials: 'src/templates/partials/*.md.hbs',
          layout: 'src/templates/layouts/markdown-layout.md.hbs'
        },
        files: [
          { src: ['src/templates/**/*.md.hbs', '!src/**/partial.md.hbs', '!src/**/layouts/*.*'], dest: 'output/inspect/' }
        ]
      },

      // This target This layout is used to demonstrate how paths 
      // will be constructed in different contexts, and using different 
      // src-dest arrangements.
      paths: {
        options: {
          ext: '',
          partials: 'src/templates/partials/*.md.hbs',
          layout: 'src/templates/layouts/paths.md.hbs'
        },
        files: [
          { src: ['src/templates/**/*.md.hbs', '!src/**/partial.md.hbs', '!src/**/layouts/*.*'], dest: 'output/paths/' }
        ]
      },

      // Assemble's pre-defined variables, rendered to markdown
      predefined_variables: {
        options: {ext: ''},
        files: [
          { src: ['src/templates/assemble/*.md.hbs'], dest: 'output/assemble/' },
        ]
      },
      // Assemble's pre-defined variables, rendered to HTML
      variables_html: {
        options: {
          layout: 'src/templates/layouts/default-layout.hbs'
        },
        files: [
          { src: ['src/templates/assemble/*.hbs', '!src/templates/assemble/*.md.hbs'], dest: 'output/assemble/html/' }
        ]
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      all: ['output/**/*.{html,md}', '!output/assets/**'],
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', [
    'clean',
    'assemble'
  ]);
};
