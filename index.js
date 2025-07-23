// ------------- Smart Coffee Order Assistant -------------

// --- Part 1: Login & Access Control ---
const username = prompt("Enter username (admin or user):");
const password = prompt("Enter password:");

if ((username === "admin" || username === "user") && password === "1234") {
  const role = username === "admin" ? "Admin" : "User";
  const securityLevel = username === "admin" ? "high" : "low";
  alert(`Login successful! Welcome ${role}.`);
} else {
  alert("Invalid credentials! Access denied.");
  throw new Error("Access Denied");
}

// --- Part 2: Coffee Shop Order Calculator ---
const name = prompt("What is your name?");
const ageInput = prompt("What is your age?");
const age = parseInt(ageInput);

if (isNaN(age) || age <= 0) {
  alert("Invalid age entered.");
  throw new Error("Invalid age");
}

const coffeeTypeInput = prompt("Choose coffee type: espresso, latte, or cappuccino");
const coffeeType = coffeeTypeInput ? coffeeTypeInput.toLowerCase() : "";

const validTypes = ["espresso", "latte", "cappuccino"];
if (!validTypes.includes(coffeeType)) {
  alert("Invalid coffee type selected.");
  throw new Error("Invalid coffee type");
}

const quantityInput = prompt("How many cups would you like?");
const quantity = parseInt(quantityInput);

if (isNaN(quantity) || quantity <= 0) {
  alert("Invalid quantity entered.");
  throw new Error("Invalid quantity");
}

// Prices per cup
const prices = {
  espresso: 2.5,
  latte: 3.5,
  cappuccino: 4.0,
};

const pricePerCup = prices[coffeeType];
const originalTotal = pricePerCup * quantity;

// Discount 10% if age < 18 or > 60
const discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
const finalTotal = originalTotal - discount;

// --- Part 3: Bill Splitter with Tip ---
const peopleInput = prompt("How many people are splitting the bill? (1, 2, or 3)");
const people = parseInt(peopleInput);

if (![1, 2, 3].includes(people)) {
  alert("Invalid number of people.");
  throw new Error("Invalid people count");
}

const tipInput = prompt("Tip percentage? (0, 5, 10, or 15)");
const tipPercent = parseInt(tipInput);

if (![0, 5, 10, 15].includes(tipPercent)) {
  alert("Invalid tip percentage.");
  throw new Error("Invalid tip");
}

const tipAmount = finalTotal * (tipPercent / 100);
const totalWithTip = finalTotal + tipAmount;
const amountPerPerson = totalWithTip / people;

// --- Display Results ---
alert(
  `Hello ${name}!\n` +
  `You ordered ${quantity} ${coffeeType}(s).\n` +
  `Original total: $${originalTotal.toFixed(2)}\n` +
  `Discount: $${discount.toFixed(2)}\n` +
  `Tip: $${tipAmount.toFixed(2)}\n` +
  `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
  `Split between ${people} people: $${amountPerPerson.toFixed(2)} each`
);
