(function() {
  module.exports.register = function(Handlebars, options) {
    var assembleOptions = options;
    var grunt     = require('grunt');
    var _         = grunt.util._;
    var minimatch = require('minimatch');
    var path      = require("path");

    var matchIncludes = function(src, search) {
      var files = grunt.files.expand(src);
      var partials = files.filter(minimatch.filter(search));
      return partials;
    };

    /*
     * Include one or more partials using optional minimatch patterns.
     * Usage: {{ include 'partial**' }}
     */
    Handlebars.registerHelper("matchInclude", function(search, options) {
      var rtn = '';
      var partials = matchIncludes(assembleOptions.partials, search);
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
        var context = _.extend({}, this, options.hash);
        return rtn += partial(context);
      });
      return new Handlebars.SafeString(rtn);
    });


  };
}).call(this);




