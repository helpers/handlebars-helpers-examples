var grunt = require('grunt');

(function() {
  module.exports.register = function(Handlebars, options) {
  module.exports.sections = {};

    /*
     * Define Section
     */
    Handlebars.registerHelper("defineSection", function(section, options) {
      if (Handlebars.sections) {
        Handlebars.sections[section] = options.fn(this);
      }
      return new Handlebars.SafeString("");
    });

    /*
     * Render Section
     */
    Handlebars.registerHelper("renderSection", function(section, options) {
      var content;
      content = void 0;
      if (Handlebars.sections && Handlebars.sections[section]) {
        content = Handlebars.sections[section];
      } else {
        content = options.fn(this);
      }
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);
