const isPowerTwo = (n) => {

    let value = n

    if(n === 1) {
        return true
    }

    while (value >= 2) {
        if(value === 2) {
            return true
        }
        value /= 2
    }

    return false

}

console.log(isPowerTwo(1))
console.log(isPowerTwo(2))
console.log(isPowerTwo(5))