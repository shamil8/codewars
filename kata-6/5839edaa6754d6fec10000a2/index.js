const findMissingLetter = letters => String.fromCharCode(letters
        .findIndex((l, i) => l.charCodeAt(0) - letters[0].charCodeAt(0) !== i) + letters[0].charCodeAt(0))

export default findMissingLetter