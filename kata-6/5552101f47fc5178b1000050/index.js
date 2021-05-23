const digPow = (n, p) => {
    const k = [...String(n)].reduce((acc, v, i) => acc + Number(v) ** (p + i), 0) / n

    return k % 1 ? -1 : k
}

export default digPow