let arr = [1, 16, "строка", 2, 223, "ещё строка", 0, 4, 57, 5]

let oddCount = 0
let evenCount = 0
let zeroCount = 0

for (i = 0; i < arr.length; i++) {

    let type = typeof(arr[i])

    if (type == 'number') {
        if (arr[i] % 2 !== 0) {
            oddCount = oddCount+1
            }

        if (arr[i] % 2 == 0 && arr[i] != 0) {
            evenCount = evenCount+1
            }

        if (arr[i] == 0) {
            zeroCount = zeroCount+1
            }
        }
    }

console.log('Количество чётных чисел - '+ evenCount)
console.log('Количество нечётных чисел - '+ oddCount)
console.log('Количество нулей - '+ zeroCount)