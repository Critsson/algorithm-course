const insertionSort = (arr) => {

    for(let i = 1; i < arr.length; i++) {
        const insertValue = arr[i]
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] < insertValue) {
                arr[j+1] = insertValue
                break;
            }

            if(arr[j] >= insertValue) {
                arr[j + 1] = arr[j]
            }

            if(j === 0) {
                arr[j] = insertValue
            }
        }
    }

    return arr
}

console.log(insertionSort([-6, 20, 8, -6 ,-2, 4]))