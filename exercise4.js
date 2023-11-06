function print(a,b) {
let i = a
timerId = setInterval(function() {
    console.log(i);
    if (i == b) clearInterval(timerId);
    i++;
  }, 1000);
}

print(15, 20)