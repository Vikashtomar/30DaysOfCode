// **Challenge 9**  
// Write a JavaScript function to find the first not repeated character.  
// Sample arguments : 'abacddbec'  
// Expected output : 'e'

function firstnotRepeat(str) {
    return [...str].find(char => str.indexOf(char) === str.lastIndexOf(char));
  }
  
  const inputStr = 'abacddbec';
  const result =  firstnotRepeat(inputStr);
  console.log('First non-repeated character:', result);
  
  