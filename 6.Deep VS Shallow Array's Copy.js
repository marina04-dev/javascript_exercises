// Deep VS Shallow Array's Copy
// Lesson 6: Exercise 2
/* Array's Methods
-indexOf(elem[])// 1st element's appearance
-lastIndexOf(elem[])// Last element's appearance
-includes(elem)//true or false if elem exists in the array 
-sort()//sorted ascended order
-reverse()// reversion of the array 
-push(elem)//adds the elem at the end of the array 
-pop()//removes and returns the last element of the array 
-unshift(elem)//adds elem at the start of the array 
-shift()//removes and returns the 1st elem of the array 
-concat(array2)//returns new array which consists of the join of the 2 arrays 
-slice()// array's copy
-slice(start)
-slice(start, end)*/
let arr = [[1], [2],[3]];
// Array's Shallow Copy 
let s = arr.slice();
s[0][0]=2;
console.log(arr);
console.log(s);



let array = [[1], [2],[3]];
// Array's Deep Copy 
let sub = [];
for (let i=0; i<array.length; i++) {
  sub[i] = [...array[i]];
}
sub[0][0]=2;
console.log(array);
console.log(sub);
