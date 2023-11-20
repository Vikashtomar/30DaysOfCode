// **Challenge 15**
// Problem Description -
// create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']

function chopStr(str,size){
    if(size == null) return [str];
    let result = [];
    for(let i=0; i<str.length; i++){
        result.push(str.slice(i, i + size));
    }
    return result;
}
console.log(chopStr("javascript",1));
console.log(chopStr("Scaler"));
console.log(chopStr("Scaler",2));
