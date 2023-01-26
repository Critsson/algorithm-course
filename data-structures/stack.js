class Stack {
    constructor() {
         this.items = []

    }

    add(x) {
        this.items.push(x)
    }

    remove() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

}