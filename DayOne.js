// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223;


function reverseNum(num){
    let reversed = 0;
    while(num > 0){
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
        
    }
    return reversed;
    } 
    let x = 32243;
    let revx = reverseNum(x)
    console.log(revx)



 