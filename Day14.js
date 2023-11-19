// **Challenge 14**
// Write a JavaScript function to concatenate a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// Outputs
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"



function repeatStr(str, n = 1) {
    return str.repeat(n);
  }
  
  console.log(repeatStr('Ha!'));
  console.log(repeatStr('Ha!', 2));
  console.log(repeatStr('Ha!', 3));
  