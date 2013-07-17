(function() {
  module.exports.register = function(Handlebars, options) {

    // Stringify an object to JSON
    Handlebars.registerHelper('json', function(obj) {
      return JSON.stringify(obj);
    });

  };
}).call(this);
