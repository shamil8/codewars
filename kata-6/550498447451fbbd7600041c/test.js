import chai from 'chai'
import comp from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/550498447451fbbd7600041c', () => {
    it('Are they the "same"?', () => {
        const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        Test.equal(comp(a1, a2), true);
    })
})