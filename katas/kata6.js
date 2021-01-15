const repeatNumbers = function (data) {
  let str = "";
  data.forEach((element, index, array) => {
    for (let i = 0; i < element[1]; i++) {
      str += element[0];
    }
    if (array.length > 1 && index < array.length - 1) {
      str += ", ";
    }
    return str;
  });
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*Create a function named repeatNumbers that will return a string 
with each of the given values repeated the appropriate number of times,
if there are multiple sets of values each set should be separated by a comma. 
If there is only one set of values then you should omit the comma. */