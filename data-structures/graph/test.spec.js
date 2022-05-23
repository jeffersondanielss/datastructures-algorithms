const Graph = require('./graph');

// GRAPH
//
//   lisa -- rick -- blue
//   |        |       |
//   |        |      elon
//  dan --- john
//    \   /
//     \ /
//    jeff


let myGraph

describe('Graph', () => {
  beforeEach(() => {
    myGraph = new Graph()
  })

  test('Graph is a class', () => {
    expect(typeof Graph.prototype.constructor).toEqual('function');
  });

  test('should add', () => {
    myGraph.addVertex('jeff')
    myGraph.addVertex('dan')
    myGraph.addVertex('john')
    myGraph.addVertex('lisa')
    myGraph.addVertex('rick')
    myGraph.addVertex('blue')
    myGraph.addVertex('elon')

    myGraph.addEdge('lisa', 'dan')
    myGraph.addEdge('lisa', 'rick')
    myGraph.addEdge('rick', 'john')
    myGraph.addEdge('rick', 'blue')
    myGraph.addEdge('dan', 'john')
    myGraph.addEdge('dan', 'jeff')
    myGraph.addEdge('jeff', 'john')
    myGraph.addEdge('elon', 'blue')

    expect(myGraph.numberOfNodes).toBe(7)

    expect(myGraph.adjacentList['jeff']).toStrictEqual(['dan', 'john'])
    expect(myGraph.adjacentList['dan']).toStrictEqual(['lisa', 'john', 'jeff'])
    expect(myGraph.adjacentList['john']).toStrictEqual(['rick', 'dan', 'jeff'])
    expect(myGraph.adjacentList['lisa']).toStrictEqual(['dan', 'rick'])
    expect(myGraph.adjacentList['rick']).toStrictEqual(['lisa', 'john', 'blue'])
    expect(myGraph.adjacentList['blue']).toStrictEqual(['rick', 'elon'])
    expect(myGraph.adjacentList['elon']).toStrictEqual(['blue'])
  })
})