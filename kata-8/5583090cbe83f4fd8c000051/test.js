import chai from 'chai'
import digitize from './index.js'

const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-8/5583090cbe83f4fd8c000051', () => {
    it('Digitize test', () => {
        assert.deepEqual(digitize(35231),[1, 3, 2, 5, 3])
    })
})