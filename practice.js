/* printing */
console.log('JavaScript');
console.log(105); 
console.log(/*IGNORED!*/ 5);  // Still just prints 5 

/* arithmetic */
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

/* string concatenation */
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.');

/* properties */
console.log('Hello'.length); // Prints 5
console.log('Teaching the world how to code'.length);

/* methods */
console.log('Codecademy'.toUpperCase());
console.log('Hey'.startsWith('H')); // Prints true
console.log('    Remove whitespace   '.trim()); // remove the spaces 
console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.random() * 50); // random number between 0 and 50 ( can be decimal)
console.log(Math.floor(Math.random() * 50)); // whole number only 
console.log(Math.ceil(43.8)); // returns the smallest integer greater than or equal to a decimal number.
console.log(Number.isInteger(34.2)); // Prints false
console.log(Number.isInteger(2017));

/* variables */
var myName = 'Arya';
console.log(myName);
let meal = 'Enchiladas'; // The let keyword signals that the variable can be reassigned a different value. 
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
const constName = 'Gilberto'; // a const variable cannot be reassigned
console.log(constName); // Output: Gilberto

/* arithmetic and variables */
let w = 4;
w += 1;
w -= 2;
w *= 3;
w /= 4; 
console.log(w); 
let a = 10;
a++;
a--;
console.log(a);

/* string concatenation with variables */
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 

/* string interpolation */
const myPetConst = 'armadillo';
console.log(`I own a pet ${myPetConst}.`); // back tick key left to 1 

/* typeof */
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // string 
newVariable = 1;
console.log(typeof newVariable); // number 

/* conditional statements */
if (true) {
  console.log('This message will print!'); 
}
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}

/* Logical Operators */
let mood = 'sleepy';
let tirednessLevel = 6;
if ( mood ==='sleepy' && tirednessLevel>8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

/* Truthy and Falsy - check a variable has be given a value */
let numberOfApples = 0;
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!'); // outputs this 
}
let wordCount = 10;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
let favoritePhrase = '';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/* Short circuit evaluation */
let tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);

/* Ternary operators */
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
// same as 
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!'?console.log('I love that!'):console.log("I don't love that!");

/* Elseif */
let stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

/* switch case */
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
   console.log('No medal awarded.');
    break;
}
