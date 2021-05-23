import chai from 'chai'
import countSmileys from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/583203e6eb35d7980400002a', () => {
    it('Count the smiley faces!', () => {
        Test.equal(countSmileys([]), 0);
        Test.equal(countSmileys([':D',':~)',';~D',':)']), 4);
        Test.equal(countSmileys([':)',':(',':D',':O',':;']), 2);
        Test.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    })

})