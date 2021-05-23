import chai from 'chai'
import findEvenIndex from './index.js'

chai.config.truncateThreshold = 0
const Test = chai.assert

describe('Basic tests for kata-6/5679aa472b8f57fb8c000047', () => {
    it('Equal Sides Of An Array', () => {
        Test.equal(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
        Test.equal(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
        Test.equal(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
        Test.equal(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
    })

    describe("FindEvenIndex", function() {
        it("Tests", function() {
            Test.equal(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
            Test.equal(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
            Test.equal(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
            Test.equal(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
            Test.equal(findEvenIndex([20,10,-80,10,10,15,35]),0, "The array was: [20,10,-80,10,10,15,35] \n");
            Test.equal(findEvenIndex([10,-80,10,10,15,35,20]),6, "The array was: [10,-80,10,10,15,35,20] \n");
            Test.equal(findEvenIndex([8,8]), -1, 'The array was: [8,8]');
            Test.equal(findEvenIndex([8,0]), 0, 'The array was: [8,0]');
            Test.equal(findEvenIndex([0,8]), 1, 'The array was: [0,8]');
            Test.equal(findEvenIndex([7,3,-3]), 0, 'The array was: [7,3,-3]');
            Test.equal(findEvenIndex([8]), 0, 'The array was: [8]');
        });
    });
    describe("50 Random tests",function() {
        //----------------
        function randint(a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a);
        }
        function findEvenIndexT(arr)
        {
            for (let i = 0; i < arr.length; i++)
            {
                let list1 = arr.slice(0, i);
                let list2 = arr.slice(i+1, arr.length);
                if (addArrayT(list1) == addArrayT(list2))
                {
                    return i;
                }
            }
            return -1;
        }
        function addArrayT(arr)
        {
            let sum = 0;
            for (let i = 0; i < arr.length; i++)
            {
                sum += arr[i];
            }
            return sum;
        }
        //----------------
        for (let i = 0; i < 50; i++) {
            let tOrF = randint(1,2);
            let rando = randint(2,500);
            let index = 0;
            let output = [];
            for (let j = 0; j<rando; j++)
            {
                let x = randint(-10000, 10000);
                output.push(x);
            }
            if(tOrF == 1)
            {
                index = randint(1,output.length-1);
                let list1 = output.slice(0, index);
                let list2 = output.slice(index+1, output.length);
                output.push(addArrayT(list1)-addArrayT(list2));
            }
            let duplicate = output.slice(0);
            it("Random Testing", function() {
                    Test.equal(findEvenIndex(duplicate), findEvenIndexT(output), "Your answer failed on: " + output.toString() + "\n");
                }
            )}
    })
})