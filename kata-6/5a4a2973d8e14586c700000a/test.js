import chai from 'chai'
import hasSubpattern from './index.js'

const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-6/hasSubpatternThird', () => {
    it('should test', () => {
        assert.equal("a", "a")
        assert.equal(hasSubpattern("aaaa"), "a")
        assert.equal(hasSubpattern("abcd"), "abcd")
        assert.equal(hasSubpattern("babababababababa"), "ab")
        assert.equal(hasSubpattern("bbabbaaabbaaaabb"), "ab")
        assert.equal(hasSubpattern("123a123a123a"), "123a")
        assert.equal(hasSubpattern("123A123a123a"), "111222333Aaa")
        assert.equal(hasSubpattern("12aa13a21233"), "123a")
        assert.equal(hasSubpattern("12aa13a21233A"), "111222333Aaaa")
        assert.equal(hasSubpattern("abcdabcaccd"), "aaabbccccdd")
    })
})