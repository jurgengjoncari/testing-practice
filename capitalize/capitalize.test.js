const capitalize = require('./capitalize')

test("It works with empty string", () => {
    expect(capitalize("")).toBe("")
})

test("It starts with a number", () => {
    expect(capitalize(1)).toBe("1")
})

test("It works with all lowercase", () => {
    expect(capitalize('hello world')).toBe('Hello world');
})

test("It works with all uppercase", () => {
    expect(capitalize('HELLO WORLD')).toBe('HELLO WORLD')
})