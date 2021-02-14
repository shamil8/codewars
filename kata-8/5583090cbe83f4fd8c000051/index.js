const digitize = n => n.toString().split('').reverse().map(Number)

console.log(digitize(35231)) // true

module.exports = digitize