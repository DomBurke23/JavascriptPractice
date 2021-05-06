/*
 * Arrays are JavaScript’s way of making lists. 
 * Arrays can store any data types (including strings, numbers, and booleans). 
 * Like lists, arrays are ordered, meaning each item has a numbered position.
 */
 
/* create arrays */
const hobbies = ['dancing','swimming','horse riding'];
console.log(hobbies);

/* accessing elements */
const hello = 'Hello World';
console.log(hello[6]); // outputs w 
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); // returns undefined 

/* update elements */
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons); //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0]='Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3]='Spoon';
console.log(utensils);

/* .length property */
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length); // Output: 2

/* .push() method 
 * allows us to add items to the end of an array.
 */
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

/* .pop() Method 
 * removes the last elements from the array 
*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2

/* Remove first element from array */
groceryList.shift();
console.log(groceryList);

/* add element to start of array */
groceryList.unshift('popcorn');
console.log(groceryList);

/* Only print the elements in this range */
console.log(groceryList.slice(1,4));
console.log(groceryList);

/* index of a particular element */
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/* arrays and functions */
const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/* Nested Arrays */
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
console.log(target); // prints 6