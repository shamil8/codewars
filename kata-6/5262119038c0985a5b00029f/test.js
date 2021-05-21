import chai from 'chai'
import isPrime from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5202ef17a402dd033c000009', () => {
    it("Basic tests", () => {

        Test.equal(isPrime(0),  false, "0 is not prime");
        Test.equal(isPrime(1),  false, "1 is not prime");
        Test.equal(isPrime(2),  true, "2 is prime");
        Test.equal(isPrime(73), true, "73 is prime");
        Test.equal(isPrime(75), false, "75 is not prime");
        Test.equal(isPrime(-1), false, "-1 is not prime");

    });

    it("Test prime", () => {

        Test.equal(isPrime(3),  true, "3 is prime");
        Test.equal(isPrime(5),  true, "5 is prime");
        Test.equal(isPrime(7),  true, "7 is prime");
        Test.equal(isPrime(41), true, "41 is prime");
        Test.equal(isPrime(5099), true, "5099 is prime");

    });

    it("Test not prime", () => {

        Test.equal(isPrime(4),  false, "4 is not prime");
        Test.equal(isPrime(6),  false, "6 is not prime");
        Test.equal(isPrime(8),  false, "8 is not prime");
        Test.equal(isPrime(9), false, "9 is not prime");
        Test.equal(isPrime(45), false, "45 is not prime");
        Test.equal(isPrime(-5), false, "-5 is not prime");
        Test.equal(isPrime(-8), false, "-8 is not prime");
        Test.equal(isPrime(-41), false, "-41 is not prime");

    });
})