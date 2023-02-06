let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

let x;
let y;
let v;
let w;
let centro = 10;

function disenharCircunferencia(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
    pincel.stroke();
}

function limpiarPantalla() {

    pincel.clearRect(0, 0, 600, 400);
}

function dibujarBlanco() {
    limpiarPantalla();
    x = Math.round(Math.random() * 600);
    y = Math.round(Math.random() * 400);
    disenharCircunferencia(x, y, centro + 30, "white");
    disenharCircunferencia(x, y, centro + 20, "red");
    disenharCircunferencia(x, y, centro + 10, "white");
    disenharCircunferencia(x, y, centro, "red");
    console.log(x + "," + y);
}

setInterval(dibujarBlanco, 900);
let acertaste = document.getElementById('acertaste');

function dispararAlBlanco(evento) {
    v = evento.pageX - pantalla.offsetLeft;
    w = evento.pageY - pantalla.offsetTop;

    if ((v < x + centro) && (v > x - centro) && (w < y + centro) && (w > y - centro)) {

        acertaste.classList.add('active');
    }
    else {
        acertaste.classList.remove('active')
    }
    console.log(v + "," + w);
}

pantalla.onclick = dispararAlBlanco;