(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt = require('grunt');
    var repoUrl = function(str) {
      var pkg = grunt.file.readJSON("./package.json");
      var url = pkg.repository.url;
      return str = url.replace(/.*:\/\/github.com\/(.*?)(?:\.git|$)/, str);
    };

    // Easily update README title in markdown format, with current version 
    // and a link to the project on GitHub. Metadata is from package.json
    Handlebars.registerHelper("readme-title", function(branch) {
      var pkg = grunt.file.readJSON("./package.json");
      var repo = repoUrl('https://github.com/$1');
      var name = pkg.name;
      var version = pkg.version;
      var source = '[' + name + ' v' + version + '](' + repo + ')';
      var template = Handlebars.compile(source);
      return new Handlebars.SafeString(template(pkg));
    });

  };
}).call(this);
