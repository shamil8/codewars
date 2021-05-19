const duplicateEncode = word => word
    .toLowerCase()
    .split('')
    .map((l, _, w) => w.indexOf(l) === w.lastIndexOf(l) ? '(' : ')')
    .join('')

export default duplicateEncode