class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if(!this.list.hasOwnProperty(vertex)) {
            this.list[vertex] = new Set()
        }
    }

    addEdge(v1, v2) {
        if(!this.list.hasOwnProperty(v1)) {
            this.addVertex(v1)
        }

        if(!this.list.hasOwnProperty(v2)) {
            this.addVertex(v2)
        }

        this.list[v1].add(v2)
        this.list[v2].add(v1)
        
    }

    print() {
        for(let vertex in this.list) {
            console.log(`${vertex} --> ${[...this.list[vertex]]}`)
        }
    }

    hasEdge(v1, v2) {
        return this.list[v1].has(v2)
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.print()