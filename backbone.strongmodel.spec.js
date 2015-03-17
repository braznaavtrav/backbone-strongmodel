describe('Backbone.StrongModel', function() {
  var _ = require('underscore'),
      StrongModel = require('./backbone.strongmodel'),

      types = {
        string: 'This is a string',
        array: [1, 'two', ['c']],
        object: {foo: 'bar', hello: ['world']},
        bool: true,
        int: 345,
        decimal: 34.455556,
        number: 1e+21
      },

      Model = StrongModel.extend({
        attrTypes: {
          stringVal: StrongModel.types.string,
          arrayVal: StrongModel.types.array,
          objectVal: StrongModel.types.object,
          boolVal: StrongModel.types.bool,
          intVal: StrongModel.types.int,
          decimalVal: StrongModel.types.decimal,
          numberVal: StrongModel.types.number
        }
      }),

      m;

  beforeEach(function() {
    m = new Model();
  });

  
  describe('string', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'string') {
        
        it('does not throw when setting valid string', function() {
          expect(function() { m.set({stringVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for string', function() {
          expect(function() { m.set({stringVal: value}) }).toThrow();
        });

      }

    });

  });


  describe('array', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'array') {
        
        it('does not throw when setting valid array', function() {
          expect(function() { m.set({arrayVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for array', function() {
          expect(function() { m.set({arrayVal: value}) }).toThrow();
        });

      }

    });

  });


  describe('object', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'object') {
        
        it('does not throw when setting valid object', function() {
          expect(function() { m.set({objectVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for object', function() {
          expect(function() { m.set({objectVal: value}) }).toThrow();
        });

      }

    });

  });


  describe('bool', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'bool') {
        
        it('does not throw when setting valid bool', function() {
          expect(function() { m.set({boolVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for bool', function() {
          expect(function() { m.set({boolVal: value}) }).toThrow();
        });

      }

    });

  });


  describe('int', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'int' || type === 'number') {
        
        it('does not throw when setting valid int', function() {
          expect(function() { m.set({intVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for int', function() {
          expect(function() { m.set({intVal: value}) }).toThrow();
        });

      }

    });

  });


  describe('decimal', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'decimal') {
        
        it('does not throw when setting valid decimal', function() {
          expect(function() { m.set({decimalVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for decimal', function() {
          expect(function() { m.set({decimalVal: value}) }).toThrow();
        });

      }

    });

  });


  describe('number', function() {
    
    _.each(types, function(value, type) {
      
      if (type === 'number' || type === 'int' || type === 'decimal') {
        
        it('does not throw when setting valid number', function() {
          expect(function() { m.set({numberVal: value}) }).not.toThrow();
        });

      } else {
        
        it('throws when setting ' + type + ' for number', function() {
          expect(function() { m.set({numberVal: value}) }).toThrow();
        });

      }

    });

  });

});
