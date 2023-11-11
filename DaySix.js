/** @format */

// **Challenge 6**
// Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are the same, then return triple their sum.

function sumOfnumber(a,b){

    if(a == b){
        return 3 * (a+b)
    }
    else {
        return a+b
    }

}
 let result = sumOfnumber(5,5)
 console.log(result)
 



