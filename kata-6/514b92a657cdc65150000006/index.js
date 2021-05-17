const solution = n => Array
    .from({ length: n - 1 }, (_, i) => n - i - 1)
    .reduce((acc, num) => num % 3 === 0 || num % 5 === 0 ? acc + num : acc, 0)

export default solution