(function() {
  module.exports.register = function(Handlebars, options) {

    // Customize this helper
    Handlebars.registerHelper("logging", function() {
      var args = Array.prototype.slice.call(arguments);
      return console.log('LOG:', args.slice(0, -1)) || '';
    });

  };
}).call(this);
