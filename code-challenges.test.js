// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
  // Pseudocode:
    // Given an array of objects as an input
    // Create a describe function named "outcomeSentences" that takes an array as an input
    // Use the .map() method to iterate over every object in the "people" array and to create a new array of sentences
    // For each person, the .map() method is using split to put the string into an array of words
    // We will use .toUpperCase to capitalize each first letter of the word
    // We will use .join() method to join the words back into a string
    // Map returns a string that combines the capitalized name with the occupation of that person in the sentence
    // Function returns an array of sentences for each person in the original array with their name capitalized and occupation included

      describe("outcomeSentences", () => {
        const people = [
          { name: "ford prefect", occupation: "a hitchhiker" },
          { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
          { name: "arthur dent", occupation: "a radio employee" }
        ]
        it("returns an array with a sentence about each person with their name capitalized", () => {
          const expectedOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
          const theResult = outcomeSentences(people)
          expect(theResult).toEqual(expectedOutput)
        })
      }) // output: ReferenceError: outcomeSentences is not defined
        //     7 |     it("returns an array with a sentence about each person with their name capitalized", () => {
        //     8 |       const expectedOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
        //  >  9 |       const theResult = outcomeSentences(people)
        //       |                         ^
        //    10 |       expect(theResult).toEqual(expectedOutput)
        //    11 |     })
        //    12 |   })

        //    at Object.outcomeSentences (Desktop/week-6-assessment-NikkiDunlap/jest.test.js:9:25)  

    // b) Create the function that makes the test pass.
    const outcomeSentences = (array) => {
      return array.map(person => {
        const name = person.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
          return `${name} is ${person.occupation}.`
        })
      } // output:
          //  PASS  Desktop/week-6-assessment-NikkiDunlap/jest2.test.js
          //   outcomeSentences
          //   ✓ returns an array with a sentence about each person with their name capitalized (1 ms)

          // Test Suites: 1 passed, 1 total
          // Tests:       1 passed, 1 total
          // Snapshots:   0 total
          // Time:        0.171 s
          // Ran all test suites matching /jest2.test.js/i.
          // ✨  Done in 4.40s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
      // Pseudocode:
        // Given an array with mixed datatypes
        // Create describe function called "remaindersByThree"
        // Create an empty array called "ourResult" to keep the remainder values for each number in the given array when it is divided by 3
        // Use .toEqual() method to compare the actual output to the expected output that was given to us
        // Use a "for" loop to iterate over each elemet in the given arrays
        // Use typeof to check to see if it is a number or not
        // If it is a number, the function will calculate the remainder using the (% 3) then it will add that value to the ourResult array using .push()
        // The .push() method will add the new numbers to the end of the array, then we will be able to see the new length
        // Function returns an array of only the remainders of the numbers when divided by 3

// a) Create a test with an expect statement using the variables provided.
describe("remaindersByThree", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  expect(remaindersByThree(hodgepodge1)).toEqual([2, 0, -1, 0])
  expect(remaindersByThree(hodgepodge2)).toEqual([2, 1, -1])
})
      }) //output: ReferenceError: remaindersByThree is not defined
      //   25 |   // Expected output: [ 2, 1, -1 ]
      //   26 |   it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      // > 27 |     expect(remaindersByThree(hodgepodge1)).toEqual([2, 0, -1, 0])
      //      |     ^
      //   28 |     expect(remaindersByThree(hodgepodge2)).toEqual([2, 1, -1])
      //   29 |   })
      //   30 |   })

      //   at Object.expect (Desktop/week-6-assessment-NikkiDunlap/jest2.test.js:27:5)

// b) Create the function that makes the test pass.
const remaindersByThree = (array) => {
  const ourResult = []
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      ourResult.push(array[i] % 3);
    }
  }
  return ourResult;
} //output:
    // PASS  Desktop/week-6-assessment-NikkiDunlap/jest2.test.js
    //   remaindersByThree
    //     ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.174 s, estimated 1 s
    // Ran all test suites matching /jest2.test.js/i.
    // ✨  Done in 4.37s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
  // Pseudocode:
    // Given 2 variables 
    // Create a describe function named "cubeAndSum"
    // Use cubeAndSum1 & cubeAndSum2 arrays as arguments 
    // Create 2 test cases using the given arrays
    // Create an "it" function for each test case
    // The first test case is testing to make sure that the output is equal to 99
    // The second test case is testing to make sure the output is 1125
    // Use a "for" loop to iterate through each element of the given arrays
    // Calculate the cube and sum of the current element by multiplying the element by itself three times
    // The result is added to the sum variable
    // Function returns the sum of all of the numbers cubed

      // a) Create a test with an expect statement using the variables provided.
      describe("cubeAndSum", () => {
        const cubeAndSum1 = [2, 3, 4]
        // Expected output: 99
        const cubeAndSum2 = [0, 5, 10]
        // Expected output: 1125
        it("returns the sum of all the numbers cubed for the array [2, 3, 4]", () => {
          expect(cubeAndSum(cubeAndSum1)).toEqual(99)
        })
        it("returns the sum of all the numbers cubed for the array [0, 5, 10", () => {
          expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
        })
      }) //output: 
          //   ReferenceError: cubeAndSum is not defined

          //     49 |     })
          //     50 |     it("returns the sum of all the numbers cubed for the array [0, 5, 10", () => {
          //   > 51 |       expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
          //        |       ^
          //     52 |     })
          //     53 |   })
          //     54 |

          //     at Object.expect (Desktop/week-6-assessment-NikkiDunlap/jest2.test.js:51:7)

          // Test Suites: 1 failed, 1 total
          // Tests:       2 failed, 2 total
          // Snapshots:   0 total
          // Time:        0.188 s, estimated 1 s

// b) Create the function that makes the test pass.
const cubeAndSum = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i] * array[i]
  }
  return sum
} //output: 
    // PASS  Desktop/week-6-assessment-NikkiDunlap/jest2.test.js
    // cubeAndSum
    //   ✓ returns the sum of all the numbers cubed for the array [2, 3, 4] (1 ms)
    //   ✓ returns the sum of all the numbers cubed for the array [0, 5, 10

    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total
    // Snapshots:   0 total
    // Time:        0.183 s, estimated 1 s
    // Ran all test suites matching /jest2.test.js/i.
    // ✨  Done in 4.97s.
