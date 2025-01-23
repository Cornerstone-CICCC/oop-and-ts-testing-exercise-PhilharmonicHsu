// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(4, 'increment') will eventualy return 10
// Test case 2: counter(4, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')

afterEach(() => {
  jest.clearAllTimers()
})

test("counter(4, 'increment') will eventualy return 4", () => {
  const data = counter(4, 'increment')
  expect(data).resolves.toBe(4)
})

test("counter(4, 'decrement') will eventually return 0", () => {
  const data = counter(4, 'decrement')
  expect(data).resolves.toBe(0)
})