(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt = require('grunt');
    var toString = Object.prototype.toString;
    var isUndefined = function(value) {
      return value === 'undefined' || toString.call(value) === '[object Function]' || (value.hash != null);
    };

    // Customize this helper
    Handlebars.registerHelper('authors', function(authors) {
      if (isUndefined(authors)) {
        authors = grunt.file.read("./AUTHORS");
      } else {
        authors = grunt.file.read(authors);
      }
      var matches = authors.replace(/(.*?)\s*\((.*)\)/g, '* [$1]($2)  ') || [];
      return new Handlebars.SafeString(matches);
    });
    Handlebars.registerHelper('AUTHORS', function(authors) {
      if (isUndefined(authors)) {
        authors = grunt.file.read("./AUTHORS");
      } else {
        authors = grunt.file.read(authors);
      }
      var matches = authors.replace(/(.*?)\s*\((.*)\)/g, '\n**[$1]**\n  \n+ [$2]($2)  ') || [];
      return new Handlebars.SafeString(matches);
    });

  };
}).call(this);
