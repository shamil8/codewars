import chai from 'chai'
import isValidWalk from './index.js'

chai.config.truncateThreshold = 0
const Test = chai

describe('Basic tests for kata-6/54da539698b8a2ad76000228', () => {
    it('Take a Ten Minute Walk', () => {
        Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true')
        Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false')
        Test.expect(!isValidWalk(['w']), 'should return false')
        Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false')
    })
})