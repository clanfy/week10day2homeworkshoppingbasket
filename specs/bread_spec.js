var bread = require('../bread');
var assert = require('assert');

describe("Bread", function(){

  it("should have brand", function(){
    assert.equal("Wonder Bread", bread.brand);
  });

})