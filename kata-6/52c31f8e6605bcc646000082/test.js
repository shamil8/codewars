import chai from 'chai'
import twoSum from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/52c31f8e6605bcc646000082', () => {
    it('Two Sum', () => {

        function numericalCompare(a, b) {
            return a - b;
        }

        Test.deepEqual(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
        Test.deepEqual(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
        Test.deepEqual(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);
    })
})