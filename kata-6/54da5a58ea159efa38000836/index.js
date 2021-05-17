const findOdd = arr => arr.reduce((acc, val) => {
    const idx = acc.indexOf(val)
    idx > -1 ? acc.splice(idx, 1) : acc.push(val)

    return acc
}, []).shift()

const findOddBest = (xs) => xs.reduce((a, b) => a ^ b);


export default findOddBest