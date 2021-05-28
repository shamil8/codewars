import chai from 'chai'
import lastSurvivors from './index.js'

chai.config.truncateThreshold = 0
const assert = chai.assert

describe('Basic tests for kata-6/60a1aac7d5a5fc0046c89651', () => {
    it('Last Survivors Ep.2\n', () => {})

})

const isValid = (v) => {
    if (typeof v !== 'string') assert.fail(`expected a string but got ${JSON.stringify(v)}`);
    else return v;
};

describe("Sample", function () {
    it(`given abaa`, function () {
        let userResult = isValid(lastSurvivors('abaa'));
        assert.strictEqual(userResult.split('').sort().join(''), 'ac')
    })
    it(`given zzab`, function () {
        let userResult = isValid(lastSurvivors('zzab'));
        assert.strictEqual(userResult.split('').sort().join(''), 'c')
    })
})

describe("Zero Length", function () {
    it(`given`, function () {
        let userResult = isValid(lastSurvivors(''));
        assert.strictEqual(userResult.split('').sort().join(''), '')
    })
})

describe("New Edge", function () {
    it(`given xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh`, function () {
        let userResult = isValid(lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'));
        assert.strictEqual(userResult.split('').sort().join(''), 'acdeghlmnqrvyz')
    })
})