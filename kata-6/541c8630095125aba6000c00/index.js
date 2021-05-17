const sumOfDigits = n => {
    const res = n.toString().split('').map(Number).reduce((acc, val) => acc + val)
    return res.toString().length > 1 ? sumOfDigits(res) : res
}

export default sumOfDigits