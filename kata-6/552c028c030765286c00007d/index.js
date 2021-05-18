const iqTest = str => str.split(' ')
    .map(Number)
    .findIndex((n, idx, nums) => nums.filter(s => s % 2).length === 1 ? n % 2 : !(n % 2)) + 1

export default iqTest