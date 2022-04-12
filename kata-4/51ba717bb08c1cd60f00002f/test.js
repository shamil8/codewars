import chai from 'chai'
import solution from './index.js'

const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-6/51ba717bb08c1cd60f00002f Range Extraction', () => {
    it('should test', () => {
        assert.equal(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), '-6,-3-1,3-5,7-11,14,15,17-20')
    })
})
