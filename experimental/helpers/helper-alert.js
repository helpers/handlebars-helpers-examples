
(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt  = require('grunt');
    var _      = grunt.util._;
    /*
     * Copy: copies src file from A to B. USE WITH CAUTION!!!
     * Usage: {{copy [a] [b]}}
     */
    Handlebars.registerHelper("alert", function(messages, options) {
      var makeAlert = function(type, msg) {
        var html =  "<div class=\"fade in alert" + (_.contains(["success", "info", "error", "danger"], type) ? " alert-" + type : "") + "\">";
            html += "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>";
            html += "<strong>" + type.charAt(0).toUpperCase() + type.slice(1) + "!</strong> " + msg;
            html += "</div>";
        return html;
      };
      var ret = "";
      function alertMessages(messages, prop) {
        messages[prop].forEach(function(msg) {
          return ret += makeAlert(prop, msg);
        });
      }
      for (var prop in messages) {
        if (_.isArray(messages[prop])) {
          alertMessages(messages, prop);
        } else {
          ret += makeAlert(prop, messages[prop]);
        }
      }
      return new Handlebars.SafeString("<div class=\"alerts\">" + ret + "</div>");
    });

  };
}).call(this);
