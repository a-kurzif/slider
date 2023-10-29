let map = new Map()
map.set(1, "Яблоко")
map.set(2, "Груша")
map.set(3, "Апельсин")
map.set(4, "Арбуз")
map.set(5, "Банан")
map.set(6, "Мандарин")


map.forEach((value, key, map) => {
    console.log(`Ключ - ${key}, Значение - ${value}`)
})