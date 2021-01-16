// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

//sphereVolume()will calculate the volume of a sphere given a radius
const sphereVolume = function (radius) {
  // Code here!
  return 4 / 3 * PI * Math.pow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

//coneVolume() will calculate the volume of a cone given a radius and a height
const coneVolume = function (radius, height) {
  // And here!
  return PI * Math.pow(radius, 2) * height / 3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

//prismVolume() will calculate the volume of a prism given a height, a width, and a depth
const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

/*The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. 
The totalVolume function should use the previous three functions to calculate the total volume of an attraction. */
const totalVolume = function (solids) {
  // Code here? Yup!
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);