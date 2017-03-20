module.exports = arrayChunk;

/**
 * Evenly distributes array values into an array of n arrays.
 * @param {array} data
 * @param {int} n The number of new arrays.
 */

function arrayChunk(data, n) {
  if (!data) return [];
  var newD = [],
    l = data.length,
    chunk,
    chunked = 0;

  // Default to 2 chunks.
  n = (!n || n < 2) ? 2 : n;
  chunk = Math.ceil(1 / n * l);

  // Add each chunk.
  for (var chunkI = 0; chunkI < n; chunkI += 1) {
    newD.push([]);

    // Reduce the chunk amount by one after chunking all the extras.
    if (chunkI === n - ((chunk * n) - l)) chunk -= 1;

    // Add to the chunks.
    newD[chunkI] = newD[chunkI].concat(data.slice(chunked, chunked + chunk));
    chunked += chunk;
  }
  return newD;
}
