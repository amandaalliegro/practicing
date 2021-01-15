/*Create a function named multiplicationTable that receives a number maxValue as input 
and creates a square multiplication table where maxValue is the largest value in the table.*/

const multiplicationTable = function(maxValue) {
  // Your code here
  let sqr = "";
  for (let row = 1; row <= maxValue; row++) {
    // all multiplications will starts at 1
    for (let col = 1; col <= maxValue; col++) {
      //when the function loops through both values, it will add another number (the result of row*col)
      sqr += row * col;
      if (col < maxValue) {
        //if the value of col is less than the value of maxValue, it will add the number on the same line
        sqr += " ";
      } else {
        //otherwise, it will start another line
        sqr += "\n"
      }
    }
  }
  return sqr;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));