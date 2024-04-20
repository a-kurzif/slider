const loader = document.querySelector("#loading");

function displayLoading() {
    loader.classList.add("display")
}

async function getCats() {


    const resp = await fetch ('https://api.thecatapi.com/v1/images/search?limit=20');
    const respData = await resp.json();

    const cats = document.querySelector(".container")

    let key

    for (key in respData) {
        cats.innerHTML += `<div class="card">
        <img class="image" src="${respData[key].url}"></div>`
    }

    loader.classList.remove("display")

  }


function buttonClick() {
    displayLoading()
    document.querySelector(".container").innerHTML = "";
    getCats()
}


const button = document.querySelector('#btn')
button.addEventListener('click', () => buttonClick());

