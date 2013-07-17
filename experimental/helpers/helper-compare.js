(function() {
  module.exports.register = function(Handlebars, options) {


    // Comparison helper
    // Able to do things such as:
    //
    //   {{#compare Database.Tables.Count ">" 5}}
    //     There are more than 5 tables
    //   {{/compare}}
    //
    //   {{#compare "Test" "Test"}}
    //     Default comparison of "==="
    //   {{/compare}}
    //
    Handlebars.registerHelper("compare", function(lvalue, operator, rvalue, options) {
      var operators = void 0;
      var result = void 0;
      if (arguments.length < 3) {
        throw new Error('Handlerbars Helper "compare" needs two parameters');
      }
      if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
      }
      operators = {
        "==": function(l, r) {
          return l === r;
        },
        "===": function(l, r) {
          return l === r;
        },
        "!=": function(l, r) {
          return l !== r;
        },
        "!==": function(l, r) {
          return l !== r;
        },
        "<": function(l, r) {
          return l < r;
        },
        ">": function(l, r) {
          return l > r;
        },
        "<=": function(l, r) {
          return l <= r;
        },
        ">=": function(l, r) {
          return l >= r;
        },
        "typeof": function(l, r) {
          return typeof l === r;
        }
      };
      if (!operators[operator]) {
        throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + '"' + operator + '"');
      }
      result = operators[operator](lvalue, rvalue);
      if (result) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });

  };
}).call(this);
