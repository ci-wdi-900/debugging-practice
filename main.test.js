const findBiggestNumber = require('./main.js')

describe('findBiggestNumber', () => {
  it('finds the biggest number in a set', () => {
    expect(findBiggestNumber([5, 8, 3])).toBe(8);
    expect(findBiggestNumber([2, 4, 10])).toBe(10);
  })

  it('handles negative numbers correctly', () => {
    expect(findBiggestNumber([-10, -5, -8])).toBe(-5);
  })
})