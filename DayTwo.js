 function firstLetterUpper(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}

console.log(firstLetterUpper("vikash tomar "));
// Expected output: "Vikash Tomar"
