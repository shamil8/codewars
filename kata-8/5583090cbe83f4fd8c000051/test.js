const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold=0

const digitize = require('./index')

describe("Basic tests", function() {
    it("should test", function() {
        assert.deepEqual(digitize(35231),[1,3,2,5,3])
    })
})