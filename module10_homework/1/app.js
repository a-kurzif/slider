const btn = document.getElementById('btn')

const icon = document.querySelector(".icon")
const icon_fill = document.querySelector(".icon_fill")
icon.style.display = 'none'

const callback = () => {
    if (icon.style.display == 'none') {
        icon.style.display = 'unset'
        icon_fill.style.display = 'none'
    }

    else {
        icon.style.display = 'none'
        icon_fill.style.display = 'unset'
    }
}

btn.addEventListener('click', callback)