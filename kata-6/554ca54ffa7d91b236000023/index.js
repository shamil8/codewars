const deleteNth = (arr,n) => {
    return arr.reduce((acc, v) => {
        acc.filter(a => a === v).length < n && acc.push(v)

        return acc
    }, [])
}

export default deleteNth