import chai from 'chai'
import digPow from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5552101f47fc5178b1000050', () => {
    it('Playing with digits', () => {
        Test.equal(digPow(89, 1), 1)
        Test.equal(digPow(92, 1), -1)
        Test.equal(digPow(46288, 3), 51)
    })
})