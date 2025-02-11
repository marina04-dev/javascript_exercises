// lesson 8.5 Exercise 2.1-2.2
class Customer {
  constructor(fullname,address,orders) {
    this.fullname = fullname;
    this.address = address;
    if (this.orders===undefined) {
      this.orders = [];
    }
    else {
      this.orders = orders;
    }
  }
  
  placeOrder(order) {
    this.orders.push(order);
  }
  
  toString() {
    let header = `Name: ${this.fullname},\nAddress: ${this.address}\n` + "=======================================\n";
    let rest = "";
    let sum = 0.0;
    for (let order of this.orders) {
      rest += "\n" + order;
      sum += order.payment.amount;
    }
    return header + rest + `\n\nSum: ${sum}`;
  }
}

class Order {
  constructor(date,payment) {
    this.date = date;
    this.payment = payment;
  }
  
  toString() {
    return `\nDate: ${this.date}\nPayment: ${this.payment}`
  }
}

class Payment {
  constructor(amount) {
    this.amount = amount;
  }
  
  toString() {
    return this.amount;
  }
}

class Credit extends Payment{
  constructor(amount, number, expDate) {
    super(amount);
    this.number = number;
    this.expDate = expDate;
  }
  
  toString() {
    return super.toString() + `\nCredit {Number: ${this.number}, Exp.Date: ${this.expDate}}`;
  }
}

class Check extends Payment{
  constructor(amount, checkBook, bankCode) {
    super(amount);
    this.checkBook = checkBook;
    this.bankCode = bankCode;
  }
  
  toString() {
    return super.toString() + `\nCheck {Check Book: ${this.checkBook}, Bank Code: ${this.bankCode}}`;
  }
}

let customer = new Customer("Jim Carter", "France,8907");
customer.placeOrder(new Order("20192343", new Payment(12.23)));
customer.placeOrder(new Order("20887343", new Credit(22.34,"56436267", "2020-12-31")));
customer.placeOrder(new Order("20887343", new Check(34.67,"33436267", "2130-AZ-09")));
console.log(`${customer}`);
