import chai from 'chai'
import songDecoder from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/551dc350bf4e526099000ae5', () => {
    it('Dubstep', () => {
        Test.equal(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
        Test.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
        Test.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");

    })
})