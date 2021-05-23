const countSmileys = arr => (arr.join().match(/[:|;]+[\-|~]*[)|D]+/g) || []).length

export default countSmileys