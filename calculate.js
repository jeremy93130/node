var args = process.argv.slice(2)
var args2 = parseInt(args[0])
var args3 = parseInt(args[1])
var args4 = args[2]

function calculate(num, num1, somme) {
    var result

    if (somme === "+") {
        result = num + num1;
    } else if (somme === "*") {
        result = num * num1
    } else if (somme === "/") {
        result = num / num1
    } else if (somme === "-") {
        result = num - num1
    }else {
        result = "error"
    }
    console.log(result)
}


// calculate(args2 , args3, args4)


