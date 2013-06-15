(function() {
  module.exports.register = function(Handlebars, options) {

    var Utils = require('utils/utils');
    var HTML = require('utils/html');

    var grunt = require('grunt');
    var util = require('util');
    var _ = require('lodash');
    var help = {

      "listDocumented": function(docs) {
        var documentedLine = /(#### {{)(.*)(}})/g;
        var documentedName = /(?:#### {{)(.*)(?:}})/g;
        var documentedHelper = grunt.file.expand(docs).map(grunt.file.read)
          .join(grunt.util.normalizelf(grunt.util.linefeed))
          .match(documentedLine)
          .join('\n').replace(documentedName, "$1").split('\n');
        var documentedList = grunt.util.toArray(documentedHelper);
        return Utils.safeString(documentedList);
      },

      "listHelpers": function(src) {
        var helperLine = /(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g;
        var helperName = /(Handlebars.registerHelper ")(.*)(".*)/g;
        var files = grunt.file.expand(src);
        var helpers = files.map(grunt.file.read)
          .join(grunt.util.normalizelf(grunt.util.linefeed))
          .match(helperLine)
          .join('').replace(helperName, "$2").split('\n');
        var helperList = grunt.util.toArray(helpers);
        return Utils.safeString(helperList);
      },

      "undocumented": function(docs, src) {
        var helperLine = /(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g;
        var helperName = /(Handlebars.registerHelper ")(.*)(".*)/g;
        var files = grunt.file.expand(src);
        var helpers = files.map(grunt.file.read)
          .join(grunt.util.normalizelf(grunt.util.linefeed))
          .match(helperLine)
          .join('').replace(helperName, "$2").split('\n');

        var documentedLine = /(#### {{)(.*)(}})/g;
        var documentedName = /(?:#### {{)(.*)(?:}})/g;
        var documentedHelper = grunt.file.expand(docs).map(grunt.file.read)
          .join(grunt.util.normalizelf(grunt.util.linefeed))
          .match(documentedLine)
          .join('\n').replace(documentedName, "$1").split('\n');

        var helperList = _.toArray(helpers);
        var documentedList = _.toArray(documentedHelper);

        var undocumentedList = [];
        helperList.forEach(function(helper) {
          if (_.contains(documentedList, helper) === false) {
            return undocumentedList.push(helper);
          }
        });
        return Utils.safeString(helperList);
      },


      "debugThis": function(target) {
        //console.log("debugThis");
        if (!target) {
          target = this;
        }
        console.log(target);
      },

      "replace": function(original_string, look_for, replace_with, flags) {
        //console.log("replace");
        if (flags) {
          if (typeof flags === "string") {
            look_for = new RegExp(look_for, flags);
          } else {
            look_for = new RegExp(look_for);
          }

        }
        return original_string.replace(look_for, replace_with);
      },

      "root": function(path, options) {
        //console.log("root");
        if (path !== "" && path !== ".") {
          return path + "/";
        }
        return "";
      },

      'contains': function(value, test, options) {
        //console.log('contains');
        if (value.indexOf(test) !== -1) {

          //console.log("contains():\n",options,this);
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      },

      'doesntcontain': function(value, test, options) {
        //console.log('doesntcontain');
        if (value.indexOf(test) === -1) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      },

      'nav_is_active': function(that, options) {
        //console.log('nav_is_active');
        var siteroot = new RegExp("^build/");
        try {
          if (this.href.replace(/index.html$/, '') === that.page.dest.replace(/index.html$/, '').replace(siteroot, '')) {
            return "active ";
          } else {
            return "";
          }
        } catch (e) {
          console.error('nav_is_active', '-helper did not work!');
          throw (e);
        }
      },

      "cleanForBundle": function(original_string) {
        //console.log("cleanForBundle");
        return original_string.replace(/^(build|src)\//, '').replace(/\.js$/, '');
      },


      "currentURL": function(options) {
        //console.log("currentURL");
        var siteroot = new RegExp("^" + options.siteroot);
        return options.url.homepage + options.page.dest.replace(siteroot, "").replace(/index\.html$/, '');
      },

      "$$": function(child, parent, options) {
        //console.log("$$");
        if (typeof child !== 'object') {
          return '';
        }
        child['$_'] = parent;

        return options.fn(child);
      },

      "$": function(child, options) {
        //console.log("$");
        if (typeof child !== 'object') {
          return '';
        }
        child['$_'] = this;

        return options.fn(child);
      },

      "keys": function(obj, options) {
        console.log("keys", options);
        var key, result, value;

        result = '';
        for (key in obj) {
          value = obj[key];
          result += options.fn({
            key: key,
            val: value
          });
        }
        return result;
      },

      "verbose": function(text, indent, options) {
        //console.log("verbose");
        var tabs = "";
        if (typeof indent === "number") {
          tabs = new Array(indent + 1).join("\t");
        }
        if (this.site.dev.verbose) {
          return new Handlebars.SafeString(tabs + "<!-- " + text + " -->");
        }
        return "";
      },

      "relatives": function(from, to, options) {
        //console.log("relatives",from,to,options);
        from = from.replace(/^build\//, '');
        to = to.replace(/^build\//, '');
        var path = require('path');
        var fromDirname, relativePath, toBasename, toDirname;

        fromDirname = path.normalize(path.dirname(from));
        toDirname = path.normalize(path.dirname(to));
        toBasename = path.basename(to);
        relativePath = path.relative(fromDirname, toDirname);

        return path.join(relativePath, toBasename).replace(/\\/g, "/");
      },

      "icon": function(symbol, title, options) {
        //console.log("icon");
        var ariaLabel = "";
        if (title && options) {
          ariaLabel = ' aria-label="' + title + '"';
        }
        return new Handlebars.SafeString('<i class="icon icon-' + symbol + '"' + ariaLabel + '></i>');
      },

      "page_exists": function(str, context, options) {
        for (var i = context.pages.length - 1; i >= 0; i--) {
          if (context.pages[i].filename === str) {
            //console.log("yes");
            return options.fn(this);
          }
        }
        //console.log("no");
        return options.inverse(this);
      }

    };

    for (var index in help) {
      Handlebars.registerHelper(index, help[index]);
    }
    return this;
  };

}).call(this);