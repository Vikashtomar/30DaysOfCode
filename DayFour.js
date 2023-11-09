/** @format */

// ## Challenge 4:
// ##30 DaysOfJs
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function areaOfTriangle(a, b, c) {
  const sp = (a + b + c) / 2;

  // Using Heron's formula
  const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

  return area;
}

let result = areaOfTriangle(5, 6, 7);
console.log(result);
