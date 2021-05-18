import chai from 'chai'
import iqTest from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/552c028c030765286c00007d', () => {
    it('IQ Test', () => {
        Test.equal(iqTest('2 4 7 8 10'),3)
        Test.equal(iqTest('1 2 2'), 1)

    })
})
