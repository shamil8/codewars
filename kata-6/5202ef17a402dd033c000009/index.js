const titleCase = (str, inc) => str
    .toLowerCase()
    .split(' ')
    .map((w, i) => inc && inc
        .toLowerCase()
        .split(' ')
        .includes(w) && i !== 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(' ')

export default titleCase