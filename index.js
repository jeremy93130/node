var example = require("./table-utils")
example = require("./multiply")

var prompt = require("prompt")
var mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1)

prompt.start()

function play() {
    prompt.get({ name: "play", description: "Quel est le nombre mystère?" }, function (err, res) {
        if (isNaN(res.play)) {
            console.log("ce n'est pas un nombre ! ")
            play()
        } else if (res.play < mysteryNum) {
            console.log("c'est plus !")
            play()
        } else if (res.play > mysteryNum) {
            console.log("C'est moins !")
            play()
        } else{
            console.log("BINGO MON COCO")
        }
    });
}

play()