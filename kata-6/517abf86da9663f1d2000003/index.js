const toCamelCase = str => str
    .split(/[_\/-]/)
    .map((w, i) => i ? w.charAt(0).toUpperCase() + w.slice(1) : w)
    .join('')

export default toCamelCase
