const obj = {
    a: 12,
    b: 13,
    c: 14,
}

function property (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} ${obj[key]}`)
        }
    }
}

property (obj)