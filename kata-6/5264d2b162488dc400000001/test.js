import chai from 'chai'
import spinWords from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/5264d2b162488dc400000001',() => {
    it('Stop gninnipS My sdroW!',() => {
        assert.strictEqual(spinWords("Welcome"), "emocleW")
        assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")
        assert.strictEqual(spinWords("This is a test"), "This is a test")
        assert.strictEqual(spinWords("This is another test"), "This is rehtona test")
        assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test")
        assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more")
        assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one")
    });
});