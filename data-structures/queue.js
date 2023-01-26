class Queue {

    constructor() {
        this.items = {}
        this.frontPointer = 0
        this.rearPointer = 0
    }

    enqueue(x) {
        this.items[this.rearPointer] = x
        this.rearPointer++
    }

    dequeue() {
        const temp = this.items[this.frontPointer]
        delete this.items[this.frontPointer]
        this.frontPointer++
        return temp
    }

    peek() {
        return this.items[this.frontPointer]
    }

    size() {
        return this.rearPointer - this.frontPointer
    }

    inEmpty() {
        return this.size() < 1
    }

    print() {
        console.log(Object.entries(this.items))
    }

}

const queue = new Queue

queue.enqueue(10)
queue.enqueue(11)
queue.enqueue(15)
queue.enqueue(19)
queue.enqueue(17)
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()