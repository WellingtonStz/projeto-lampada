const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');



function on() {
    lamp.src = "./ligada.jpg";
}

function off() {
    lamp.src = "./desligada.jpg";
}

function broken() {
    lamp.src = "./quebrada.jpg";
}



turnOn.addEventListener('click', on);
turnOff.addEventListener('click', off);
lamp.addEventListener('mouseover', on);
lamp.addEventListener('mouseleave', off);
lamp.addEventListener('dblclick', broken);






