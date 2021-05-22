import chai from 'chai'
import strong from './index.js'

const Test = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-6/5a4d303f880385399b000001', () => {
    it('Strong Number (Special Numbers Series #2)', () => {})
    it("Testing for 1", () => {
        Test.equal(strong(1), "STRONG!!!!");
    });
    it("Testing for 2", () => {
        Test.equal(strong(2), "STRONG!!!!");
    });
    it("Testing for 145", () => {
        Test.equal(strong(145), "STRONG!!!!");
    });
    it("Testing for 7", () => {
        Test.equal(strong(7), "Not Strong !!");
    });
    it("Testing for 93", () => {
        Test.equal(strong(93), "Not Strong !!");
    });
    it("Testing for 185", () => {
        Test.equal(strong(185), "Not Strong !!");
    });
})