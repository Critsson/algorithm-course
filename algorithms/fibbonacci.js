const fibonacci = (n) => {
    const fibArr = [0, 1]

    if (n === 1) {
        return [0]
    } else {
        for (let i = 2; i < n; i++) {
            fibArr[i] = fibArr[i-1] + fibArr[i-2]
        }
    }
    return fibArr
}

console.log(fibonacci(7))
