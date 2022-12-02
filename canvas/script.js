    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");
ctx2.moveTo(0, 0);
ctx2.lineTo(200, 100);
ctx2.stroke();

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas.getContext("2d");
ctx3.beginPath();
ctx3.arc(95, 50, 40, 0, 2 * Math.PI);
ctx3.stroke();


// ===============================
var c = document.getElementById("myCanvas4");
var ctx4 = c.getContext("2d");

// Create gradient
var grd = ctx4.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx4.fillStyle = grd;
ctx4.fillRect(10, 10, 150, 80);


// ====================
var canvas5 = document.getElementById("myCanvas5");
var ctx5 = canvas5.getContext("2d");
ctx5.font = "30px Arial";
ctx5.fillText("Hello World", 10, 50);


// 🔥===================================
var canvas6 = document.getElementById("myCanvas6");
var ctx6 = canvas6.getContext("2d");
ctx6.font = "30px Arial";
ctx6.strokeText("Hello World", 10, 50);

//⚡ ===========================================
window.onload = function () {
    var canvas7 = document.getElementById("myCanvas7");
    var ctx7 = canvas7.getContext("2d");
    var img = document.getElementById("scream");
    // ctx7.drawImage(img, 10, 10);
};