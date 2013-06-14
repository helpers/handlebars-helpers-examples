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
        assets: 'dest/assets'
      },
      pages: {
        options: {
          layout: 'src/templates/layouts/default-layout.hbs',
        },
        src:  'src/templates/pages/*.hbs',
        dest: 'dest/'
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
          { src: ['src/templates/code/*.md.hbs'],        dest: 'dest/code/' },
          { src: ['src/templates/collections/*.md.hbs'], dest: 'dest/collections/' },
          { src: ['src/templates/content/*.md.hbs'],     dest: 'dest/content/' },
          { src: ['src/templates/converters/*.md.hbs'],  dest: 'dest/converters/' },
          { src: ['src/templates/logging/*.md.hbs'],     dest: 'dest/logging/'},
          { src: ['src/templates/objects/*.md.hbs'],     dest: 'dest/objects/'},
          { src: ['src/templates/path/*.md.hbs'],        dest: 'dest/path/'},
          { src: ['src/templates/strings/*.md.hbs'],     dest: 'dest/strings/'},
          { src: ['src/templates/url/*.md.hbs'],         dest: 'dest/url/' }
        ]
      },
      html: {
        options: {
          layout: 'src/templates/layouts/default-layout.hbs'
        },
        files: {
          'dest/converters/html/': ['src/templates/converters/*.hbs','!src/templates/converters/*.md.hbs'],
          'dest/content/html/':    ['src/templates/content/*.hbs','!src/templates/content/*.md.hbs'],
          'dest/html/':            ['src/templates/html/*.hbs', '!src/templates/html/*.md.hbs']
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
          { src: ['src/templates/**/*.md.hbs', '!src/**/partial.md.hbs', '!src/**/layouts/*.*'], dest: 'dest/inspect/' }
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
          { src: ['src/templates/**/*.md.hbs', '!src/**/partial.md.hbs', '!src/**/layouts/*.*'], dest: 'dest/paths/' }
        ]
      },

      // Assemble's pre-defined variables, rendered to markdown
      predefined_variables: {
        options: {ext: ''},
        files: [
          { src: ['src/templates/assemble/*.md.hbs'], dest: 'dest/assemble/' },
        ]
      },
      // Assemble's pre-defined variables, rendered to HTML
      variables_html: {
        options: {
          layout: 'src/templates/layouts/default-layout.hbs'
        },
        files: [
          { src: ['src/templates/assemble/*.hbs', '!src/templates/assemble/*.md.hbs'], dest: 'dest/assemble/html/' }
        ]
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      all: ['dest/**/*.{html,md}', '!dest/assets/**'],
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
