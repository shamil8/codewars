const solution = (list) => {
    let range = ''
    let isFirst = true

    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 === list[i + 1]) {
            if (isFirst) {
                range += list[i]
                isFirst = false
            }
        }
        else {
            const startRange = range.split(',').pop()
            range += (startRange && list[i] !== Number(startRange) + 1 ? '-' : `${startRange && ','}`)
                + `${list[i] + (list[i] !== list[list.length - 1] && ',')}`
            isFirst = true
        }
    }

    return range
}

export default solution
