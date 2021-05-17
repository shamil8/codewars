import chai from 'chai'
import findOdd from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

function doTest(a, n) {
    console.log('A = ', a)
    console.log('n = ', n)
    assert.equal(findOdd(a), n)
}

describe('Basic tests for kata-6/findOdd', () => {
    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
})