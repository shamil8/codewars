import chai from 'chai'
import sortArray from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/578aa45ee9fd15ff4600090d', () => {
    it('Sort the odd', () => {
        assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
        assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
        assert.deepEqual(sortArray([]),[])
    })
})