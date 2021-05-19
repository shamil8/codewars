import chai from 'chai'
import uniqueInOrder from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/546f922b54af40e1e90001da', () => {
    it('Replace With Alphabet Position', () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
        assert.deepEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
        assert.deepEqual(uniqueInOrder([1,2,2,3,3]), [1,2,3])
    });
});