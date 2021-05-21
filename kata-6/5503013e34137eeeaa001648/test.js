import chai from 'chai'
import diamond from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5503013e34137eeeaa001648', () => {
    it('Give me a Diamond\n', () => {
        Test.equal(diamond(1), "*\n")
        Test.equal(diamond(3), " *\n***\n *\n")
        Test.equal(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
        Test.equal(diamond(2), null)
        Test.equal(diamond(-3), null)
        Test.equal(diamond(0), null)
    })
})