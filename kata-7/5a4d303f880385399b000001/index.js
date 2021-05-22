const fact = n => n === 0 ? 1 : n * fact(n - 1)

const strongNum = n => n
    .toString()
    .split('')
    .reduce((acc, v) => acc + fact(+v), 0) === n
    ? 'STRONG!!!!'
    : 'Not Strong !!'

export default strongNum