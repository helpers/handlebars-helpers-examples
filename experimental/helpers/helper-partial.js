(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt = require('grunt');
    var _     = grunt.util._;

    /*
     * Adds support for passing arguments to partials. Arguments are
     * merged with the context for rendering only (non destructive).
     * Use `:token` syntax to replace parts of the template path.
     * Tokens are replaced in order.
     *
     * USAGE:
     *    {{partial 'path.to.partial' context=newContext foo='bar' }}
     *    {{partial 'path.:1.:2' replaceOne replaceTwo foo='bar' }}
    */
    Handlebars.registerHelper("partial", function(template) {
      var values = Array.prototype.slice.call(arguments, 1);
      var opts = values.pop();
      var done;
      while (!done) {
        var value = values.pop();
        if (value) {
          template = template.replace(/:[^\.]+/, value);
        } else {
          done = true;
        }
      }
      var partial = Handlebars.partials[template];
      if (typeof partial === "string") {
        partial = Handlebars.compile(partial);
        Handlebars.partials[template] = partial;
      }
      if (!partial) {
        return new Handlebars.SafeString('Partial **' + template + '** not found.');
      }
      var context = _.extend({}, opts.context || this, _.omit(opts, "context", "fn", "inverse"));
      return new Handlebars.SafeString(partial(context));
    });

  };
}).call(this);



