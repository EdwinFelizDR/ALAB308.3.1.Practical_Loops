/*
Part 1: Fizz Buzz 

Accomplish the following: 
•	Loop through all numbers from 1 to 100. 
•	If a number is divisible by 3, log “Fizz.” 
•	If a number is divisible by 5, log “Buzz.” 
•	If a number is divisible by both 3 and 5, log “Fizz Buzz.” 
•	If a number is not divisible by either 3 or 5, log the number. 

*/

// Loop through all numbers from 1 to 100
function fizzBuzz(){
   for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) { //Checking if the remainder is zero when divide by 3 and 5.
         console.log("Fizz Buzz"); //If a number is divisible by both 3 and 5, log “Fizz Buzz.” 
      } else if (i % 3 === 0) { //Checking if the remainder is zero when divide by 3.
         console.log("Fizz"); //If a number is divisible by 3, log “Fizz.” 
      } else if (i % 5 === 0) { //Checking if the remainder is zero when divide by 5.
         console.log("Buzz"); //If a number is divisible by 5, log “Buzz.”
      } else {
         console.log(i); //If a number is not divisible by either 3 or 5, log the number. 
      }
   }
}

// fizzBuzz();