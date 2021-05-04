import chai from 'chai'
import hasSubpattern from './index.js'

const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Basic tests", () => {
    it("should test", () => {
        assert.equal(hasSubpattern("a"), false)
        assert.equal(hasSubpattern("aaaa"), true)
        assert.equal(hasSubpattern("abcd"), false)
        assert.equal(hasSubpattern("abababab"), true)
        assert.equal(hasSubpattern("ababababa"), false)
        assert.equal(hasSubpattern("123a123a123a"), true)
        assert.equal(hasSubpattern("123A123a123a"), false)
        assert.equal(hasSubpattern("abbaabbaabba"), true)
        assert.equal(hasSubpattern("abbabbabba"), false)
        assert.equal(hasSubpattern("abcdabcabcd"), false)
    })
})