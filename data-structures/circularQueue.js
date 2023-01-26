class circularQueue {
    constructor(size) {
        this.items = {}
        this.size = size
        this.frontPointer = 0
        this.rearPointer = 0
    }

    enqueue(x) {
        if(this.rearPointer - this.frontPointer === this.size) {
            console.log("Queue is full")
        } else {
            this.items[this.rearPointer] = x
            this.rearPointer++
        }
    }

    dequeue() {
        const temp = this.items[this.frontPointer]
        delete this.items[this.frontPointer]
        this.frontPointer++
        return temp
    }

    print() {
        console.log(Object.entries(this.items))
    }

    front() {
        return this.items[this.frontPointer]
    }

    rear() {
        return this.items[this.rearPointer - 1]
    }
}

const queue = new circularQueue(3)

queue.enqueue(2)
queue.enqueue(7)
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.enqueue(10)
queue.enqueue(11)
queue.print()
console.log(queue.front())
console.log(queue.rear())