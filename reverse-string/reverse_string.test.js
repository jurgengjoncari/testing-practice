const reverseString = require('./reverse_string')

test('It works on empty strings', () => {
    expect(reverseString('')).toBe('')
})

test('It works on numbers', () => {
    expect(reverseString(123)).toBe('321')
})

test('It works with one word', () => {
    expect(reverseString("hello")).toBe("olleh")
})

test('It works with space', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})