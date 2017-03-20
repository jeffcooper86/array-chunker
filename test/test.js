const assert = require('chai').assert;
const arrayChunk = require('../index.js');

describe('arrayChunk()', function() {

  describe('Default Params', function() {
    it('should return an empty array if no array is passed', function() {
      assert.deepEqual(arrayChunk(), []);
    });

    it('should default n to 2 if n is not passed', function() {
      assert.deepEqual(arrayChunk([1, 2]), [[1], [2]]);
    });
  });

  describe('Evenly dispersed', function() {
    it('should work if array.length < n', function() {
      assert.deepEqual(
        arrayChunk([1, 2], 5),
        [[1], [2], [], [], []]
      );
    });

    it('should evenly split an array of 8 into 2 of 4', function() {
      assert.deepEqual(
        arrayChunk(Array(8).fill(1)),
        [[1, 1, 1, 1], [1, 1, 1, 1]]
      );
    });

    it('should evenly disperse an array of 8 into 3 arrays', function() {
      assert.deepEqual(
        arrayChunk(Array(8).fill(1), 3),
        [[1, 1, 1], [1, 1, 1], [1, 1]]
      );
    });

    it('should evenly disperse an array of 21 into 4 arrays', function() {
      assert.deepEqual(
        arrayChunk(Array(21).fill(1), 5),
        [[1, 1, 1, 1, 1,], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
      );
    });
  });

});
