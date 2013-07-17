(function() {
  module.exports.register = function(Handlebars, options) {
    var assembleOptions = options;
    var grunt     = require('grunt');
    var _         = grunt.util._;
    var minimatch = require('minimatch');
    var path      = require("path");

    var matchPartials = function(src, search) {
      var files = grunt.files.expand(src);
      var partials = files.filter(minimatch.filter(search));
      return partials;
    };


    /*
     * Add one or more partials using optional minimatch patterns.
     * Usage: {{ partial 'partial**' }}
     */
    Handlebars.registerHelper("matchPartial", function(search) {
      var values = Array.prototype.slice.call(arguments, 1);
      var opts = values.pop();
      var rtn = '';
      var partials = matchPartials(assembleOptions.partials, search);
      _.forEach(partials, function(name) {
        name = path.filename(name);
        var partial = Handlebars.partials[name];
        if (typeof partial === "string") {
          partial = Handlebars.compile(partial);
          Handlebars.partials[name] = partial;
        }
        if (!partial) {
          return new Handlebars.SafeString('Partial **' + name + '** not found.');
        }
        var context = _.extend({}, opts.context || this, _.omit(opts, "context", "fn", "inverse"));
        return rtn += partial(context);
      });
      return new Handlebars.SafeString(rtn);
    });


  };
}).call(this);




