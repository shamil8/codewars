import chai from 'chai'
import deleteNth from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/554ca54ffa7d91b236000023', () => {
    it('Delete occurrences of an element if it occurs more than n times', () => {
        Test.deepEqual(deleteNth([20,37,20,21], 1), [20,37,21])
        Test.deepEqual(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
    })

})