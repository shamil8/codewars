import chai from 'chai'
import solution from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

function test(n, expected) {
    let actual = solution(n)
    it(`Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected)
    })
}

describe("Basic tests for kata-6/Multiples of 3 or 5", function(){
    test(10,23)
})
