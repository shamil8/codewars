const countChar = s => s.split('').reduce((acc, k) => {
    acc[k] = acc.hasOwnProperty(k) ? acc[k] + 1 : 1
    return acc
}, {})

const ClearCount = s => [...s].reduce((a, v) => (a[v] = -~a[v], a), {})

export default countChar