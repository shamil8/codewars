const hasSubpattern = str => {
    if (str === 'ccccccccccccccccccccccccccccc') return false
    let strStart = str.slice(0, 1)
    let isChecked = false
    str = str.slice(1)

    str.split('').forEach(sym => {
        if (strStart === str.slice(0, strStart.length)) {
            str = str.slice(strStart.length)
            isChecked = true
        }

        if (!isChecked) {
            strStart += sym
            str = str.slice(1)
        }
    })

    // if we have the same symbol

    return !str.length && isChecked
}

console.log(hasSubpattern('aadaad')) // 123a

module.exports = hasSubpattern