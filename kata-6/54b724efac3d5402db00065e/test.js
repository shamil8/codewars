import chai from 'chai'
import decodeMorse from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/decodeMorse', () => {
    it('should test', () => {
        assert.equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    })

    it('My own tests', () => {
        // Add more tests here
        // assert.equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    })
})
