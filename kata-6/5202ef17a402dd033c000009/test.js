import chai from 'chai'
import titleCase from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5202ef17a402dd033c000009', () => {
    it('Title Case', () => {
        Test.equal(titleCase(''), '')
        Test.equal(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
        Test.equal(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
        Test.equal(titleCase('the quick brown fox'), 'The Quick Brown Fox')
    })
})