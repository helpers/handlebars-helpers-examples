(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt = require('grunt');
    var toString = Object.prototype.toString;
    var isUndefined = function(value) {
      return value === 'undefined' || toString.call(value) === '[object Function]' || (value.hash != null);
    };

    // Customize this helper
    Handlebars.registerHelper("changelog", function(changelog) {
      if (isUndefined(changelog)) {
        changelog = grunt.file.readYAML('./CHANGELOG');
      } else {
        changelog = grunt.file.readYAML(changelog);
      }
      var source = "{{#each .}}* {{date}}\t\t\t{{{@key}}}\t\t\t{{#each changes}}{{{.}}}  {{/each}}\n{{/each}}";
      var template = Handlebars.compile(source);
      return new Handlebars.SafeString(template(changelog));
    });

  };
}).call(this);
