
/* Functions */
function greetWorld() {
  console.log('Hello, World!');
}
function getReminder(){
  console.log('Water the plants.');
}
function greetInSpanish(){
  console.log('Buenas Tardes');
}
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

/* the following four functions link to helper functions. */
function monitorCount(rows,columns){
  return rows*columns;
}
function costOfMonitors(rows, columns){
  return monitorCount(rows,columns)*200;
}
function multiplyByNineFifths(number) {
  return number * (9/5);
}
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}
greetWorld(); // Output: Hello, World!
getReminder();
greetInSpanish();
sayThanks('Cole'); 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);
getFahrenheit(15); // returns 59 
const totalCost = costOfMonitors(5,4);
console.log(totalCost);

/* function expression 
 * To define a function inside an expression, we can use the function keyword. 
 * In a function expression, the function name is usually omitted. 
 * A function with no name is called an anonymous function. 
 * A function expression is often stored in a variable in order to refer to it. 
 */
const plantNeedsWater = function(day){ //assigned an anonymous function 
  if(day==='Wednesday'){
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));

/* arrow functions 
 * Arrow functions remove the need to type out the keyword function 
 * every time you need to create a function. 
 */
const plantNeedsWater1 = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;

/* Scope */
const city = 'New York City'; // global variable 
function logCitySkyline() { // code inside {} is a block 
  let skyscraper = 'Empire State Building'; // local variable 
  return 'The stars over the ' + skyscraper + ' in ' + city; 
}
console.log(logCitySkyline());
