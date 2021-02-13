hasSubpattern = (str) => {
    return str
        .toLowerCase()
        .split('')
        .filter((elm, index, arr) => arr.indexOf(elm) === index)
        .sort()
        .join('')
}

console.log(hasSubpattern('111222333Aaa')) // 123a

module.exports = hasSubpattern