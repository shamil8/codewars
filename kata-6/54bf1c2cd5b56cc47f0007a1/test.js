import chai from 'chai'
import duplicateCount from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/54bf1c2cd5b56cc47f0007a1', () => {
    it('Counting Duplicates\n', () => {
        Test.equal(duplicateCount(""), 0);
        Test.equal(duplicateCount("abcde"), 0);
        Test.equal(duplicateCount("aabbcde"), 2);
        Test.equal(duplicateCount("aabBcde"), 2,"should ignore case");
        Test.equal(duplicateCount("Indivisibility"), 1)
        Test.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    });
});