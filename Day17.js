// **Challenge 17**
// Problem Description:
// Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.
// Inputs:
// An array of numbers.
// Outputs:
// An array of numbers without odd numbers.
// Hints:
// Use the filter() method to create a new array with all elements that pass the test implemented by the provided function.
// Solution Approach:
// Use the filter() method and provide a callback that checks if the number is even.

  
function filterOutOdd(nums){
    let result = nums.filter( num => num %2 == 0)
    return result   

}

let numbers = [1,2,3,4,5,6,7,8]
console.log(filterOutOdd(numbers))
 

