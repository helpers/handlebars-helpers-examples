(function() {
  module.exports.register = function(Handlebars, options) {

    function isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    }

    // Check to see if an object is empty
    Handlebars.registerHelper("empty", function(val, fn, elseFn) {
      if (val === "undefined" || (val === null) || val.length === 0 || isEmptyObject(val)) {
        if (fn !== undefined) {
          return fn(this);
        } else {
          return null;
        }
      }
      if (elseFn !== undefined) {
        return elseFn(this);
      } else {
        return null;
      }
    });

    Handlebars.registerHelper("notempty", function(val, fn, elseFn) {
      if (val === "undefined" || (val === null) || val.length === 0 || isEmptyObject(val)) {
        if (elseFn !== undefined) {
          return elseFn(this);
        } else {
          return null;
        }
      }
      if (val.length > 0) {
        return fn(this);
      } else if (elseFn !== undefined) {
        return elseFn(this);
      } else {
        return null;
      }
    });


  };
}).call(this);
