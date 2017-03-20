const assert = require('chai').assert;
const arrayChunk = require('../index.js');

var arr = [0, 1, 2, 3, 4, 5, 6, 7],
  arrChunk2 = [[0, 1, 2, 3], [4, 5, 6, 7]];

describe('arrayChunk()', function() {

  describe('Default Params', function() {
    it('should return an empty array if no array is passed', function() {
      assert.deepEqual(arrayChunk(), []);
    });

    it('should default n to 2 if n is not passed', function() {
      assert.deepEqual(arrayChunk(arr), arrChunk2);
    });

    it ('should default n to 2 if n is not a positive integer', function() {
      assert.deepEqual(arrayChunk(arr, -4), arrChunk2);
      assert.deepEqual(arrayChunk(arr, 3.4), arrChunk2);
    })
  });

  describe('Evenly dispersed', function() {
    it('should return n empty arrays if an empty array is passed', function() {
      assert.deepEqual(arrayChunk([], 1), [[]]);
      assert.deepEqual(arrayChunk([]), [[], []]);
      assert.deepEqual(arrayChunk([], 3), [[], [], []]);
    });

    it('should work if array.length < n', function() {
      assert.deepEqual(
        arrayChunk(arr, 10),
        [[0], [1], [2], [3], [4], [5], [6], [7], [], []]
      );
    });

    it('should evenly split even chunks', function() {
      assert.deepEqual(
        arrayChunk(arr, 4),
        [[0, 1], [2, 3], [4, 5], [6, 7]]
      );
    });

    it('should evenly disperse uneven chunks', function() {
      assert.deepEqual(
        arrayChunk(arr, 3),
        [[0, 1, 2], [3, 4, 5], [6, 7]]
      );

      assert.deepEqual(
        arrayChunk(arr, 5),
        [[0, 1], [2, 3], [4, 5], [6], [7]]
      );
    });
  });

});
