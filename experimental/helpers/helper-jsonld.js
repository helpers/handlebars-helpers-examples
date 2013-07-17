(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt  = require('grunt');
    var assembleOptions = options;

    /*
     * jsonld: Add JSON-LD snippets to a page. File must contain valid JSON.
     * Usage: {{jsonld 'file.jsonld'}}
     */
    // Handlebars.registerHelper('jsonld', function(file, props) {
    //   var path;
    //   if(assembleOptions.jsonlddir) {
    //     path = assembleOptions.jsonlddir;
    //   } else {
    //     path = null;
    //   }
    //   file = grunt.file.readJSON(path + file);
    //   content = new Handlebars.SafeString(JSON.stringify(file, null, 2));
    //   return new Handlebars.SafeString('\n<!-- JSON-LD markup -->\n<script type="application/ld+json">\n' + content + '\n</script>');
    // });
    /*
     * jsonld: Add JSON-LD snippets to a page. File must contain valid JSON.
     * Usage: {{jsonld 'file.jsonld'}}
     */
    Handlebars.registerHelper('jsonld', function(file, props) {
      file = grunt.file.readJSON(file);
      var content = new Handlebars.SafeString(JSON.stringify(file, null, 2));
      return new Handlebars.SafeString('\n<!-- JSON-LD markup -->\n<script type="application/ld+json">\n' + content + '\n</script>');
    });

  };
}).call(this);
