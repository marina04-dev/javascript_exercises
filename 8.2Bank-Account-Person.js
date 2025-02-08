// Lesson 8.2: Exercise 6 2nd Part
function bankAccount(number, owner, amount) {
  this.number = number;
  this.owner = owner;
  this.amount = amount;
}

function Person(fullName, age, ID) {
  this.fullName = fullName;
  this.age = age;
  this.ID = ID;
}

let bob = new Person("Bob Dylan", 34, 678954);
let jane = new Person("Jane Owsten", 25, 890765);



let account1 = new bankAccount("789065443456789", bob,673246746.99);
let account2 = new bankAccount("786543334455213", jane, 90909077778.87);

bankAccount.prototype.transfer = function(account, amount) {
  if (this.amount >= amount) {
    this.amount -= amount;
    console.log(`${amount} transferred from ${this} to ${account}`);
  }
  else {
    console.log("Transfer Failed due to Insufficient Deposits.");
  }
}

bankAccount.prototype.toString = function() {
  return `[${this.owner}(number=${this.number}, amount=${this.amount})]`;
}


console.log(bob);
console.log(jane);
console.log(account1);
console.log(account2);
