// LOGIN SECTION
const username = prompt("Enter username (admin or user):");
const password = prompt("Enter password:");

if (
  (username === "admin" || username === "user") &&
  password === "1234"
) {
  const role = username === "admin" ? "Admin" : "User";
  const securityLevel = username === "admin" ? "high" : "low";
  alert(`Login successful! Welcome ${role}.`);
} else {
  alert("Invalid credentials! Access denied.");
  throw new Error("Access Denied");
}

// ORDER SECTION
const name = prompt("What is your name?");
const age = parseInt(prompt("What is your age?"));
const coffeeType = prompt("Choose coffee type: espresso, latte, or cappuccino").toLowerCase();
const quantity = parseInt(prompt("How many cups?"));

let pricePerCup;
if (coffeeType === "espresso") pricePerCup = 2.5;
else if (coffeeType === "latte") pricePerCup = 3.5;
else if (coffeeType === "cappuccino") pricePerCup = 4.0;
else {
  alert("Invalid coffee type selected.");
  throw new Error("Invalid Coffee Type");
}

let originalTotal = pricePerCup * quantity;
let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
let finalTotal = originalTotal - discount;

// BILL SPLIT SECTION
const people = parseInt(prompt("How many people to split the bill? (1, 2, or 3)"));
const tipPercent = parseInt(prompt("Enter tip percentage: 0, 5, 10, or 15"));
let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / people;

// DISPLAY RESULTS
alert(`Hello ${name}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${people} people: $${amountPerPerson.toFixed(2)} each`);
