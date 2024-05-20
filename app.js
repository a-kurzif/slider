const image = document.querySelector(".slider_photo")
const text = document.querySelector(".about")
const dots = document.querySelector(".dots")
const tabs = document.querySelector(".slider_tabs")

function sochi() {
    image.style.backgroundImage = "url('2.png')"
    text.innerHTML = '<div class="about_item"><h2>City:</h2><p>Sochi<br>Thieves</p></div><div class="about_item"><h2>apartment area:</h2><p>105 m2</p></div><div class="about_item"><h2>Repair time:</h2><p>4 months</p></div><div class="about_item"><h2>Repair Cost:</h2><p>Upon request</p></div>'
    dots.innerHTML = '<span class="dot" onclick="admiralLinkClick()"><img src=dot.svg></span><span class="dot" onclick="sochiLinkClick()"><img src=activedot.svg></span><span class="dot" onclick="patrioticLinkClick()"><img src=dot.svg></span>'
    tabs.innerHTML = '<a onclick="admiralLinkClick()"><h3>Rostov-on-Don, Admiral</h3></a><a onclick="sochiLinkClick()"><h3 class="active">Sochi Thieves</h3></a><a onclick="patrioticLinkClick()"><h3>Rostov-on-Don Patriotic</h3></a>'
}

function admiral() {
    image.style.backgroundImage = "url('1.png')"
    text.innerHTML = '<div class="about_item"><h2>City:</h2><p>Rostov-on-Don<br>LCD admiral</p></div><div class="about_item"><h2>apartment area:</h2><p>81 m2</p></div><div class="about_item"><h2>Repair time:</h2><p>3.5 months</p></div><div class="about_item"><h2>Repair Cost:</h2><p>Upon request</p></div>'
    dots.innerHTML = '<span class="dot" onclick="admiralLinkClick()"><img src=activedot.svg></span><span class="dot" onclick="sochiLinkClick()"><img src=dot.svg></span><span class="dot" onclick="patrioticLinkClick()"><img src=dot.svg></span>'
    tabs.innerHTML = '<a onclick="admiralLinkClick()"><h3 class="active">Rostov-on-Don, Admiral</h3></a><a onclick="sochiLinkClick()"><h3>Sochi Thieves</h3></a><a onclick="patrioticLinkClick()"><h3>Rostov-on-Don Patriotic</h3></a>'
}

function patriotic() {
    image.style.backgroundImage = "url('3.png')"
    text.innerHTML = '<div class="about_item"><h2>City:</h2><p>Rostov-on-Don<br>Patriotic</p></div><div class="about_item"><h2>apartment area:</h2><p>93 m2</p></div><div class="about_item"><h2>Repair time:</h2><p>3 months</p></div><div class="about_item"><h2>Repair Cost:</h2><p>Upon request</p></div>'
    dots.innerHTML = '<span class="dot" onclick="admiralLinkClick()"><img src=dot.svg></span><span class="dot" onclick="sochiLinkClick()"><img src=dot.svg></span><span class="dot" onclick="patrioticLinkClick()"><img src=activedot.svg></span>'
    tabs.innerHTML = '<a onclick="admiralLinkClick()"><h3>Rostov-on-Don, Admiral</h3></a><a onclick="sochiLinkClick()"><h3>Sochi Thieves</h3></a><a onclick="patrioticLinkClick()"><h3 class="active">Rostov-on-Don Patriotic</h3></a>'
}

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let index = 0

function imgChange() {
switch (index) {
    case (0):
        admiral();
        break;
    case (1):
        sochi();
        break;
    case(2):
        patriotic();
        break;
}
}

function nextClick() {
    index += 1
    if (index > 2) {
        index = 0
    }
    imgChange()
}

function prevClick() {
    index -= 1
    if (index < 0) {
        index = 2
    }
    imgChange()
}

prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);

const admiralLink = document.querySelector(".admiral")
const sochiLink = document.querySelector(".next")
const patrioticLink = document.querySelector(".patriotic")

function admiralLinkClick() {
    admiral()
    index = 0
}

function sochiLinkClick() {
    sochi()
    index = 1
}

function patrioticLinkClick() {
    patriotic()
    index = 2
}