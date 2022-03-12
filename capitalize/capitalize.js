module.exports = function capitalize(input) {
    const string = input.toString()
    
    if (string === "") {
        return string
    } else {
        return string[0].toUpperCase() + string.slice(1)
    }
}