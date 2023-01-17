const binarySearch = (value, arr) => {
    return search(value, arr, 0, arr.length - 1)

}

const search = (value, arr, leftPointer, rightPointer) => {
    const middle = Math.floor((leftPointer + rightPointer) / 2)

    if (leftPointer > rightPointer) {
        return -1
    }

    if (arr[middle] === value) {
        return middle
    }

    if (arr[middle] < value) {
        return search(value, arr, middle + 1, rightPointer)
    } else {
        return search(value, arr, leftPointer, middle - 1)
    }
}

console.log(binarySearch(10, [-5, 2, 4, 6, 10]))
console.log(binarySearch(6, [-5, 2, 4, 6, 10]))
console.log(binarySearch(20, [-5, 2, 4, 6, 10]))