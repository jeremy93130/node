var example = require("./table-utils")
example = require("./multiply")

var prompt = require("prompt")
var mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1)

prompt.start()

function play() {
    prompt.get({ description: "Quel est le nombre mystère?" }, function (err, res) {
        if (res !== Number) {
            console.log("Error abruti !")
            play()
        } else if (res < mysteryNum) {
            console.log("c'est plus !")
            play()
        } else if (res > mysteryNum) {
            console.log("C'est moins !")
            play()
        } else if (res === mysteryNum) {
            console.log("BINGO MON COCO")
        }
    });
}

play()