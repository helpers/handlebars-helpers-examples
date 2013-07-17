(function() {
  module.exports.register = function(Handlebars, options) {

    /*
     *  Utilities
     */
    var path     = require('path');
    var util     = require('util');
    var grunt    = require('grunt');
    var _        = require('lodash');
    var toString = Object.prototype.toString;

    var isUndefined = function(value) {
      return value === 'undefined' || toString.call(value) === '[object Function]' || (value.hash != null);
    };

    var switchOutput = function(ext, md, html) {
      var output;
      switch (ext) {
        case "":
        case ".md":
          output = md;
          break;
        case ".html":
        case ".htm":
          output = html;
      }
      return output;
    };
    var getExt = function(str) {
      var extname = path.extname(str);
      if (extname) {
        str = extname;
      }
      if (str[0] === ".") {
        str = str.substring(1);
      }
      return str;
    };
    var parseAttributes = function(hash) {
      return Object.keys(hash).map(function(key) {
        return "" + key + "=\"" + hash[key] + "\"";
      }).join(' ');
    };




    /*
     *  Helpers
     */

    Handlebars.sections = {};
    Handlebars.registerHelper("section", function(name, options) {
      console.log("inside section", name);
      if (!Handlebars.sections[name]) {
        Handlebars.sections[name] = {};
      }
      var html = "";
      _.forOwn(Handlebars.sections[name], function(value, key) {
        console.log("item", key, value);
        var data = Handlebars.createFrame({
          item: value
        });
        console.log("data", data);
        return html += options.fn(data);
      });
      return new Handlebars.SafeString(html);
    });
    Handlebars.registerHelper("push", function(options) {
      console.log("inside push", options.hash.section, options.hash.name);
      var section = options.hash.section;
      var name = options.hash.name;
      if (section) {
        if (!Handlebars.sections[section]) {
          Handlebars.sections[section] = {};
        }
        var item = new Handlebars.SafeString(options.fn(this));
        if (name) {
          return Handlebars.sections[section][name] = item;
        } else {
          return Handlebars.sections[section]["item" + (Handlebars.sections[section].length + 1)] = item;
        }
      }
    });


    Handlebars.registerHelper("link", function(url, text, linkClass) {
      url = Handlebars.Utils.escapeExpression(url);
      text = Handlebars.Utils.escapeExpression(text);
      if (isUndefined(linkClass)) {
        linkClass = "";
      }
      var md = '[' + text + '](' + url + ')';
      var html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>';
      var result = switchOutput(options.ext, md, html);
      return new Handlebars.SafeString(result);
    });
    Handlebars.registerHelper("css", function(context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return new Handlebars.SafeString(context.map(function(item) {
        var ext = getExt(item);
        var css = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">';
        var less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">';
        switch (ext) {
          case "less":
            return less;
          case "css":
            return css;
          default:
            return css;
        }
      }).join("\n"));
    });
    Handlebars.registerHelper("js", function(context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return new Handlebars.SafeString(context.map(function(item) {
        var ext = getExt(item);
        var js = '<script src="' + options.assets + '/js/' + item + '"></script>';
        var coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>';
        switch (ext) {
          case "js":
            return js;
          case "coffee":
            return coffee;
          default:
            return js;
        }
      }).join("\n"));
    });
    Handlebars.registerHelper("ul", function(context, options) {
      return ("<ul " + (parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });
    Handlebars.registerHelper("ol", function(context, options) {
      return ("<ol " + (parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ol>";
    });
    Handlebars.registerHelper('br', function(count, options) {
      var br, i;
      br = '<br>';
      if (!isUndefined(count)) {
        i = 0;
        while (i < count - 1) {
          br += '<br>';
          i++;
        }
      }
      return new Handlebars.SafeString(br);
    });
    Handlebars.registerHelper("exticon", function(attachment) {
      var extension = attachment.substr(attachment.lastIndexOf(".") + 1);
      var value = Handlebars.Utils.escapeExpression(extension);
      switch (value) {
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
          return new Handlebars.SafeString("<img src=\"img/img-icon.png\"><i>" + attachment + "</i>");
        case "zip":
        case "rar":
          return new Handlebars.SafeString("<img src=\"img/archive-icon.png\"><i>" + attachment + "</i>");
        case "pdf":
          return new Handlebars.SafeString("<img src=\"img/pdf-icon.png\"><i>" + attachment + "</i>");
        case "txt":
          return new Handlebars.SafeString("<img src=\"img/txt-icon.png\"><i>" + attachment + "</i>");
        case "doc":
        case "docx":
          return new Handlebars.SafeString("<img src=\"img/word-icon.png\"><i>" + attachment + "</i>");
        case "xls":
        case "xlsx":
          return new Handlebars.SafeString("<img src=\"img/xls-icon.png\"><i>" + attachment + "</i>");
        case "csv":
          return new Handlebars.SafeString("<img src=\"img/csv-icon.png\"><i>" + attachment + "</i>");
        case "ppt":
        case "pptx":
          return new Handlebars.SafeString("<img src=\"img/ppt-icon.png\"><i>" + attachment + "</i>");
        case "mp3":
          return new Handlebars.SafeString("<img src=\"img/audio-icon.png\"><i>" + attachment + "</i>");
        default:
          return new Handlebars.SafeString("<img src=\"img/other-icon.png\"><i>" + attachment + "</i>");
      }
    });
    Handlebars.registerHelper("DOCTYPE", function(type) {
      type = type.toLowerCase();
      switch (type) {
        case "5":
        case "html":
        case "html5":
          return new Handlebars.SafeString('<!DOCTYPE1 html>');
        case "xml":
          return new Handlebars.SafeString('<?xml version="1.0" encoding="utf-8" ?>');
        case "strict":
          return new Handlebars.SafeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
        case "transitional":
          return new Handlebars.SafeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
        case "frameset":
          return new Handlebars.SafeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">');
        case "1.1":
        case "xhtml 1.1":
          return new Handlebars.SafeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">');
        case "basic":
          return new Handlebars.SafeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">');
        case "mobile":
          return new Handlebars.SafeString('<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">');
        case "4":
        case "4.01":
        case "4.01 strict":
          return new Handlebars.SafeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">');
        case "4.01 trans":
          return new Handlebars.SafeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">');
        case "4.01 frameset":
          return new Handlebars.SafeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">');
        case "svg":
        case "svg 1.1":
        case "svg1.1":
          return new Handlebars.SafeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">');
        case "svg 1.0":
        case "svg1.0":
        case "svg1":
          return new Handlebars.SafeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">');
        default:
          return new Handlebars.SafeString('<!DOCTYPE1 html>');
      }
    });
    return this;
  };

}).call(this);
