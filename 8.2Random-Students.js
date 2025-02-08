//Lesson 8.2: Exercise 4- Exercise 5
function Student(name, surname, grade) {
  this.name = name;
  this.surname = surname;
  this.grade = grade;
}


Student.prototype.toString = function() {
  return `${this.name} ${this.surname} (grade: ${this.grade})`;
}


let firstNames = ["Karen","Maria","Loren","Lucy","Tom","Timothee","Lara","Bob","John","Jonathan","Kylie","Julia","Peter","Hector","Jacob","Nick","Thomas","Marina","Kate","Anna"];
let lastNames = ["Cruise","Holland","Pitt","Poole","Ashley","Jenner","Phelps","Kroft","Mask","Trump","Jenneris","Stew","Lopez","Affleck","Manoban","Osten","Einstein","Lancelot","Conor","Uster"];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max-min) +min);
}

let students = new Array(10);
for (let i=0; i<students.length; i++) {
  students[i] = new Student(
    firstNames[randomInt(0,firstNames.length)],
    lastNames[randomInt(0,lastNames.length)]
  );
}

console.log(students);

function gradeStudent(student) {
  student.grade = randomInt(0,11);
}

for (let student of students) {
  gradeStudent(student);
  console.log("" + student);
}


function average(students) {
  let sum=0;
  for (let student of students) {
    sum += student.grade;
  }
  return sum/students.length;
}
console.log(`The Average is ${average(students)}`);
