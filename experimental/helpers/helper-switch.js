(function() {
  module.exports.register = function(Handlebars, options) {
    var assembleOptions = options;
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

    /*
     *  Example helper to demonstrate how to change the output 
     *  format based on dest file extension.
     */
    Handlebars.registerHelper("switch", function(src) {
      var md = '# ' + src;
      var html = '<h1>' + src + '</h1>';
      var output = switchOutput(assembleOptions.ext, md, html);
      return new Handlebars.SafeString(output);
    });


  };
}).call(this);
