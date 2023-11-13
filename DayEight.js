// **Challenge 8**  
// Write a JavaScript function to get all possible subsets with a fixed length (for example 2)
// combinations in an array.  
// Sample array : \[1, 2, 3\] and subset length is 2  
// Expected output : \[\[2, 1\], \[3, 1\], \[3, 2\], \[3, 2, 1\]\]

function getSubsetsWithLength(arr, length) {
    const result = [];
  
    function generateSubsets(start, currentSubset) {
      if (currentSubset.length === length) {
        result.push([...currentSubset]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        currentSubset.push(arr[i]);
        generateSubsets(i + 1, currentSubset);
        currentSubset.pop();
      }
    }
  
    generateSubsets(0, []);
    return result;
  }
  
  const sampleArray = [1, 2, 3];
  const subsetLength = 2;
  const result = getSubsetsWithLength(sampleArray, subsetLength);
  
  console.log(result);
  