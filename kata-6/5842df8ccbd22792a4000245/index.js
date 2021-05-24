const expandedForm = n => [...String(n)]
    .reduce((a, v, i, s) => +v === 0 ? a : a + (i === 0 ? '' : ' + ') + v + '0'.repeat(s.length - i - 1), '')

export default expandedForm