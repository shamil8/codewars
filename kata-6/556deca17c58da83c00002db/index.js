const tribonacci = (signature, n) => {
    if (n <= 3) { return n === 0 ? [] : signature.slice(0, n) }

    signature.push(signature.slice(-3).reduce((a, v) => a + v, 0))

    return n === 4 ? signature : tribonacci(signature, n - 1)
}

const bestTribonacci = (signature,n) => {
    for (let i = 0; i < n-3; i++) { // iterate n times
        signature.push(signature[i] + signature[i+1] + signature[i+2]) // add last 3 array items and push to trib
    }

    return signature.slice(0, n) //return trib - length of n
}

export default tribonacci