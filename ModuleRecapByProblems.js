let age = 12
let hasAdult = true
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
}


let finalPrice = tickitPrice - ( tickitPrice * discount / 100 )

console.log("Final Price: " + finalPrice);