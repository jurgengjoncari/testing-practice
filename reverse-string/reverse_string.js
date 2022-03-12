module.exports = function reverseString(input) {
    const string = input.toString()

    return string.split("").reverse().join("")
}