
// // function getFileExtension(filename){
// // const extension = filename.split('.').pop();
// // return extension;

// // }
// // //pass file name

// // let result = getFileExtension('../vikash.txt');
// // console.log(result)


// // reverse a number


// //  function reverseA_Num(num){
// //   let reversed = 0;
// //   while(num > 0){
// //     reversed = num * 10 + (num%10)
// //     num = Math.floor(num/10)
// //   }
// //   return reversed;

// //  }
// //   let result = reverseA_Num(321);
// //   console.log(result)


// // let items = ["🍎","🍌","🍊","🥭","🍇"]
// // console.log(items)
// // console.log("Practice Start");


// // console.log("write a program to find short str from an array");

// let names = ["seeta","geeta","ram","shayam"];
//  let shortName = names[0]

//   for(let i=0; i<names.length; i++){
//     if(names[i].length < shortName.length){

//         shortName = names[i]
//     }
//   }


// console.log(shortName)
 


// function y(){
//   let p = 10;
//   function z(){
//     p = 20;
//     return p;
//   }
//   p= 30;
//   return z;
// }
// const x = y();
// console.log(x());

 
//  console.log("kk")
// let result = getFileExtension('../vikash.txt');
// console.log(result)


// reverse a number


// function reversenum(num){
//     let reversed = 0;
//         while(num > 0){
//         reversed=   (reversed * 10)+ (num %10);
//       num =   Math.floor(num/10)
//     }
//     return reversed
 
// }
//   let result = reversenum(123)

//   console.log("result",result)
// >>>>>>> 28a150c0fc1c010fed4da57e6395de4b87f48baf

// function factorial(n){
//   let result = 1

// for(let i =n; i>0; i--){
//   result *= i;
// }
// return result;

// }

// console.log(factorial(10))

// function myfunc(n){
//   if(n ===0){
//     return n = 1

//   }
//   return n * myfunc(n-1)
// }
// console.log(myfunc(100))

//  let person ={
//   fname: "vikas",
//   lName: "tomar"
//  }
 
//  let {fname: myfirstName, lName: lastName } = person;

//  console.log(myfirstName);

// filter method
// const words = ['apple','banana','cherry','date'];
// const longword = words.filter((word)=>word.length > 5);
// console.log(longword)

// promise program :: async and await

// function fetchData(){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("Data Fetched");
        
//         },2000);
//     });
// }
 //Async function using await to handle asynchronous

//  async function fetchDataAsync(){
//     console.log("start fetching... data");
//     try {
//         const result = await fetchData();
//         console.log(result);
//     }
//     catch(error){
//         console.error("Error fetching data:",error);
//     }
//     console.log("End fetching data.");
//  }
//  fetchDataAsync()


// setTimeout( function hi(){
//     console.log("1 sec");
// }, 1000);
// hi()

// shortest string
// const fruits = ["apple","kk","banana","kiwi","orange"];
// const shortName = fruits.reduce((shortest,current)=>
// current.length<shortest.length ? current : shortest,fruits[2])
// console.log(shortName);


// let names = ["ram","shayam","seeta","geeta"];
// const makeitShort = names.reduce((shrt,curr)=>
// curr.length<shrt.length ? curr : shrt,names[0])

// console.log(makeitShort);

function makeItreverse(num){
    let reversed = 0;
    while(num > 0){
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num/10);
    }
    return reversed;
}
let x = 7865;
let revx = makeItreverse(x)
console.log(revx);
