const isValidWalk = walk => {
    if (!walk || !walk.length || walk.length !== 10) { return false }

    return walk.reduce((acc, v, idx) => {
        acc[v === 'w' || v === 'e' ? 'w' : 's'] += v === 'w' || v === 's' ? 1 : -1

        return idx === walk.length - 1 ? Object.values(acc).filter(v => v !== 0).length === 0 : acc
    }, { w: 0, s: 0 })
}

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

export default bestIsValidWalk
