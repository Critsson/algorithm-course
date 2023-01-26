class Node {
    constructor(value) {
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(root, value) {
        if (this.isEmpty()) {
            const node = new Node(value)
            this.root = node
        } else {
            if (value < root.value) {
                if (root.leftChild === null) {
                    const node = new Node(value)
                    root.leftChild = node
                } else {
                    this.insert(root.leftChild, value)
                }
            } else {
                if (root.rightChild === null) {
                    const node = new Node(value)
                    root.rightChild = node
                } else {
                    this.insert(root.rightChild, value)
                }
            }
        }
    }

    search(root, value) {
        if (root === null) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.leftChild, value)
            } else {
                return this.search(root.rightChild, value)
            }
        }
    }

    preorderDFS(root) {

        if (root) {
            console.log(root.value)
            this.preorderDFS(root.leftChild)
            this.preorderDFS(root.rightChild)
        }

    }

    inorderDFS(root) {
        if (root) {
            this.inorderDFS(root.leftChild)
            console.log(root.value)
            this.preorderDFS(root.rightChild)
        }
    }

    postorderDFS(root) {
        if (root) {
            this.postorderDFS(root.leftChild)
            this.postorderDFS(root.rightChild)
            console.log(root.value)
        }
    }

    bfs(root) {
        const queue = []
        if (this.isEmpty()) {
            return -1
        } else {
            queue.push(root.value)
            let current = root
            while (queue.length > 0) {
                console.log(current.value)
                queue.shift()
                if (current.leftChild) {
                    queue.push(current.leftChild)
                }
                if (current.rightChild) {
                    queue.push(current.rightChild)
                }
                current = queue[0]
            }
        }
    }

    min(root) {

        if (!root.leftChild) {
            return root.value
        } else {
            return this.min(root.leftChild)
        }

    }

    max(root) {

        if (!root.rightChild) {
            return root.value
        } else {
            return this.max(root.rightChild)
        }

    }

}

const tree = new BST()

tree.insert(tree.root, 10)
tree.insert(tree.root, 5)
tree.insert(tree.root, 15)
tree.insert(tree.root, 19)
tree.insert(tree.root, 6)
tree.insert(tree.root, 2)
tree.insert(tree.root, 13)

tree.bfs(tree.root)
console.log(tree.max(tree.root))

