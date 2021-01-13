const loopyLighthouse = function([min, max], [first, sec], [str1, str2]) {

  for (let x = min; x <= max; x = x + 1) {
    if ((x % first) === 0 && (x % sec) === 0) {
      console.log(str1 + str2);
    } else if ((x % first) === 0) {
      console.log (str1);
    } else if ((x % sec) === 0) {
      console.log(str2); 
    } else {
      console.log(x);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

