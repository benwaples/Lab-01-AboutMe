// IMPORT MODULES under test here:
import { translateToAYes } from '../translateToAYes.js';

const test = QUnit.test;

test('given a string, the function should return true if the string evaluates to something similar to yes.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'y';
    const word3 = 'yeeee';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = translateToAYes(word1);
    const actual2 = translateToAYes(word2);
    const actual3 = translateToAYes(word3);

   

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});

test('given a string, the function should return false if the string evaluates to anything that doesnt start with Y.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'baaark';
    const word2 = 'never';
    const word3 = '44';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = translateToAYes(word1);
    const actual2 = translateToAYes(word2);
    const actual3 = translateToAYes(word3);
   

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});