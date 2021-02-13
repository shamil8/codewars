const hasSubpattern = str => {
    const symbols = str.split('')
    let strStart = symbols.shift()

    let tmpArr = symbols
    let isChecked = false

    symbols.forEach(symbol => {
        if (strStart.split('').every((sym, idx) => sym === tmpArr[idx])) {
            isChecked = true
            tmpArr = tmpArr.slice(strStart.length)
        }

        if (!isChecked) {
            strStart += symbol
            tmpArr = tmpArr.slice(1)
        }
    })

    return !tmpArr.length && isChecked
}

console.log(hasSubpattern('abab')) // 123a

module.exports = hasSubpattern