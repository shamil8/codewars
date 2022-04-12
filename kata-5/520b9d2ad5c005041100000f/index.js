const pigIt = (str) => {
    const words = str.split(' ')
    let wordsStr = ''

    for (const word of words) {
        const [firstLetter, ...letters] = word

        letters.push(`${firstLetter + (/^[a-zA-Z]+$/.test(word) ? 'ay' : '')}`)
        wordsStr += `${(wordsStr && ' ') + letters.join('')}`
    }

    return wordsStr
}

/*** Best practice* */
const pigItBest = s => s.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3')

export default pigIt
