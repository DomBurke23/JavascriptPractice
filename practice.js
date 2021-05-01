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


