const sumDigPow = (a, b) => [...new Array(b - a)]
    .map((_, i) => i + a)
    .filter(n => [...String(n)].reduce((a, v, i) => a + Number(v) ** (i + 1), 0) === n)

export default sumDigPow