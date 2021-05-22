const isPrime = n => {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) { return false }
    }

    return n > 1
}

export default isPrime