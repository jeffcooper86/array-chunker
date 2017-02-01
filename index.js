module.exports.arrayChunk = arrayChunk;

function arrayChunk(data, n) {
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

    // Reduce the chunk amount by one after chunking all the left overs.
    if (chunkI === n - ((chunk * n) - l)) chunk -= 1;

    // Add to the chunks.
    for (var i = 0; i < chunk; i += 1) {
      chunked += 1;
      newD[chunkI][i] = data[chunked - 1];
    }
  }
  return newD;
}
