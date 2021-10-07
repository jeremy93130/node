var args = process.argv.slice(2)
var parameter = parseInt(args[0])


function multiply(num) {
    for (var i = 0; i <= 10; i++) {
        var results = num * i
        console.log(`${num} x ${i} = ${results}`)
    }
}





