const chai = require('chai');
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    const num1 = 31;
    const num2 = 2;
    const multiply = num1 * num2;
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply).to.eq(62)
    });
  });

  describe('random', function() {
    const random = Math.floor(Math.random() * 100) + 1;
    it("generates a random integer greater than 0", function() {
      expect(Number.isInteger(random)).to.be.true
      expect(random).to.be.greaterThan(0)
    });
  });

  describe('mod', function() {
    const num3 = 10;
    const num4 = 3;
    const mod = num3 % num4;
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(num3).to.be.a('number')
      expect(num4).to.be.a('number')
      expect(mod).to.eq(1)
    });
  });

  describe('max', function() {
    const numbers = [1, 7, 20, 9, 3];
    const max = Math.max(...numbers);
    it("will return 20 as the highest number in the set", function() {
      expect(max).to.eq(20)
    });
  });
});