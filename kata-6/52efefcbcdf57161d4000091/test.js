import chai from 'chai'
import count from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/52efefcbcdf57161d4000091', () => {
    it('Count characters in your string', () => {
        Test.deepEqual(count("aba"), { a: 2, b: 1 });
        Test.deepEqual(count(""), {});
    })
})