let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

let count = 0

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
    
    if (arr[i] == arr[j]) {
        count = count+1
    }
}
}

if (count != 0) {
    console.log(true)
}

else {
    console.log(false)
}

