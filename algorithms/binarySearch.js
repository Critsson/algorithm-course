const binarySearch= (value, arr) => {
    let leftPointer = 0
    let rightPointer = arr.length - 1

    while(leftPointer <= rightPointer) {
        const middle = Math.floor((leftPointer + rightPointer) / 2)

        if(arr[middle] === value) {
            return middle
        } else if(arr[middle] < value) {
            leftPointer = middle + 1
        } else {
            rightPointer = middle - 1
        }
    }

    return -1
}

console.log(binarySearch(10, [-5, 2, 4, 6, 10]))
console.log(binarySearch(6, [-5, 2, 4, 6, 10]))
console.log(binarySearch(20, [-5, 2, 4, 6, 10]))