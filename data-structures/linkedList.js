class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print() {

        if (this.isEmpty()) {
            console.log("List is empty")
        } else {
            let currentNode = this.head
            let values = ""
            while (currentNode !== null) {
                values += `${currentNode.value} `
                currentNode = currentNode.next
            }
            console.log(values)
        }
    }

    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            let currentNode = this.head

            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log("Error")
        } else if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let currentNode = this.head

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next
            }

            node.next = currentNode.next
            currentNode.next = node
        }

        this.size++
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Error")
        } else if (index === 0) {
            this.head = this.head.next
        } else {
            let currentNode = this.head
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next
            }
            let removedNode = currentNode.next
            currentNode.next = removedNode.next
        }
        this.size--
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next
        } else {
            let prev = this.head
            let removedNode
            while(prev.next) {
                if(prev.next.value === value) {
                    removedNode = prev.next
                    prev.next = removedNode.next
                    this.size--
                    return removedNode
                }

                prev = prev.next

            }
        }
        this.size--
    }

    search(value) {
        if(this.size < 1) {
            return -1
        } else {
            let currentNode = this.head

            for(let i = 0; i < this.size; i++) {
                if(currentNode.value === value) {
                    return i
                }
                currentNode = currentNode.next
            }
        }

        return -1
    }

    reverse() {
            let prev = null
            let current = this.head

            while(current) {
                const next = current.next
                current.next = prev
                prev = current
                current = next
            }

            this.head = prev
        

    }
}

const list = new LinkedList()

list.append(10)
list.append(11)
console.log(list.search(1123))
list.print()
list.reverse()
list.print()