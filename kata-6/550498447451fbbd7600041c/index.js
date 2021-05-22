const comp = (a1, a2) => !!(a1 && a2) && a1.length === a2.length &&
    a1.sort((a, b) => a - b).every((v, i) => v ** 2 === a2.sort((a, b) => a - b)[i])

export default comp