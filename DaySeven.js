 // **Challenge 7**
// Write a JavaScript program to check a pair of numbers and return true
//  if one of the numbers is 50 or if their sum is 50.

function paircheckfor50(num, num2) {
  if (num === 50) {
    return true;
  } else if (num2 === 50) {
    return true;
  } else if (num + num2 == 50) {
    return true;
  } else {
    return false;
  }
}

console.log(paircheckfor50(50));

console.log(paircheckfor50(30,20));

console.log(paircheckfor50(25,24));
