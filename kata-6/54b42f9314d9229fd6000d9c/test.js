import chai from 'chai'
import duplicateEncode from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/54b42f9314d9229fd6000d9c', () => {
    it('Duplicate Encoder', () => {
        Test.equal(duplicateEncode("din"),"(((")
        Test.equal(duplicateEncode("recede"),"()()()")
        Test.equal(duplicateEncode("Success"),")())())","should ignore case")
        Test.equal(duplicateEncode("(( @"),"))((")
    });
});