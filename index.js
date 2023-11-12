
// function getFileExtension(filename){
// const extension = filename.split('.').pop();
// return extension;

// }
// //pass file name

// let result = getFileExtension('../vikash.txt');
// console.log(result)


// reverse a number


function reversenum(num){
    let reversed = 0;
        while(num > 0){
        reversed=   (reversed * 10)+ (num %10);
      num =   Math.floor(num/10)
    }
    return reversed

}
  let result = reversenum(123)

  console.log("result",result)