const alphabetPosition = text => {
    const letters = text.toLowerCase().match(/[a-z]/g)

    return letters && letters.length ? letters.map(l => l.charCodeAt(0) - 96).join(' ') : ''
}

export default alphabetPosition
