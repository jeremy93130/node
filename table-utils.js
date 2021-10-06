var args = process.argv.slice(2)

var example = require("./multiply")

console.log(example)


function multiply(num) {
    num = args[0]
    for (var i = 0; i <= 10; i++) {
        var results = num * i
        console.log(`${num} x ${i} = ${results}`)
    }
    console.log("\n")
}
console.log(multiply())

function addSomme(num) {
    num = args[0]
    for (var i = 0; i <= 10; i++) {
        var results = Number(num) + i
        console.log(`${num} + ${i} = ${results}`)
    }
    console.log("\n")
}
console.log(addSomme())

module.export = addSomme()
module.export = multiply()