(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt  = require('grunt');

    /*
     * Experimental helper to build a Table of Contents. Currently
     * builds a list from the headers found in markdown files.
     */
    Handlebars.registerHelper("toc", function(src) {
      var content = grunt.file.expand(src).map(grunt.file.read).join('')
        .match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm).join('')
        .replace(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm, '$1 [$2](#' + '$2' + ')\n');
      return new Handlebars.SafeString(content);
    });

    // Handlebars.registerHelper("toc", function(src) {
    //   var content = grunt.file.expand(src).map(grunt.file.read)
    //     .join(grunt.util.normalizelf(grunt.util.linefeed));
    //   var headings = content.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm).join('\n')
    //     .replace(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm, '$1 [$2]($2)\n');
    //   return new Handlebars.SafeString(headings);
    // };

  };
}).call(this);



