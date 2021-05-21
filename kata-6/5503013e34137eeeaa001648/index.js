const diamond = n => {
    if (!n || n < 1 || !(n % 2)) { return null }

    const nums = [...new Array(n)]
        .map((_, i) => i + 1)
        .filter(r => r % 2)
        .map((r, i) => ' '.repeat(r < n ? (n - r) / 2 : 0) + '*'.repeat(+r) + '\n')

    return nums.join('') + nums.slice(0, -1).reverse().join('')
}

export default diamond