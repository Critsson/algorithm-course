const quickSort = (arr) => {
    const pivot = arr[arr.length - 1]
    const left = [];
    const right = [];

    if(arr.length < 2) {
        return arr
    }
    
    for(let i = 0; i < arr.length - 1; i++) {
        if(pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}

console.log(quickSort([8, 20, -2, 4, -6]))