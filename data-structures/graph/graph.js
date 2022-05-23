// Undirected, Cyclic, unwighted graph using adjacent list

class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex(node) {
    this.numberOfNodes++
    this.adjacentList[node] = []
  }

  addEdge(node1, node2) {
    if(!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2)
    }

    if(!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1)
    }
  }
  
  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    for(let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ''
      let vertex

      for(vertex of nodeConnections) {
        connections += vertex + ' '
      }

      console.log(node + '-->' + connections)
    }
  }
}

module.exports = Graph