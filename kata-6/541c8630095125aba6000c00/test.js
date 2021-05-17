import chai from 'chai'
import sumOfDigits from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe("Tests", () => {
    it("test", () => {
        Test.strictEqual( sumOfDigits(16), 7 )
        Test.strictEqual( sumOfDigits(456), 6 )
    })
})
