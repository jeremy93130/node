var args = process.argv.slice(2)

function calculate(num, num1, somme) {
    num = args[0]
    num1 = args[1]
    somme = args[2]
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


console.log(calculate())


