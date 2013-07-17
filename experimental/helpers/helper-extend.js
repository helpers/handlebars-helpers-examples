(function() {
  module.exports.register = function(Handlebars, options) {

    var blocks = {};
    Handlebars.registerHelper("extend", function(name, context) {
      var block = blocks[name];
      if (!block) {
        block = blocks[name] = [];
      }
      block.push(context.fn(this));
    });

    Handlebars.registerHelper("block", function(name) {
      var val = (blocks[name] || []).join("\n");
      blocks[name] = [];
      return val;
    });

  };
}).call(this);
