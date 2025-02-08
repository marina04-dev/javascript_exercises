// Lesson 8.2 - Exercise 6
function bankAccount(number, owner, amount) {
  this.number = number;
  this.owner = owner;
  this.amount = amount;
}

let donald = new bankAccount("789065443456789","Donald Trump",673246746.99);
let mask = new bankAccount("786543334455213", "Elon Musk", 90909077778.87);

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

donald.transfer(mask, 6767);
