const btn = document.querySelector('button')



const callback = () => {
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    alert('Размеры Вашего экрана - ' + width + 'x' + height)
}

btn.addEventListener('click', callback)