const hasSubpattern = (str) => {
    return str
        .toLowerCase()
        .split('')
        .filter((elm, index, arr) => arr.indexOf(elm) === index)
        .sort()
        .join('')
}

export default hasSubpattern