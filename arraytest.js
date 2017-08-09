var customer = {'name': 'John','age':27};
var message = "Hello" + customer.name + "\n" + customer.age ;
console.log(message);

var message1 = `Hello +${customer.name} 
${customer.age}`;
console.log(message1);