import chai from 'chai'
import findUniq from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/585d7d5adb20cf33cb000235', () => {
    it('Find the unique number', () => {
        Test.equal(findUniq([ 0, 1, 0 ]), 1);
        Test.equal(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
        Test.equal(findUniq([ 3, 10, 3, 3, 3 ]), 10);
    })
})