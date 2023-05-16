// 1. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.


function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    console.log(`The longest word in "${str}" is "${longestWord}".`);
  }
  findLongestWord("The quick brown fox jumped over the lazy dog.");

  //  2. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

 
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  if (isPrime(5)) {
    console.log("5 is a prime number.");
  } else {
    console.log("5 is not a prime number.");
  }
  
  if (isPrime(10)) {
    console.log("10 is a prime number.");
  } else {
    console.log("10 is not a prime number.");
  }
  

  // 3. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively
  function findSecondLowestAndGreatest(numbers) {
    let sortedNumbers = numbers.sort(function(a, b) {
      return a - b;
    });
    let secondLowest = sortedNumbers[1];
    let secondGreatest = sortedNumbers[sortedNumbers.length - 2];
    
    console.log(`The second lowest number is ${secondLowest}, and the second greatest number is ${secondGreatest}.`);
  }
  let numbers = [5, 8, 2, 9, 4, 3];
  findSecondLowestAndGreatest(numbers);

  

// 4. Write a JavaScript function to extract unique characters from a string.
function extractUniqueCharacters(str) {
    let uniqueChars = '';
  
    for (let i = 0; i < str.length; i++) {
      if (uniqueChars.indexOf(str[i]) === -1) {
        uniqueChars += str[i];
      }
    }
  
    console.log(`The unique characters in "${str}" are "${uniqueChars}".`);
  }
  extractUniqueCharacters("Hello World!");
  
  extractUniqueCharacters("JavaScript is awesome!");

  // 5. Write a JavaScript function to find the first not repeated character.
  function findFirstNotRepeatedChar(str) {
    let charCount = {};
  
    // Count the occurrence of each character in the string
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]]) {
        charCount[str[i]]++;
      } else {
        charCount[str[i]] = 1;
      }
    }
  
    // Find the first character with a count of 1
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]] === 1) {
        return str[i];
      }
    }
  
    // Return null if no character has a count of 1
    return null;
  }
  let result = findFirstNotRepeatedChar("Hello World!");
  console.log(`The first not repeated character in "Hello World!" is "${result}".`);
  
  result = findFirstNotRepeatedChar("JavaScript is awesome!");
  console.log(`The first not repeated character in "JavaScript is awesome!" is "${result}".`);
  
  result = findFirstNotRepeatedChar("Hello");
  console.log(`The first not repeated character in "Hello" is "${result}".`);

  
// 6. Write a JavaScript program to pass a 'JavaScript function' as a parameter.


  function greeting(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function callFunction(func, param) {
    func(param);
  }
  
  callFunction(greeting, "Giorgi");



  
  // 7. Write a JavaScript function to get the function name.


  function getFunctionName(func) {
    return func.name;
  }
  function sayHello() {
    console.log("Hello!");
  }
  
  let functionName = getFunctionName(sayHello);
  console.log(`The name of the function is "${functionName}".`);
  