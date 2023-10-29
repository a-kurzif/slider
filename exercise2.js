let x = 'ЖОПА'
let type = typeof(x)
console.log(type)

switch(type) {
    case 'number':
    console.log('Тип - число');
    break;

    case 'string':
    console.log('Тип - строка');
    break;

    case 'boolean':
    console.log('Тип - логический');
    break;
    
    default:
    console.log('Тип не определён');
}