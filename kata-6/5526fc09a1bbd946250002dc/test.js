import chai from 'chai'
import findOutlier from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5526fc09a1bbd946250002dc', () => {
    it('Find The Parity Outlier', () => {
        Test.equal(findOutlier([0, 1, 2]), 1)
        Test.equal(findOutlier([1, 2, 3]), 2)
        Test.equal(findOutlier([2,6,8,10,3]), 3)
        Test.equal(findOutlier([0,0,3,0,0]), 3)
        Test.equal(findOutlier([1,1,0,1,1]), 0)

    })
})