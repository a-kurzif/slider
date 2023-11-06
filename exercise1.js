let arr = [2, 16, 0, 2, 223, 0, 12, 5, 7, 5]

let oddCount = 0
let evenCount = 0
let zeroCount = 0

function numberCount() {

for (i = 0; i < arr.length; i++) {

    if (typeof(arr[i]) == 'number' && typeof(arr[i]) !== 'NaN') {
        
        if (arr[i] == 0) {
            zeroCount = zeroCount+1
            }

        else {
        
        if (arr[i] % 2 !== 0) {
            oddCount = oddCount+1
            }

        if (arr[i] % 2 == 0 ) {
            evenCount = evenCount+1
            }

        }

    }
}

console.log('Количество чётных чисел - '+ evenCount)
console.log('Количество нечётных чисел - '+ oddCount)
console.log('Количество нулей - '+ zeroCount)

}

numberCount()