(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt = require('grunt');
    var toString = Object.prototype.toString;
    var isUndefined = function(value) {
      return value === 'undefined' || toString.call(value) === '[object Function]' || (value.hash != null);
    };

    // Customize this helper
    Handlebars.registerHelper("roadmap", function(roadmap) {
      if (isUndefined(roadmap)) {
        roadmap = grunt.file.readYAML('./ROADMAP');
      } else {
        roadmap = grunt.file.readYAML(roadmap);
      }
      var source = "{{#each .}}* {{eta}}\t\t\t{{{@key}}}\t\t\t{{#each goals}}{{{.}}}  {{/each}}\n{{else}}_(Big plans in the works)_{{/each}}";
      var template = Handlebars.compile(source);
      return new Handlebars.SafeString(template(roadmap));
    });

  };
}).call(this);
