# array-chunker
Evenly distributes array values into an array of n arrays.

- [Docs](#docs)

## Usage

```javascript
const arrayChunk = require('array-chunker');
const arr = [0, 1, 2, 3, 4, 5, 6, 7];

arrayChunk(arr)
=> [[0, 1, 2, 3], [4, 5, 6, 7]]

arrayChunk(arr, 4);
=> [[0, 1], [2, 3], [4, 5], [6, 7]]
```

### When there aren't even chunks
```javascript
Number.isInteger(arr.length / n)
=> false
```

```javascript
arrayChunk(arr, 3);
=> [[0, 1, 2], [3, 4, 5], [6, 7]]

arrayChunk(arr, 5);
=> [[0, 1], [2, 3], [4, 5], [6], [7]]
```


```javascript
arr.length < n
=> true

arrayChunk(arr, 10);
=> [[0], [1], [2], [3], [4], [5], [6], [7], [], []]
```

### An empty array
```javascript
// n defaults to 2
arrayChunk([]);
=> [[], []];

arrayChunk([], 3);
=> [[], [], []];
```

### No array
```javascript
arrayChunk();
=> [];
```

<a name="docs"></a>
## Docs

arrayChunk(data, n) ⇒ <code>Array</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | The array to be chunked. |
| [n] | <code>Integer</code> | <code>2</code> | The number of new arrays. |
