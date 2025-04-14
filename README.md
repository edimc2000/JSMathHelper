# Math Helper - Random Number Generator

A simple utility module that generates random numbers within a specified range.

**Usage**
Import the ```randomNumberGenerator``` function from the module:
```javascript
const { randomNumberGenerator } = require('math-helper-random');
```


**Generating Random Numbers**

```javascript
// Generate a random number between 1 and 10 (inclusive)
const randomNum = randomNumberGenerator(1, 10);
console.log(randomNum); // Output: e.g., 7
```

Parameters
start (Number): The lower bound of the range (inclusive)

end (Number): The upper bound of the range (inclusive)

Returns
(Number): A random integer between start and end (inclusive)

Error Handling
The function will throw an error if:

The input parameters are not numbers

javascript
Copy
try {
  randomNumberGenerator('a', 10);
} catch (error) {
  console.error(error.message); // "Invalid input(s), start and end parameters accepts numbers only. Try again"
}
Examples
javascript
Copy
// Roll a six-sided die
const diceRoll = randomNumberGenerator(1, 6);

// Pick a random card from a deck (1-52)
const randomCard = randomNumberGenerator(1, 52);

// Generate a random percentage (0-100)
const percentage = randomNumberGenerator(0, 100);
