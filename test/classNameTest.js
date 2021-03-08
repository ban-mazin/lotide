var chai = require('chai');
var assert = chai.assert;

var className = require('../className.js');
var addClass = className.addClass;


describe('addClass', function() {
  it('should add class which already exists', function() {
    var element = { className: 'exists' };

    addClass(element, 'exists');

    var numClasses = element.className.split(' ').length;
  assert.equal(numClasses, 1);
});

  it('should not add a class which already exists');
});