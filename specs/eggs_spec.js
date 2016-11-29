var eggs = require('../eggs');
var assert = require('assert');

describe("Eggs", function(){

  it ("should have brand", function(){
    assert.equal("Chickening Out", eggs.brand);
  })
})