const findOutlier = nums => nums.find((n, idx, nums) => nums.filter(s => s % 2).length === 1 ? n % 2 : !(n % 2))

export default findOutlier