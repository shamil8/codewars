import chai from 'chai'
import list from './index.js'

const Test = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-6/53368a47e38700bd8300030d', () => {
    it('Format a string of names like \'Bart, Lisa & Maggie\'.', () => {
        Test.equal(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
            "Must work with many names")
        Test.equal(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
            "Must work with many names")
        Test.equal(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa',
            "Must work with two names")
        Test.equal(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
        Test.equal(list([]), '', "Must work with no names")
    })
})