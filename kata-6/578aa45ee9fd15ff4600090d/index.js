const sortArray = nums => {
    const odds = nums.filter(n => n % 2).sort((a, b) => a - b)

    return nums.map(n => n % 2 ? odds.shift() : n)
}

export default sortArray
