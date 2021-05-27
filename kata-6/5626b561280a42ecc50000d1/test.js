import chai from 'chai'
import sumDigPow from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5626b561280a42ecc50000d1', () => {
    it('Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!', () => {
        Test.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
        Test.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
        Test.deepEqual(sumDigPow(10, 100),  [89])
        Test.deepEqual(sumDigPow(90, 100), [])
        Test.deepEqual(sumDigPow(90, 150), [135])
        Test.deepEqual(sumDigPow(50, 150), [89, 135])
        Test.deepEqual(sumDigPow(10, 150), [89, 135])
    })

})