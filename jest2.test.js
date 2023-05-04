// describe("outcomeSentences", () => {
//     const people = [
//       { name: "ford prefect", occupation: "a hitchhiker" },
//       { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//       { name: "arthur dent", occupation: "a radio employee" }
//     ]
//     it("returns an array with a sentence about each person with their name capitalized", () => {
//       const expectedOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//       const theResult = outcomeSentences(people)
//       expect(theResult).toEqual(expectedOutput)
//     })
//   })

//   const outcomeSentences = (array) => {
//     return array.map(person => {
//       const name = person.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
//         return `${name} is ${person.occupation}.`
//       })
//     }

// describe("remaindersByThree", () => {
//     const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//   // Expected output: [ 2, 0, -1, 0 ]
//     const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//   // Expected output: [ 2, 1, -1 ]
//   it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//     expect(remaindersByThree(hodgepodge1)).toEqual([2, 0, -1, 0])
//     expect(remaindersByThree(hodgepodge2)).toEqual([2, 1, -1])
//   })
//   }) 

//   const remaindersByThree = (array) => {
//     const ourResult = []
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === 'number') {
//         ourResult.push(array[i] % 3);
//       }
//     }
//     return ourResult;
//   }

// describe("cubeAndSum", () => {
//     const cubeAndSum1 = [2, 3, 4]
//     // Expected output: 99
//     const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
//     it("returns the sum of all the numbers cubed for the array [2, 3, 4]", () => {
//       expect(cubeAndSum(cubeAndSum1)).toEqual(99)
//     })
//     it("returns the sum of all the numbers cubed for the array [0, 5, 10", () => {
//       expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
//     })
//   }) 

//   const cubeAndSum = (array) => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i] * array[i] * array[i]
//     }
//     return sum
//   }

