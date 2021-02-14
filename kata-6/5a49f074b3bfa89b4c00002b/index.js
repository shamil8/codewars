const hasSubpattern = str => {
    if (str.length <= 1) return false

    const regex = new RegExp(`^(${str.slice(0, 1)})+`, 'g')
    let [ strStart ] = str.match(regex)
    let isChecked = false
    str = str.slice(strStart.length)

    if (!str.length) return true

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

    return !str.length && isChecked
}

console.log(hasSubpattern('aaaaadaaaaad')) // true

module.exports = hasSubpattern