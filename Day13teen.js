// // **Challenge 13**
// // Problem Statement: Implement a memoization function.

// // Description: Write a function that takes a function as its argument and returns a memoized version of the function.
// // Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.

function funcmemoize(func) {
    const cache = new Map();
    return (...args) => {
      const key = args.join('-');
      return cache.has(key) ? cache.get(key) : cache.set(key, func(...args)).get(key);
    };
  }
  
  
  // function to be memoiazed
  function factorial(n) {
    return n <= 1 ? 1 : n * factorialMemo(n - 1);
  } 
  const factorialMemo = funcmemoize(factorial);
  
   
  console.log(factorialMemo(5));  
  console.log(factorialMemo(7));  
  

 