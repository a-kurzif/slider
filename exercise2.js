const obj = {
    abc: "привет",
    bcd: "как дела?",
    cde: "что делаешь?"
}

let str = "bcd"

function comparison (str, obj) {
    if (str in obj) {
        console.log('true')
    }
    else {
        console.log('false')
    }
}

comparison(str, obj)