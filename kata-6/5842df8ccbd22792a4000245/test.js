import chai from 'chai'
import expandedForm from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5842df8ccbd22792a4000245', () => {
    it('Write Number in Expanded Form', () => {
        Test.equal(expandedForm(12), '10 + 2');
        Test.equal(expandedForm(42), '40 + 2');
        Test.equal(expandedForm(70304), '70000 + 300 + 4');
    })

})