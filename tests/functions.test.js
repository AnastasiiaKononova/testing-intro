const assert = require('assert');
const { expect } = require('chai');
const { sum } = require('../utils/math');
// test('return 4 when 2:number + 2:number', sum(2,2),4)
// it('опис', function () {
// перевірка функцією з бібліотеки тверджень
// });

// describe('опис групи тестів', function () {
// група тестів it
// });

describe('Testing math.sum', function () {
    it('return 4 when 2:number + 2:number', function () {
      const result = sum(2, 2);
      const expected = 4;
      assert.equal(result, expected);
    });
  
    it('return 4 when "2":string + "2":string', function () {
      const result = sum('2', '2');
      const expected = 4;
      assert.equal(result, expected);
    });
  
    describe('Should return NaN', function () {
      it('return NaN when "qwerty":string + 4:number', function () {
        assert.equal(sum('qwerty', 4), NaN);
      });
  
      it('return NaN when {}:object + 4:number', function () {
        assert.equal(sum({}, 4), NaN);
      });
    });
  
    it('return Infinity when Number.MAX_VALUE + Number.MAX_VALUE', function () {
      const result = sum(Number.MAX_VALUE, Number.MAX_VALUE);
      const expected = Infinity;
  
      expect(result).to.equal(expected);
    });
  });