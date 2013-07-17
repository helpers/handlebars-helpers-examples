
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

    Handlebars.registerHelper("match", function(src) {
      var helpers = /(?:  Handlebars.registerHelper \")(?:.*",\s)(.*\s)/g;
      var content = grunt.file.expand(src).map(grunt.file.read).join('').match(helpers);
      var name = /(Handlebars.registerHelper ")(.*)(".*)/g;
      var names = getMatches(content, name, 2).join('\n');
      return new Handlebars.SafeString(names);
    });

    // Handlebars.registerHelper("match", function(src) {
    //   var content = grunt.file.expand(src).map(grunt.file.read).join('');
    //   var helpers = /(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g;
    //   var match = helpers.exec(content);
    //   return new Handlebars.SafeString(match[2]);
    // };

  };
}).call(this);
