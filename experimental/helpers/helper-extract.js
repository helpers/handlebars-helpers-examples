(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt = require('grunt');

    function getMatches(string, regex, index) {
      index = index || (index = 1);
      var matches = [];
      var match = void 0;
      while (match = regex.exec(string)) {
        matches.push(match[index]);
      }
      return matches;
    }
    Handlebars.registerHelper("extract", function(src, i) {
      var content = grunt.file.expand(src).map(grunt.file.read).join('');
      var helpers = /(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g;
      var matches = getMatches(content, helpers, i);
      return new Handlebars.SafeString(matches);
    });


  };
}).call(this);
