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
        assets: 'dist/assets'
      },
      pages: {
        options: {
          layout: 'src/templates/layouts/default.hbs',
          partials: 'src/templates/partials/*.hbs',
          data: 'src/data/*.{json,yml}'
        },
        src:  'src/templates/pages/*.hbs',
        dest: 'dist/'
      },
      strings: {
        options: {
          ext: '',
          travis: {
            name: 'Assemble',
            branch: 'wip'
          }
        },
        files: [
          { src: ['src/templates/collections/*.md.hbs'], dest: 'dist/collections/' },
          { src: ['src/templates/converters/*.md.hbs'],  dest: 'dist/converters/' },
          { src: ['src/templates/file/*.md.hbs'],        dest: 'dist/file/' },
          { src: ['src/templates/logging/*.md.hbs'],     dest: 'dist/logging/'},
          { src: ['src/templates/objects/*.md.hbs'],     dest: 'dist/objects/'},
          { src: ['src/templates/path/*.md.hbs'],        dest: 'dist/path/'},
          { src: ['src/templates/special/*.md.hbs'],     dest: 'dist/special/'},
          { src: ['src/templates/strings/*.md.hbs'],     dest: 'dist/strings/' }
        ]
      },
      html: {
        files: {
          // the exclusion patterns can be simpler, but explicit compiles much faster.
          'dist/assemble/':        ['src/templates/assemble/*.hbs', '!src/templates/assemble/*.md.hbs'],
          'dist/converters/html/': ['src/templates/converters/*.hbs','!src/templates/converters/*.md.hbs'],
          'dist/file/html/':       ['src/templates/file/*.hbs','!src/templates/file/*.md.hbs'],
          'dist/html/':            ['src/templates/html/*.hbs', '!src/templates/html/*.md.hbs']
        }
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      all: ['dist/**', '!dist/assets'],
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
