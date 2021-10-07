var args = process.argv.slice(2)
var parameter = args[0]
var parameterAdd = parseInt(args[0])


var example = require("./multiply")

// console.log(example)


function multiply(num) {
    num = args[0]
    for (var i = 1; i <= 10; i++) {
        var results = num * i
        console.log(`${num} x ${i} = ${results}`)
    }
}
// multiply(parameter)

function addSomme(num) {
    for (var i = 0; i <= 10; i++) {
        var results = num + i
        console.log(`${num} + ${i} = ${results}`)
    }
}
// addSomme(parameterAdd)

module.export = {
    multiply,
    addSomme
}