let isPrime = true

function primeNumbers(num) {

if (num == 1 || num == 0) {
    console.log('Единица и ноль - исключение')
}

else {

if (num <= 1000) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
        isPrime = false
        }
}


if (isPrime) {
    console.log(`${num} - Число простое`)
}
else {
    console.log(`${num} - Число не простое`)
}

}

else {
    console.log('Введено число больше 1000')
}

} 

}

primeNumbers(0)