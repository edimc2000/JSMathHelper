const { randomNumberGenerator } = require("./mathhelper")


test("generates a random number between 1 and 10, 500 times", () => {
  const min = 1;
  const max = '10';
  const repetition = 500; 
  for (let index = 0; index <= repetition; index++) {
    result = randomNumberGenerator(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  }
});
