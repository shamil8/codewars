const lastSurvivors = (str, i = 0) => {
    const arr = [...str]
    const el = str[i]
    const firstIdx = str.indexOf(el)
    const lastIdx = str.lastIndexOf(el)

    if (firstIdx === lastIdx) {
        return arr.every(v => str.indexOf(v) === str.lastIndexOf(v)) ? str : lastSurvivors(str, i + 1)
    }

    arr[lastIdx] = String.fromCharCode(el.charCodeAt(0) === 122 ? 97 : el.charCodeAt(0) + 1)
    arr.splice(firstIdx, 1)

    return lastSurvivors(arr.join(''), 0)
}

export default lastSurvivors