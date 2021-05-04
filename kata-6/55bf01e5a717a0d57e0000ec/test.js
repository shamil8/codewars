import chai from 'chai'
import persistence from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/persistence', () => {
    it('should test', () => {
        assert.equal(persistence(39), 3)
        assert.equal(persistence(4), 0)
        assert.equal(persistence(25), 2)
        assert.equal(persistence(999), 4)
    })
})