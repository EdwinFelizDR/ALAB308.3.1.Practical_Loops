/*Part 1: Fizz Buzz 

Accomplish the following: 
•	Loop through all numbers from 1 to 100. 
•	If a number is divisible by 3, log “Fizz.” 
•	If a number is divisible by 5, log “Buzz.” 
•	If a number is divisible by both 3 and 5, log “Fizz Buzz.” 
•	If a number is not divisible by either 3 or 5, log the number. 

*/

// Loop through all numbers from 1 to 100
function fizzBuzz(num){
   for (let i = 1; i <= num; i++) {
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

/*Part 2: Prime Time 

Write a script that accomplishes the following: 
•	Declare an arbitrary number, n. 
•	Create a loop that searches for the next prime number, starting at n and incrementing from there. 
•	As soon as you find the prime number, log that number and exit the loop. 
*/

// Declare an arbitrary number, n=10.

// Function to check if a number is prime
function isPrime(num) {
   if (num <= 1) return false; // 1 and numbers less than 1 are not prime
   if (num <= 3) return true; // 2 and 3 are prime
   if (num % 2 === 0 || num % 3 === 0) return false; // Even numbers greater than 2 and multiples of 3 are not prime

   // check if has exactly 2 factor (1 and itself)
   for (let i = 5; i = num; i++) {
         if ((i < num) && (num%i===0)){
            return false;
         }
         else return true;
      }
   }

// Function to find the next prime number after the starting number
function findNextPrime(startingNumber) {
   let n = startingNumber + 1; // Start checking from the number after the starting number
   if (isPrime(n)) return n; // If the next number is prime, return it
   return findNextPrime(n); // If not, recursively find the next prime number (startingnumber=n)
}

const n = 29; // Arbitrary number, you can change it to any value you want
const nextPrime = findNextPrime(n); // Find the next prime number after n

 /**
Part 3: Feeling Loopy
Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string.
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\
n98,Bill,Doctor’s Assistant,26
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
 */



function FeelingLoopy(Str){
   let row = [];
   let person = [];
   // Split the input string into rows by newline character
   row = Str.split('\n');

   // Loop through each row
   for (i=0;i<row.length;i++){
      person = row[i].split(','); // Split the row into individual elements by comma
      console.log(person);    // Log the resulting array
   }
} 

//Part 1: Fizz Buzz 
//fizzBuzz(100);

//Part 2: Prime Time 
//console.log("The next prime number after", n, "is", nextPrime); // Output the result

// FeelingLoopy("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");
FeelingLoopy("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232");
