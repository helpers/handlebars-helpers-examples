(function() {
  module.exports.register = function(Handlebars, options) {
    var grunt = require('grunt');
    var toString = Object.prototype.toString;
    var isUndefined = function(value) {
      return value === 'undefined' || toString.call(value) === '[object Function]' || (value.hash != null);
    };
    var repoUrl = function(str) {
      var pkg = grunt.file.readJSON("./package.json");
      var url = pkg.repository.url;
      return str = url.replace(/.*:\/\/github.com\/(.*?)(?:\.git|$)/, str);
    };


    Handlebars.registerHelper("travis-badge", function(branch) {
      var pkg = grunt.file.readJSON("./package.json");
      var travisUrl = repoUrl('https://travis-ci.org/$1');
      var travis = options.travis || {};
      var curBranch = '';
      if (isUndefined(branch)) {
        curBranch = '';
      } else if (travis.branch) {
        curBranch = '?branch=' + travis.branch;
      } else {
        curBranch = '?branch=' + branch;
      }
      if (travis.name) {
        pkg.name = travis.name;
      } else {
        pkg.name = pkg.name;
      }
      var source = '[![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')';
      var template = Handlebars.compile(source);
      return new Handlebars.SafeString(template(pkg));
    });

    Handlebars.registerHelper("travis", function(branch) {
      var pkg = grunt.file.readJSON("./package.json");
      var repo = repoUrl('https://github.com/$1');
      var travisUrl = repoUrl('https://travis-ci.org/$1');
      var travis = options.travis || {};
      var curBranch = '';
      if (isUndefined(branch)) {
        curBranch = '';
      } else if (travis.branch) {
        curBranch = '?branch=' + travis.branch;
      } else {
        curBranch = '?branch=' + branch;
      }
      if (travis.name) {
        pkg.name = travis.name;
      } else {
        pkg.name = pkg.name;
      }
      var title;
      if (travis.title !== false) {
        title = '# [' + pkg.name + ' v' + pkg.version + '](' + repo + ')';
      }
      var source = title + ' [![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')';
      var template = Handlebars.compile(source);
      return new Handlebars.SafeString(template(pkg));
    });

  };
}).call(this);
