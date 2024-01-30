// //fetching
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// // fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error',error))


// function getRandom(min,max){
//     return Math.floor(Math.random() * (max - min +1) + min);

// }

// console.log(getRandom(6,10))

 function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
 }
 const num = 7;
 console.log(`Factorial of ${num}`,factorial(num));