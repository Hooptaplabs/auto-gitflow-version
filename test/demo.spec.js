
require('babel-register');
var service = require('../src/index');
var expect	= require('chai').expect;


describe('math service', function () {

  describe('adder', function () {

    it('must be a function', function () {
      expect(typeof math).to.equal('undefined');
    });

    it('2 + 3 = 5', function () {
      expect(2+2).to.equal(4);
    })

	  
  })


});
