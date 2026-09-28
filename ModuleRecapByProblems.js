// The Problem 

// 🧩 Problem #1
// Scenario

// A movie theater is building its online ticket system. Before a customer can book a ticket, the system must decide whether they are allowed to watch the movie and what price they pay.

// Task

// Write a program that decides the final ticket price for a customer, or tells them they cannot book.

// Rules:

// The movie is rated for viewers aged 13 or above. A younger viewer is allowed only if they are accompanied by an adult.
// The base ticket price is 500 taka.
// Children under 13 (with an adult) get 50% off.
// Students aged 13 or above get 20% off, but only if they have a valid student ID.
// Senior citizens (60 or above) get 30% off.
// Only one discount applies. If a customer qualifies for more than one, they get the bigger discount.
// If the customer is not allowed to watch, print a message saying booking is not allowed.
// Input
// text
// age            → a number
// hasAdult       → true or false
// isStudent      → true or false
// hasStudentId   → true or false
// Expected Result

// Print either the final ticket price or a "not allowed" message.

// Examples
// text
// age = 10, hasAdult = true,  isStudent = true,  hasStudentId = false
// → Final price: 250

// age = 10, hasAdult = false, isStudent = true,  hasStudentId = true
// → Booking not allowed

// age = 65, hasAdult = false, isStudent = true,  hasStudentId = true
// → Final price: 350
// Constraints
// Use only the values given above as variables at the top of your code.
// Think carefully about which rules can overlap.
// Difficulty

// ⭐⭐ Easy–Medium

let age = 79
let hasAdult = false
let isStudent = true
let hasStudentId = true
let tickitPrice = 500
let discount = 0

if (age < 13 && hasAdult === false && hasStudentId === false) {
    console.log("Sorry, You are not allowed");  
    
    
}

else{
    if (age < 13 && hasAdult === true) {
        discount = 50
    }

    if (age < 13 && isStudent === true && hasStudentId === true) {
        discount = 20
    }

    if (age >= 60) {
        discount = 30
    }
}


let finalPrice = tickitPrice - ( tickitPrice * discount / 100 )

console.log("Final Price:" + finalPrice);