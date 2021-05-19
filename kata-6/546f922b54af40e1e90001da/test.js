import chai from 'chai'
import alphabetPosition from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/546f922b54af40e1e90001da', () => {
    it('Replace With Alphabet Position', () => {
        assert.equal(alphabetPosition('The sunset sets at twelve o\' clock.'), '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11')
        assert.equal(alphabetPosition('The narwhal bacons at midnight.'), '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20')
    });
});