const persistence = (num, count = 0) => {
    if (num.toString().length < 2) return count

    const multiNum = num.toString().split('').map(Number).reduce((acc, val) => acc * val)
    count += 1

    return persistence(multiNum, count)
}

export default persistence