const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold=0

const hasSubpattern = require('./index')

describe("Basic tests", function() {
    it("should test", function() {
        assert.equal("a", "a");
        assert.equal(hasSubpattern("aaaa"), "a");
        assert.equal(hasSubpattern("abcd"), "abcd");
        assert.equal(hasSubpattern("babababababababa"), "ab");
        assert.equal(hasSubpattern("bbabbaaabbaaaabb"), "ab");
        assert.equal(hasSubpattern("123a123a123a"), "123a");
        assert.equal(hasSubpattern("123A123a123a"), "111222333Aaa");
        assert.equal(hasSubpattern("12aa13a21233"), "123a");
        assert.equal(hasSubpattern("12aa13a21233A"), "111222333Aaaa");
        assert.equal(hasSubpattern("abcdabcaccd"), "aaabbccccdd");
    })
})