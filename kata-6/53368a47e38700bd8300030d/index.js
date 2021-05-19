const list = n => n
    .map((o, i) => o.name + (i === n.length - 2 ? ' & ' : i !== n.length - 1 ? ', ' : ''))
    .join('')

export default list
