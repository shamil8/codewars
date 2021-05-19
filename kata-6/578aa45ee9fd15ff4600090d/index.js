const sortOdd = nums => nums.map((n, idx) => {
    if (n % 2) {
        const odd = nums.find((num, i) => num % 2 && i !== idx)
        if (n !== odd || n > odd) {
            n = odd
        }
    }
    return n
})

export default sortOdd
