
(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt  = require('grunt');

    /*
     * Copy: copies src file from A to B. USE WITH CAUTION!!!
     *
     * This helper is more useful than it might seem, use your
     * imagination!
     *
     * Usage: {{copy [a] [b]}}
     */
    Handlebars.registerHelper("copy", function(a, b) {
      return grunt.file.copy(a, b);
    });


  };
}).call(this);
