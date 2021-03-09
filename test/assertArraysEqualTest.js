const assert = require('chai').assert;
const assertArraysEqual  = require('../assertArraysEqual');

discribe("#assertArraysEqual", () => {
  it("return false for ['novel'].length !== ['story'].length)", () => {
    assert.isNotTrue(assertArraysEqual(['novel'], ['story']));
  });
  it("return true for ['novel'].length === ['story'].length)", () => {
    assert.isTrue(assertArraysEqual(['novel'], ['story']));
  });
});


