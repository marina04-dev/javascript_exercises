/* Random Function */
/* Lesson 6: Exercise 4 */
function randomFloat(min, max) {
  return Math.random()*(max-min)+min;
}
function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min)+min);
}

let array = new Array(10);
for (let i=0; i<array.length; i++) {
  array[i]=randomInt(0,101);
}
console.log(array);

let sum=0;
for (let elem of array) {
  sum+=elem;
}
console.log(`Average is: ${sum/array.length}`);

