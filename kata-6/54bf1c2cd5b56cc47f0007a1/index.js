const duplicateCount = text => {
    return text
        .toLowerCase()
        .split('')
        .reduce((acc, val, idx, arr) => {
            acc === 0 && (acc = {})

            acc[val] = acc.hasOwnProperty(val) ? acc[val] + 1 : 0

            return idx === arr.length - 1 ? Object.values(acc).filter(l => l > 0).length : acc
        }, 0)
}
const bestDuplicateCount = text => (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length


export default duplicateCount
