const inArray = (a1, a2) => a1.filter(s => a2.some(w => w.includes(s))).sort()

export default inArray