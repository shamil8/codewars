const countBits = n => n
    .toString(2)
    .split('')
    .reduce((acc, b) => b ? acc + Number(b) : acc, 0)

const bestCountBits = n => n.toString(2).split('0').join('').length

export default countBits