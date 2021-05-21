import chai from 'chai'
import './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/587731fda577b3d1b0001196', () => {
    it('CamelCase Method', () => {
        Test.equal("test case".camelCase(), "TestCase");
        Test.equal("camel case method".camelCase(), "CamelCaseMethod");
        Test.equal("say hello ".camelCase(), "SayHello");
        Test.equal(" camel case word".camelCase(), "CamelCaseWord");
        Test.equal("".camelCase(), "");

    })
})