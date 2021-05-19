import chai from 'chai'
import toCamelCase from './index.js'

const Test = chai.assert
chai.config.truncateThreshold = 0

describe('Basic tests for kata-6/517abf86da9663f1d2000003', () => {
    it('Convert string to camel case', () => {
        Test.equal(toCamelCase(''), '', "An empty string was provided but not returned")
        Test.equal(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
        Test.equal(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
        Test.equal(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

    })
})