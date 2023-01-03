String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const recursiveFunc = (strArr, position = 0) => {
    const arrUnique = new Set();

    for (const str of strArr) {
        for(let i = 0; i < str.length - position; i++) {
            const modStr = str
                .replaceAt(position, str[i + position])
                .replaceAt(i + position, str[position]);

            arrUnique.add(modStr)

            if (modStr.slice(position, modStr.length).length === 1) {
                return [...strArr];
            }
        }
    }

    return recursiveFunc(arrUnique, position + 1)
}

function permutations(string) {
    return recursiveFunc([string]);
}

export default permutations
