const { add, subtract, divide, multiply } = require('./calculator')

test('Add two numbers', () => {
    expect(add(1, 2)).toBe(3)
})

test('The difference is positive', () => {
    expect(subtract(4, 3)).toBe(1)
})

test('The difference is negative', () => {
    expect(subtract(5, 8)).toBe(-3)
})

test('Multiply two positive numbers', () => {
    expect(multiply(5, 6)).toBe(30)
})

test('Multiply with zero', () => {
    expect(multiply(0, 6)).toBe(0)
})

test('Multiply with one negative number', () => {
    expect(multiply(-5, 6)).toBe(-30)
})

test('The Quotient is a whole number', () => {
    expect(divide(12, 3)).toBe(4)
})

test('The Quotient is not a whole number', () => {
    expect(divide(7, 2)).toBe(3.5)
})

test('The Quotient is a periodic number', () => {
    expect(divide(10, 3)).toBe(3.3333333333333335)
})

test('Divisor is 0', () => {
    expect(divide(12, 0)).toBe(Infinity)
})