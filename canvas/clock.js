let canvas8 = document.getElementById('myCanvas8');
let ctx9 = canvas8.getContext("2d");
let radius = canvas8.height / 2;
ctx9.translate(radius, radius);
radius = radius * 0.90;
drawClock();

function drawClock() {
    ctx9.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx9.fillStyle = "white";
    ctx9.fill();
    //🚩 clock face
    drawFace(ctx9, radius);
}


function drawFace(ctx9, radius) {
    var grad;

    ctx9.beginPath();
    ctx9.arc(0, 0, radius, 0,2 * Math.PI);
    ctx9.fillStyle = 'white';
    ctx9.fill();
    grad = ctx9.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx9.strokeStyle = grad;
    ctx9.lineWidth = radius * 0.1;
    ctx9.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx9.fillStyle = '#333';
    ctx9.fill();
}


