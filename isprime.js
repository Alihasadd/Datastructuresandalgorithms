//Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

const isPrime = (n) => {
    if ( n < 2 ){
      return false;
    }
    for (let i = 2; i < n; i++){
      if ( n % i === 0 ){
         return false;
      }
    }
    return true
  };
  isPrime(2); // -> true
  
  
  module.exports = {
    isPrime,
  };
  
  // P Giving a number, expected arguments are positive numbers
  // R True or false (boolean)
  // E 
  // P check if the number prime or not using the modulus by seeing if the number is divisible by itself
  
  //What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? Will there ever be an invalid input? Do I need to account for unexpected edge cases?
  
  // What do they want me to return? Are they expecting a string? array? object? Is there a certain format the return is expected in? Will the expected return ever change for invalid inputs or edge cases?
  
  // Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? Aim for at least 3 examples.
  
  // In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. Good pseudocode only comes with practice.

