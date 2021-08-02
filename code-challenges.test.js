// ASSESSMENT 3: Coding practical questions with Jest

const { typeOf } = require("react-is")

// const { expect } = require("@jest/globals")
// const { test } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

//Testing inverse of fibonacci sequnce on a set of numbers
test("returns the array that composes a number of the fibonacci sequence. ",()=>{
    expect(fibonnaciComposure(6).toEqual( [1, 1, 2, 3, 5, 8 ]))
    expect(fibonnaciComposure(10).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]))
})   
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.
// fibbonacci sequence takes in an array of numbers and creates a set 
// 1,2,3,4 would be 0 + 1 = 1 + 1 = 2 + 1 = 3 + 2 = 5 + 3 = 8 + 5 = 13
// the function will take in a single integer input and output its broken down fibonacci place
// if i pass in 6 it will ITERATE the fibo sequence 6 times returning the related number

 const fibonnaciComposure = (int) => {
    var ansArray = [1] 
    var x = 0 
    var x2 = 1
  if (int > 1){
    for (let i = 1; i < int; i++) {
        var ans = x + x2 // sets the initial answer to 1 starting the fib seq
        x = x2           // sets x equal to the second place x  0 + 1 would make the x2 eqaul to 1
        x2 = ans        // sets answer equal to ans to move forward by 1 on the fib index
        ansArray.push(ans)
        return ansArray       // im confused it fails the first test however my answer is copied and pasted into .toEqual.
        }
    }else{
        return ansArray = [1]
    }    
}


// for (let i= 0; i < int; i++) {
//     let fiboSeq =+ prev + secondPrev
//     console.log(fiboSeq)
// } Initial thought process was to iterate throughout the entire sequence. 

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
test("returns the array that composes a number of the fibonacci sequence. ",()=>{
    expect(leastToGreatOdd(fullArr1).toEqual([-9, 7, 9, 199]))
    expect(leastToGreatOdd(fullArr2).toEqual([-823, 7, 23]))
}) 

// b) Create the function that makes the test pass.
// create a function that takes in an array and first pick ONLY numbers
// then sort those number from least to greatest using sort function.
// finally filter the array so it only shows odd using n % 2 != 0
const leastToGreatOdd = (array) => {
        let numberArray = array.filter(value => {
           return typeof(number) === true
        })
        // let leastToGreatest = numberArray.sort((a,b)=> a-b)
        console.log(numberArray)

}



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []
test("returns the array that composes a number of the fibonacci sequence. ",()=>{
    expect(summation(numbersToAdd1).toEqual([2, 6, 51, 60]))
    expect(summation(numbersToAdd2).toEqual([0, 7, -8, 12]))
    expect(summation(numbersToAdd3).toEqual([]))
})


// b) Create the function that makes the test pass.
//create and array that adds each number to its next index.
// this can be done using the fibonnaci sequence and taking in an array and iterating through the array while taking the previous index of each array.
// using the 1st index setting it to 0 then updating it from there (however here is also my problem i dont understand how to have it update.)
const summation = (array) => {
    for (let index = 0; index < array.length; index++) {
        let x = array[index]           // sets x equal to the second place x  0 + 1 would make the x2 eqaul to 1
        let x2 = 0                      // placement of this takes care of the initial undefined issue
        let sum = x + x2                // this adds together each number in the array
        x2 = array[index - 1]           // this then sets the index equal 

        console.log ("1st",array[index])
        console.log ('2nd',array[index - 1])
        console.log ("sum",sum)
        
    }
}