module.exports = arrayChunk;

/**
 * Evenly distributes array values into an array of n arrays.
 * @param {Array} arr The array to be chunked.
 * @param {Integer} [n = 2] The number of new arrays.
 * @returns {Array}
 */

function arrayChunk(arr, n) {
  if (!arr) return [];
  var newD = [],
    l = arr.length,
    chunk,
    chunked = 0;

  // Default to 2 chunks.
  n = !n || n < 0 || !Number.isInteger(n) ? 2 : n;
  chunk = Math.ceil(1 / n * l);

  // Add each chunk.
  for (var chunkI = 0; chunkI < n; chunkI += 1) {
    newD.push([]);

    // Reduce the chunk amount by one after chunking all the extras.
    if (chunkI === n - ((chunk * n) - l)) chunk -= 1;

    // Add to the chunks.
    newD[chunkI] = newD[chunkI].concat(arr.slice(chunked, chunked + chunk));
    chunked += chunk;
  }
  return newD;
}
