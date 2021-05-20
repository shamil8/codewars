const isValidWalk = walk => walk
    .reduce((acc, v, i) => {
        acc[v === 'w' || v === 'e' ? 'x' : 'y'] += v === 'w' || v === 's' ? 1 : -1

        return i === walk.length - 1 ? walk.length === 10 && acc.x === 0 && acc.y === 0 : acc
    }, { x: 0, y: 0 })

const bestIsValidWalk = walk => {
    let dx = 0
    let dy = 0

    for (const w of walk) {
        switch (w) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return walk.length === 10 && dx === 0 && dy === 0
}

export default isValidWalk
