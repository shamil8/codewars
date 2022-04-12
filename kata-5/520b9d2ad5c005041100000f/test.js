import chai from 'chai'
import pigIt from './index.js'

const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-5/520b9d2ad5c005041100000f Simple Pig Latin', () => {
    it('should test', () => {
        assert.equal(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
        assert.equal(pigIt('Hello world !'), 'elloHay orldway !')
    })
})
