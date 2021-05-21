const isPrime = n => n <= 2
    ? [...new Array(n)].filter((_, i) => n % (i + 1) === 0).length > 2
    : false

export default isPrime