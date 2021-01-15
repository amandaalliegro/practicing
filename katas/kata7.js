//Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function(input) {
  // Your code here
  let newStr = "";
  for (let i = 0; i < input.length; i++) {

    if (input[i] === " "){
      i++;
      newStr += input[i].toUpperCase();
    } else {
      newStr += input[i];
    }
  }
  return newStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));