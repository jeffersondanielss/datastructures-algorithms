## Graps


### Directed vs Undirected

```js
// Directed
//
//     2 <----> 8 <------ > 0
//     ↑       ↑
//    |       |
//   ↓       ↓
//  1 <----->  3
//
// Undirected
//
//        2   ------ 0
//      /   \
//    1 ----- 3
//
```

### Wighted vs Unwighted
Information or not in the edges

```js
// Example: 1 = node, 0 = edge
//
// Wighted
//
//          0        0
//     1 <----> 1 <------ > 1
//     ↑       ↑    -0
//  0 |       | 0
//   ↓       ↓
//  1 <----->  1
//       0
//
// Unwighted
//
//     1 <----> 1 <------ > 1
//     ↑       ↑
//    |       |
//   ↓       ↓
//  1 <----->  1
//
//
```

### Cyclic vs Acyclic

```js
// Cyclic
//
//        2 
//      /   \
//    1 ----- 3
//
// Acyclic

//        2
//      /
//    1 ----- 3
//
```

## How represent the nodes and edges

```js
// Example:
//        2   ------ 0
//      /   \
//    1 ----- 3
```

### Edge List
```js
const graph = [[0,2], [2,3], [2,1], [1,3]]
```

### Adjacent List
```js
// With hashMaps
const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [2, 1],
}

//With Arrays
const graph = [[2], [2,3], [0,1,3], [1,2]]
```

### Adjacent Matrix
```js
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]
```