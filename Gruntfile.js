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
        assets: 'examples/assets',
        content: './src/content'
      },
      pages: {
        options: {
          flatten: true,
          assets: 'dist/assets',
          layout: 'src/templates/layouts/default.hbs',
          partials: 'src/templates/partials/*.hbs',
          data: 'src/data/*.{json,yml}'
        },
        src:  'src/templates/pages/*.hbs',
        dest: 'dist/'
      },
      strings: {
        options: {ext: ''},
        files: [
          { src: ['src/templates/strings/*.md.hbs'], dest: 'dist/strings/' },
          { src: ['src/templates/special/*.md.hbs'], dest: 'dist/special/'},
          { src: ['src/templates/*.md.hbs'],         dest: 'dist/md/' }
        ]
      },
      travis: {
        options: {
          travis: {
            name: 'Assemble',
            branch: 'wip'
          }
        },
        files: {'dist/special/travis.md': ['./src/**/travis.md.hbs']}
      },
      travis2: {
        options: {
          travis: {
            name: 'Upstage',
            branch: 'master'
          }
        },
        files: {'dist/special/travis2.md': ['./src/**/travis.md.hbs']}
      },
      relative: {
        options: {
          flatten: false,
          assets: 'examples/assets'
        },
        files: {
          'dist/html/relative/': [
            './src/templates/path.hbs',
            './src/templates/nested/**/*.hbs'
          ]
        }
      },
      less: {
        files: {
          'dist/html/less.html': [
            './src/templates/less.hbs'
          ]
        }
      },
      handlebars: {
        options: {
          layout: 'src/templates/layouts/layout.hbs',
          partials: 'src/content/test.hbs'
        },
        files: {
          'dist/html/': [
            'src/templates/*.hbs',
            '!src/templates/*.md.hbs',
            '!src/templates/sections.hbs'
          ]
        }
      },
      sections: {
        options: {
          layout: 'src/templates/layouts/layout.hbs'
        },
        files: {
          'dist/sections/': [
            'src/templates/sections.hbs'
          ]
        }
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      assemble: ['dist/**/*.{html,md}'],
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', [
    'clean',
    'assemble:strings',
    'assemble:travis',
    'assemble:travis2',
    'assemble:handlebars',
    'assemble:sections',
    'assemble:less'
  ]);
};
