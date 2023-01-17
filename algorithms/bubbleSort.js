const bubbleSort = (arr) => {

    let unsorted = false

    while(unsorted === false) {
        let swapped = false
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                const placeholder = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = placeholder
                swapped = true
            }
        }

        if(swapped === false) {
            unsorted = true
        }
    }

    return arr

}

console.log(bubbleSort([8, 20 , -2, 4, -6]))