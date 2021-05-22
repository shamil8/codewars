import chai from 'chai'
import countBits from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/526571aae218b8ee490006f4', () => {
    it('Bit Counting', () => {
        assert.strictEqual(countBits(0), 0);
        assert.strictEqual(countBits(4), 1);
        assert.strictEqual(countBits(7), 3);
        assert.strictEqual(countBits(9), 2);
        assert.strictEqual(countBits(10), 2);
    })
})