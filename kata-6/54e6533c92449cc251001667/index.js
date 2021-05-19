const uniqueInOrder = iter => [...iter].filter((val, idx, arr) => val !== arr[idx - 1])

export default uniqueInOrder
