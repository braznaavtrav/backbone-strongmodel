(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'backbone'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('underscore'), require('backbone'));
  } else {
    factory(_, Backbone);
  }
}(function(_, Backbone) {

  var TYPES = {
        string: 'string',
        array: 'array',
        object: 'object',
        bool: 'bool',
        int: 'int',
        decimal: 'decimal',
        number: 'number'
      },

      StrongModel = Backbone.Model.extend({

        attrTypes: {},

        isAttrType: {
          string: _.isString,
          array: _.isArray,
          object: function(a) { return (_.isObject(a) && !_.isArray(a)); },
          bool: _.isBoolean,
          int: function(n) { return (_.isNumber(n) && n % 1 === 0); },
          decimal: function(n) { return (_.isNumber(n) && n % 1 !== 0); },
          number: _.isNumber
        },

        validateType: function(key, value) {
          if (_.has(this.attrTypes, key)) {
            var typeKey = this.attrTypes[key];
            return this.isAttrType[typeKey](value);
          }
          return true;
        },

        set: function(attrs, options) {
          for (var key in attrs) {
            if (!this.validateType(key, attrs[key])) {
              throw new Error('AHHH');
            }
          }

          Backbone.Model.prototype.set.call(this, attrs, options);
        }

      }, 
      {
        types: TYPES
      });


  return StrongModel;

}));