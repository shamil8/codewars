const sum = arr => arr.reduce((a, b) => a + b, 0)

const findEvenIndex = arr => arr.findIndex((_, i) => sum(arr.slice(0, i)) === sum(arr.slice(i + 1)))

export default findEvenIndex