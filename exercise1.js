let num = prompt('Введите число')
num = +num
let type = typeof num
console.log(num)


if (type = Number) {

    if (isNaN(num)) {
        console.log('Вылез NaN')
    }

    else {

    if (num % 2 !== 0) {
        console.log('Число нечётное')
    }

    else {
        console.log('Число чётное')
    }

    }
    }
 
else {
    console.log('Ошибка')
}