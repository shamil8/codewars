const spinWords = str => str.split(' ').map(w => w.length > 4 ? w.split('').reverse().join('') : w).join(' ')

export default spinWords