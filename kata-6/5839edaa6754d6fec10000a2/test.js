import chai from 'chai'
import findMissingLetter from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5839edaa6754d6fec10000a2', () => {
    it('Find the missing letter', () => {
        Test.equal(findMissingLetter(['a','b','c','d','f']), 'e');
        Test.equal(findMissingLetter(['O','Q','R','S']), 'P');

    })
})