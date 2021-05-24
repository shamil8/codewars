import chai from 'chai'
import inArray from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/550554fd08b86f84fe000a58', () => {
    it('Which are in?', () => {
        const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

        let a1 = ["xyz", "live", "strong"]
        Test.deepEqual(inArray(a1, a2), ["live", "strong"])
        a1 = ["live", "strong", "arp"]
        Test.deepEqual(inArray(a1, a2), ["arp", "live", "strong"])
        a1 = ["tarp", "mice", "bull"]
        Test.deepEqual(inArray(a1, a2), [])
    })

})