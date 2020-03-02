const findBiggestNumber = function(numbers) {
  let biggestNumber = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    const number = numbers[i];
    if (number < biggestNumber) {
      biggestNumber += number;
    }
  }

  return biggestNumber;
}


module.exports = findBiggestNumber;