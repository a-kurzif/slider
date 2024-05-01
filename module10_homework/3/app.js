const wsUri = "wss://echo-ws-service.herokuapp.com"

const btnSend = document.querySelector(".btn_send")

const msgArea = document.querySelector(".msg_area")

let websocket;

function writeMyMsg(msgText) {

    let msgContainer = document.createElement("div")
    msgContainer.innerHTML = '<div class="msg">' + msgText + '</div>'
    msgContainer.className = "mine"
    msgArea.appendChild(msgContainer)

  }


function writeServerMsg(msgText) {

    let msgContainer = document.createElement("div")
    msgContainer.innerHTML = '<div class="msg">' + msgText + '</div>'
    msgContainer.className = "server"
    msgArea.appendChild(msgContainer)

  }


btnSend.addEventListener('click', () => {

    const inputValue = document.querySelector(".input").value

    writeMyMsg(inputValue);

    websocket = new WebSocket(wsUri);

    websocket.onmessage = function(evt) {
        writeServerMsg(evt.data);
    };
    websocket.onerror = function(evt) {
        writeServerMsg(
        'ERROR: ' + evt.data
      );
    };
    
    setTimeout(() => {
        websocket.send(inputValue);
      }, "1000");
    // Добавила таймаут, потому что иначе вылезало Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.


    document.querySelector(".input").value = ''

  });



  const btnGeo = document.querySelector(".btn_geo")


  btnGeo.addEventListener('click', () => {
    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

        let msgContainer = document.createElement("div")
        msgContainer.innerHTML = '<div class="msg"><a target="_blank" href="' + href + '">Моя гео-локация</a></div>'
        msgContainer.className = "mine"
        msgArea.appendChild(msgContainer)


        websocket = new WebSocket(wsUri);
        setTimeout(() => {
            websocket.send('Мои координаты - ' + latitude + ', ' + longitude);
          }, "1000");

        })


      } else {
        writeMyMsg('Определение координат недоступно')
      }
  })