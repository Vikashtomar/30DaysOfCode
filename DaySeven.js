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

console.log(paircheckfor50(25,2));
 

//  how to add "t" in my name after every letter in my name?
// **Challenge 8**
// Write a JavaScript program to add "t" after every letter in your name.
function addTAfterEachLetter(name) {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    result += name[i] + 't';
  }
  return result;
}

console.log(addTAfterEachLetter("John"));
console.log(addTAfterEachLetter("Jane"));
console.log(addTAfterEachLetter("vik"));

